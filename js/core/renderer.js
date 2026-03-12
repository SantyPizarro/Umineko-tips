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
    const ep = Engine.getCurrentEpisode();
    const main = document.getElementById("main-layout");
    const btnFantasy = document.getElementById("btn-fantasy-next");
    const btnFuture = document.getElementById("btn-future-next");

    main.classList.remove("fantasy-active", "future-active");

    if (appState.selectionMode === "fantasy") {
        main.classList.add("fantasy-active");
        document.body.style.backgroundImage = `url('${ep.backgroundFantasy}')`;
    } else if (appState.selectionMode === "future") {
        main.classList.add("future-active");
        document.body.style.backgroundImage = `url('${ep.backgroundFuture}')`;
    } else {
        document.body.style.backgroundImage = `url('${ep.background}')`;
    }

    if ([4, 6].includes(appState.currentEpisode)) {
        btnFuture.classList.remove("hidden");
    } else {
        btnFuture.classList.add("hidden");
    }

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

    const baseCharacter = Engine.getCurrentCharacter();
    const data = isCharView
        ? (baseCharacter?.subCharacters
            ? baseCharacter.subCharacters[baseCharacter.currentSubIndex]
            : baseCharacter)
        : Engine.getCurrentTip();

    const offset = isCharView ? appState.characterTextOffset : appState.tipTextOffset;

    dom.mainLayout.className = dom.mainLayout.className
        .split(' ')
        .filter(c => !c.startsWith('tip-'))
        .join(' ');

    dom.mainLayout.classList.toggle("tips-active", !isCharView);

    if (!data) {
        dom.characterName.textContent = "";
        dom.characterText.textContent = isCharView ? "Select a character." : "Select a tip.";
        dom.characterImage.style.display = "none";
        togglePagination(false, false);
        return;
    }

    if (!isCharView && data.style) {
        dom.mainLayout.classList.add(data.style);
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