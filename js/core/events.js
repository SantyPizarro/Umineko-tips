import { renderAll } from "./renderer.js?v=pc-ep8-tip-visible7";
import { appState } from "./state.js";
import * as Engine from "./engine.js?v=pc-ep8-tip-visible7";

export function bindEvents() {
    const changeButton = document.getElementById("btn-pc-change");
    changeButton?.addEventListener("click", e => {
        e.stopPropagation();
        Engine.toggleCharacterVariant();
        saveState();
        renderAll();
    });

    document.addEventListener("click", e => {
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
            Engine.setEpisode(Number(epBtn.dataset.ep));
            saveState();
            return renderAll();
        }

        const modeBtn = target.closest(".mode-btn");
        if (modeBtn) {
            Engine.setSelectionMode(modeBtn.dataset.mode);
            saveState();
            return renderAll();
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
            Engine.toggleTipsView();
            saveState();
            return renderAll();
        }
        if (target.closest("#btn-pc-sprites")) {
            Engine.togglePcSpriteVariant();
            saveState();
            return renderAll();
        }
        if (target.closest("#btn-pc-next-mode")) {
            Engine.goToNextSpecialMode();
            saveState();
            return renderAll();
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
            Engine.goToNextSpecialMode();
            saveState();
            return renderAll();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "ArrowRight") {
            Engine.changePage(1);
        } else if (e.key === "ArrowLeft") {
            Engine.changePage(-1);
        } else if (e.key === "ArrowDown") {
            Engine.selectAdjacentItem(1);
        } else if (e.key === "ArrowUp") {
            Engine.selectAdjacentItem(-1);
        } else if (e.key === "Enter") {
            Engine.toggleTipsView();
        } else if (e.key === "Escape") {
            appState.view = "character";
        } else {
            return;
        }

        saveState();
        renderAll();
    });
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
