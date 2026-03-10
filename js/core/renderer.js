import { appState } from "./state.js";
import * as Engine from "./engine.js";

const dom = {
    selectorContainer: document.getElementById("selector-container"),
    characterName: document.getElementById("character-name"),
    characterText: document.getElementById("character-text"),
    textNextBtn: document.getElementById("text-next-btn"),
    textBackBtn: document.getElementById("text-back-btn"),
    characterImage: document.getElementById("character-image"),
    mainLayout: document.getElementById("main-layout"),
    btnTips: document.getElementById("btn-tips")
};

export function renderAll() {
    const isTips = appState.view === "tips";
    dom.mainLayout.classList.toggle("tips-active", isTips);
    dom.btnTips.textContent = isTips ? "Characters" : "Tips";

    renderLeftPanel();
    renderContent();
}

function renderLeftPanel() {
    const episode = Engine.getCurrentEpisode();
    if (!episode) return;

    dom.selectorContainer.innerHTML = "";
    dom.selectorContainer.className = appState.view === "tips" ? "tips-mode" : "";

    if (appState.view === "character") {
        episode.characters.forEach(char => {
            const state = char.states[char.currentPhase];
            const slot = document.createElement("div");
            slot.className = `character-slot char-${char.id.toLowerCase()} state-${state.phase}`;
            slot.dataset.id = char.id;
            slot.style.backgroundImage = `url('${char.portrait}')`;
            if (char.id === appState.selectedCharacterId) slot.classList.add("active");
            dom.selectorContainer.appendChild(slot);
        });
    } else {
        episode.tips.forEach((tip, i) => {
            const btn = document.createElement("div");
            btn.className = `tip-container ${i === appState.selectedTipIndex ? 'active' : ''}`;
            btn.dataset.tipIndex = i;
            btn.textContent = tip.title;
            dom.selectorContainer.appendChild(btn);
        });
    }
}

function renderContent() {
    const isCharView = appState.view === "character";
    const data = isCharView ? Engine.getCurrentCharacter() : Engine.getCurrentTip();
    const offset = isCharView ? appState.characterTextOffset : appState.tipTextOffset;

    if (!data) {
        dom.characterName.textContent = "";
        dom.characterText.textContent = isCharView ? "Select a character." : "Select a tip.";
        dom.characterImage.style.display = "none";
        togglePagination(false, false);
        return;
    }

    

    const pages = isCharView ? data.states[data.currentPhase].text : data.pages;
    
    dom.characterName.textContent = data.name || data.title;
    dom.characterText.innerText = pages[offset] || "";

    if (isCharView) {
        dom.characterImage.src = data.states[data.currentPhase].image;
        dom.characterImage.style.display = "block";
    } else {
        dom.characterImage.style.display = "none";
    }

    togglePagination(offset > 0, offset < pages.length - 1);
}

function togglePagination(showBack, showNext) {
    dom.textBackBtn.style.visibility = showBack ? "visible" : "hidden";
    dom.textNextBtn.style.visibility = showNext ? "visible" : "hidden";
}