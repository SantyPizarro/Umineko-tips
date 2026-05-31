import { renderAll } from "./renderer.js?v=pc-button-hover1";
import { appState } from "./state.js";
import * as Engine from "./engine.js?v=pc-button-hover1";

const TRANSITION_TIMINGS = {
    "break-black": { cover: 900, hold: 220, reveal: 520 },
    "break-whirl": { cover: 320, hold: 60, reveal: 860 },
    "break-left": { cover: 320, hold: 80, reveal: 760 },
    "break-wave": { cover: 320, hold: 80, reveal: 820 },
};
let screenTransitionRunning = false;

export function bindEvents() {
    const changeButton = document.getElementById("btn-pc-change");
    changeButton?.addEventListener("click", e => {
        e.stopPropagation();
        Engine.toggleCharacterVariant();
        saveState();
        renderAll();
    });

    document.addEventListener("click", async e => {
        if (screenTransitionRunning) return;
        const target = e.target;

        const charSlot = target.closest(".character-slot");
        if (charSlot) {
            Engine.selectCharacter(charSlot.dataset.id);
            saveState();
            return renderAll();
        }

        const tipContainer = target.closest(".tip-container");
        if (tipContainer) {
            Engine.selectTip(Number(tipContainer.dataset.tipIndex));
            saveState();
            return renderAll();
        }

        
        const epBtn = target.closest(".episode-btn");
        if (epBtn) {
            const episodeId = Number(epBtn.dataset.ep);
            if (episodeId === appState.currentEpisode) return;
            return runScreenTransition(getEpisodeTransitionType(episodeId), () => Engine.setEpisode(episodeId));
        }

        const modeBtn = target.closest(".mode-btn");
        if (modeBtn) {
            if (modeBtn.classList.contains("hidden") || modeBtn.dataset.mode === appState.selectionMode) return;
            return runScreenTransition(getModeTransitionType(modeBtn.dataset.mode), () => Engine.setSelectionMode(modeBtn.dataset.mode));
        }

        if (target.closest("#btn-execute")) {
            Engine.updateCharacterPhase(1);
            saveState();
            return renderAll();
        }
        if (target.closest("#btn-resurrect")) {
            Engine.updateCharacterPhase(-1);
            saveState();
            return renderAll();
        }

        if (target.closest("#btn-tips")) {
            if (appState.view === "character" && !Engine.getAvailableTips().length) return;
            if (appState.view === "character") {
                Engine.toggleTipsView();
                saveState();
                return renderAll();
            }
            return runScreenTransition("break-black", () => Engine.toggleTipsView());
        }
        if (target.closest("#btn-pc-transitions")) {
            appState.transitionsEnabled = !appState.transitionsEnabled;
            saveState();
            return renderAll();
        }
        if (target.closest("#btn-pc-next-mode")) {
            const nextMode = getNextSpecialMode();
            return runScreenTransition(getModeTransitionType(nextMode), () => Engine.goToNextSpecialMode());
        }
        if (target.closest("#btn-pc-change")) {
            Engine.toggleCharacterVariant();
            saveState();
            return renderAll();
        }
        if (target.closest("#text-next-btn")) {
            Engine.changePage(1);
            saveState();
            return renderAll();
        }
        if (target.closest("#text-back-btn")) {
            Engine.changePage(-1);
            saveState();
            return renderAll();
        }

        if (target.closest("#btn-fantasy-next")) {
            const nextMode = getNextSpecialMode();
            return runScreenTransition(getModeTransitionType(nextMode), () => Engine.goToNextSpecialMode());
        }
    });

    document.addEventListener("keydown", async e => {
        if (screenTransitionRunning) return;

        if (e.key === "ArrowRight") {
            Engine.changePage(1);
        } else if (e.key === "ArrowLeft") {
            Engine.changePage(-1);
        } else if (e.key === "ArrowDown") {
            Engine.selectAdjacentItem(1);
        } else if (e.key === "ArrowUp") {
            Engine.selectAdjacentItem(-1);
        } else if (e.key === "Enter") {
            if (appState.view === "character" && !Engine.getAvailableTips().length) return;
            if (appState.view === "character") {
                Engine.toggleTipsView();
                saveState();
                return renderAll();
            }
            return runScreenTransition("break-black", () => Engine.toggleTipsView());
        } else if (e.key === "Escape") {
            if (appState.view === "character") return;
            return runScreenTransition("break-black", () => {
                appState.view = "character";
                appState.selectedTipIndex = null;
                appState.tipTextOffset = 0;
            });
        } else {
            return;
        }

        saveState();
        renderAll();
    });
}

async function runScreenTransition(type, updateState) {
    const app = document.getElementById("app");
    const timing = TRANSITION_TIMINGS[type] || TRANSITION_TIMINGS["break-black"];
    screenTransitionRunning = true;

    if (!app || !appState.transitionsEnabled) {
        updateState();
        saveState();
        renderAll();
        screenTransitionRunning = false;
        return;
    }

    app.classList.add("screen-transition-active", `transition-${type}`, "screen-transition-covering");
    await wait(timing.cover);

    app.classList.add("screen-transition-covered");
    app.classList.remove("screen-transition-covering");
    updateState();
    saveState();
    renderAll();

    await nextFrame();
    await wait(timing.hold);
    app.classList.remove("screen-transition-covered");
    app.classList.add("screen-transition-revealing");
    await wait(timing.reveal);
    app.classList.remove("screen-transition-active", "screen-transition-revealing", `transition-${type}`);
    screenTransitionRunning = false;
}

function getEpisodeTransitionType() {
    return "break-black";
}

function getModeTransitionType(targetMode) {
    return "break-black";
}

function getNextSpecialMode() {
    const modes = Engine.getAvailableModes();
    if (appState.selectionMode === "normal" && modes.includes("fantasy")) return "fantasy";
    if (appState.selectionMode !== "future" && modes.includes("future")) return "future";
    return "normal";
}

function wait(ms) {
    return new Promise(resolve => window.setTimeout(resolve, ms));
}

function nextFrame() {
    return new Promise(resolve => window.requestAnimationFrame(() => resolve()));
}

export function restoreState() {
    try {
        const savedState = JSON.parse(localStorage.getItem("uminekoTipsState"));
        if (!savedState) return;

        appState.currentEpisode = savedState.currentEpisode || appState.currentEpisode;
        appState.selectionMode = savedState.selectionMode || appState.selectionMode;
        appState.view = savedState.view || appState.view;
        appState.selectedCharacterId = savedState.selectedCharacterId || null;
        appState.selectedTipIndex = Number.isInteger(savedState.selectedTipIndex) ? savedState.selectedTipIndex : null;
        appState.characterTextOffset = Number.isInteger(savedState.characterTextOffset) ? savedState.characterTextOffset : 0;
        appState.tipTextOffset = Number.isInteger(savedState.tipTextOffset) ? savedState.tipTextOffset : 0;
        appState.pcSpriteVariant = savedState.pcSpriteVariant || "original";
        appState.transitionsEnabled = savedState.transitionsEnabled !== false;

        const phaseKey = getPhaseKey();
        const phases = savedState.characterPhases?.[phaseKey] || {};
        for (const character of Engine.getAvailableCharacters()) {
            if (Number.isInteger(phases[character.id])) {
                character.currentPhase = phases[character.id];
            }
        }
    } catch {
        localStorage.removeItem("uminekoTipsState");
    }
}

function saveState() {
    const phaseKey = getPhaseKey();
    const existingState = getSavedState();
    const characterPhases = {
        ...(existingState.characterPhases || {}),
        [phaseKey]: Object.fromEntries(
            Engine.getAvailableCharacters().map(character => [character.id, character.currentPhase || 0])
        )
    };

    localStorage.setItem("uminekoTipsState", JSON.stringify({
        currentEpisode: appState.currentEpisode,
        selectionMode: appState.selectionMode,
        view: appState.view,
        selectedCharacterId: appState.selectedCharacterId,
        selectedTipIndex: appState.selectedTipIndex,
        characterTextOffset: appState.characterTextOffset,
        tipTextOffset: appState.tipTextOffset,
        pcSpriteVariant: appState.pcSpriteVariant,
        transitionsEnabled: appState.transitionsEnabled,
        characterPhases
    }));
}

function getPhaseKey() {
    return `ep${appState.currentEpisode}:${appState.selectionMode}`;
}

function getSavedState() {
    try {
        return JSON.parse(localStorage.getItem("uminekoTipsState") || "{}") || {};
    } catch {
        return {};
    }
}
