import { appState } from "./state.js";
import * as Engine from "./engine.js?v=pc-button-hover1";

const dom = {
    app: document.getElementById("app"),
    selectorContainer: document.getElementById("selector-container"),
    characterName: document.getElementById("character-name"),
    characterText: document.getElementById("character-text"),
    textNextBtn: document.getElementById("text-next-btn"),
    textBackBtn: document.getElementById("text-back-btn"),
    characterImage: document.getElementById("character-image"),
    mainLayout: document.getElementById("main-layout"),
    centerPanel: document.getElementById("center-panel"),
    infoPanel: document.getElementById("info-panel"),
    textContainer: document.getElementById("text-container"),
    characterVisual: document.getElementById("character-visual"),
    sideMenu: document.getElementById("side-menu"),
    leftPanel: document.getElementById("left-panel"),
    btnTips: document.getElementById("btn-tips")
};
dom.pcChangeBtn = document.getElementById("btn-pc-change");

export function renderAll() {
    const main = document.getElementById("main-layout");
    let availableModes = Engine.getAvailableModes();
    if (!availableModes.includes(appState.selectionMode)) {
        Engine.setSelectionMode("normal");
        availableModes = Engine.getAvailableModes();
    }

    const modeData = Engine.getCurrentModeData();
    const hasTips = Engine.getAvailableTips().length > 0;
    if (appState.view === "tips" && !hasTips) {
        appState.view = "character";
        appState.selectedTipIndex = null;
        appState.tipTextOffset = 0;
    }

    const isPcView = Boolean(modeData?.pc);
    const isPcCharacterView = isPcView && appState.view === "character";
    const isPcTipsView = isPcView && appState.view === "tips";
    const hasNextSpecialMode = availableModes.includes("fantasy") || availableModes.includes("future");

    main.classList.remove("fantasy-active", "future-active");

    if (appState.selectionMode === "fantasy") {
        main.classList.add("fantasy-active");
    } else if (appState.selectionMode === "future") {
        main.classList.add("future-active");
    }

    document.documentElement.style.setProperty("--scene-background", cssUrl(modeData.background));
    applyPcTheme(modeData.pc);
    dom.app.classList.toggle("pc-ui-active", isPcCharacterView || isPcTipsView);
    main.classList.toggle("pc-characters-active", isPcCharacterView);
    main.classList.toggle("pc-next-mode-visible", isPcCharacterView && hasNextSpecialMode);
    applyPcCharacterLayout(isPcCharacterView, hasNextSpecialMode);

    document.querySelectorAll(".episode-btn").forEach(btn => {
        btn.classList.toggle("active", Number(btn.dataset.ep) === appState.currentEpisode);
    });

    document.querySelectorAll(".mode-btn").forEach(btn => {
        const isAvailable = availableModes.includes(btn.dataset.mode);
        btn.classList.toggle("hidden", !isAvailable);
        btn.classList.toggle("active", btn.dataset.mode === appState.selectionMode);
    });
    const pcNextModeBtn = document.getElementById("btn-pc-next-mode");
    if (pcNextModeBtn) {
        pcNextModeBtn.classList.toggle("hidden", !isPcCharacterView || !hasNextSpecialMode);
        pcNextModeBtn.textContent = appState.selectionMode === "normal" && availableModes.includes("fantasy")
            ? "Next"
            : "Back";
    }
    const pcTransitionsBtn = document.getElementById("btn-pc-transitions");
    if (pcTransitionsBtn) {
        pcTransitionsBtn.classList.toggle("transitions-disabled", !appState.transitionsEnabled);
        pcTransitionsBtn.textContent = appState.transitionsEnabled ? "Disable Transitions" : "Enable Transitions";
    }

    dom.btnTips.classList.toggle("active", appState.view === "tips");
    dom.btnTips.classList.remove("hidden");
    dom.btnTips.disabled = false;

    renderLeftPanel();
    renderContent();
}

function applyPcTheme(pc) {
    const root = document.documentElement;
    if (!pc) {
        root.style.removeProperty("--pc-character-backdrop");
        root.style.removeProperty("--pc-character-backdrop-color");
        root.style.removeProperty("--pc-character-text-panel");
        root.style.removeProperty("--pc-flourish-image");
        return;
    }

    if (pc.characterBackdrop) root.style.setProperty("--pc-character-backdrop", cssUrl(pc.characterBackdrop));
    else root.style.setProperty("--pc-character-backdrop", "none");
    root.style.setProperty("--pc-character-backdrop-color", pc.characterBackdropColor || "transparent");
    if (pc.textPanel) root.style.setProperty("--pc-character-text-panel", cssUrl(pc.textPanel));
    if (pc.flourish) root.style.setProperty("--pc-flourish-image", cssUrl(pc.flourish));
}

function applyPcCharacterLayout(active, hasNextSpecialMode = false) {
    const pcStyles = [
        [dom.leftPanel, active ? { position: "absolute", inset: "0", padding: "0", overflow: "hidden", background: "transparent", pointerEvents: "none", zIndex: "auto" } : null],
        [dom.centerPanel, active ? { position: "absolute", inset: "0", display: "block", zIndex: "3", pointerEvents: "none" } : null],
        [dom.infoPanel, active ? { position: "absolute", inset: "0", width: "100%", height: "100%", padding: "0", background: "transparent" } : null],
        [dom.textContainer, active ? { position: "absolute", inset: "0", width: "100%", height: "100%" } : null],
        [dom.characterVisual, active ? { position: "absolute", inset: "0", display: "block", zIndex: "1", overflow: "hidden", pointerEvents: "none" } : null],
        [dom.sideMenu, active ? { position: "absolute", left: "1.875%", top: hasNextSpecialMode ? "57.9167%" : "53.75%", width: "26.875%", height: "32.7083%", pointerEvents: "auto" } : null],
        [dom.characterText, active ? { position: "absolute", left: "29.375%", top: "6.25%", width: "36.875%", height: "80.4167%", margin: "0", overflow: "hidden" } : null],
        [dom.characterImage, active ? { position: "absolute", top: "0", bottom: "auto", width: "auto", height: "100%", maxWidth: "none", maxHeight: "none", objectFit: "contain" } : null]
    ];

    for (const [element, styles] of pcStyles) {
        if (!element) continue;
        if (!styles) {
            element.removeAttribute("style");
            continue;
        }
        Object.assign(element.style, styles);
    }
}

function renderLeftPanel() {
    const characters = Engine.getAvailableCharacters();
    const tips = Engine.getAvailableTips();

    dom.selectorContainer.innerHTML = "";
    dom.selectorContainer.className = appState.view === "tips" ? "tips-mode" : "";

    if (appState.view === "character") {
        characters.forEach(char => {
            const state = Engine.getCurrentCharacterState(char);
            const slot = document.createElement("div");
            slot.className = `character-slot char-${char.id.toLowerCase()} state-${state?.phase || "active"}`;
            slot.dataset.id = char.id;
            if (char.pc) {
                const statePc = Engine.getCharacterStatePc(state);
                slot.classList.add("pc-character-slot");
                slot.dataset.pcCode = char.pc.code;
                slot.style.setProperty("--pc-grid-left", `${(char.pc.gridX / 640) * 100}%`);
                slot.style.setProperty("--pc-grid-top", `${(char.pc.gridY / 480) * 100}%`);
                slot.style.backgroundImage = `url('${statePc?.icon || char.pc.iconAlive}')`;
            } else {
                slot.style.backgroundImage = `url('${char.portrait}')`;
            }
            if (char.id === appState.selectedCharacterId) slot.classList.add("active");
            dom.selectorContainer.appendChild(slot);
        });
    } else {
        tips.forEach((tip, i) => {
            const btn = document.createElement("div");
            btn.className = `tip-container ${i === appState.selectedTipIndex ? 'active' : ''}`;
            btn.dataset.tipIndex = i;
            if (tip.buttonImage) {
                const image = document.createElement("img");
                image.src = tip.buttonImage;
                image.alt = tip.buttonTitle || tip.title;
                image.className = "tip-button-image";
                image.addEventListener("error", () => {
                    btn.textContent = tip.buttonTitle || tip.title;
                    btn.classList.add("tip-image-missing");
                }, { once: true });
                btn.appendChild(image);
            } else {
                const label = document.createElement("span");
                label.className = "tip-button-label";
                label.textContent = tip.buttonTitle || tip.title;
                btn.appendChild(label);
            }
            dom.selectorContainer.appendChild(btn);
        });
    }
}

function renderContent() {

    const isCharView = appState.view === "character";

    const data = isCharView
        ? Engine.getCurrentCharacterViewModel()
        : Engine.getCurrentTip();

    const offset = isCharView ? appState.characterTextOffset : appState.tipTextOffset;

    dom.mainLayout.className = dom.mainLayout.className
        .split(' ')
        .filter(c => !c.startsWith('tip-'))
        .join(' ');

    dom.mainLayout.classList.toggle("tips-active", !isCharView);

    if (!data) {
        dom.characterName.textContent = "";
        dom.characterText.classList.remove("image-page-active");
        dom.characterText.classList.remove("english-tip-page");
        dom.characterText.classList.remove("pc-character-text-image");
        dom.characterText.textContent = (isCharView && appState.currentEpisode === 1) ? "" : (isCharView ? "" : "");
        dom.characterImage.style.display = "none";
        if (dom.pcChangeBtn) dom.pcChangeBtn.classList.add("hidden");
        document.documentElement.style.setProperty("--tip-background", "none");
        togglePagination(false, false);
        return;
    }

    if (!isCharView && data.style) {
        dom.mainLayout.classList.add(data.style);
    }
    if (!isCharView && data.background) {
        document.documentElement.style.setProperty("--tip-background", cssUrl(data.background));
    } else {
        document.documentElement.style.setProperty("--tip-background", "none");
    }

    const pages = isCharView
        ? data.pages || []
        : Engine.getTipPages(data);
    const pcCharacterTextImage = isCharView
        ? (data.referenceTextImage || data.pc?.referenceTextImage)
        : null;
    const tipPageImage = !isCharView && data.pageImages ? pages[offset] : null;

    dom.characterName.textContent = data.name || data.title;
    dom.characterText.classList.toggle("image-page-active", Boolean(tipPageImage));
    dom.characterText.classList.toggle("english-tip-page", !isCharView && !tipPageImage);
    dom.characterText.classList.toggle("pc-character-text-image", Boolean(pcCharacterTextImage));
    dom.characterText.style.removeProperty("--pc-text-image");
    dom.characterText.innerHTML = "";

    if (pcCharacterTextImage) {
        dom.characterText.style.setProperty("--pc-text-image", cssUrl(pcCharacterTextImage));
    } else if (tipPageImage) {
        dom.characterText.style.setProperty("--pc-text-image", cssUrl(tipPageImage));
    } else {
        dom.characterText.innerText = pages[offset] || "";
    }

    if (isCharView) {
        dom.characterImage.src = data.pc?.tachi || data.image;
        if (data.pc?.tachiX) {
            dom.characterImage.style.setProperty("--pc-tachi-left", `${(data.pc.tachiX / 640) * 100}%`);
        } else {
            dom.characterImage.style.removeProperty("--pc-tachi-left");
        }
        dom.characterImage.style.display = "block";
        if (dom.pcChangeBtn) {
            dom.pcChangeBtn.classList.toggle("hidden", !data.pc?.changeable);
        }
    } else {
        dom.characterImage.style.display = "none";
        if (dom.pcChangeBtn) dom.pcChangeBtn.classList.add("hidden");
    }

    togglePagination(offset > 0, offset < pages.length - 1);
}

function cssUrl(path) {
    return `url("${new URL(path, document.baseURI).href}")`;
}

function togglePagination(showBack, showNext) {
    dom.textBackBtn.style.visibility = showBack ? "visible" : "hidden";
    dom.textNextBtn.style.visibility = showNext ? "visible" : "hidden";
}
