import { appState } from "./state.js";
import { getCurrentEpisode, getCurrentCharacter } from "./engine.js";
import { paginateText } from "./textPaginator.js";

const dom = {
  selectorContainer: document.getElementById("selector-container"),
  characterName: document.getElementById("character-name"),
  characterText: document.getElementById("character-text"),
  textNextBtn: document.getElementById("text-next-btn"),
  characterImage: document.getElementById("character-image"),
  btnTips: document.getElementById("btn-tips"),
  mainLayout: document.getElementById("main-layout")
};

let characterPagesCache = [];
let tipPagesCache = [];


export function renderAll() {
  if (appState.view === "character") {
    dom.btnTips.textContent = "Tips";
    dom.mainLayout.classList.remove("tips-active");
  } else {
    dom.btnTips.textContent = "Characters";
    dom.mainLayout.classList.add("tips-active");
  }

  renderLeftPanel();
  renderRightPanel();
}


function renderLeftPanel() {
  const episode = getCurrentEpisode();

  dom.selectorContainer.innerHTML =
    '<svg id="relation-lines" width="100%" height="100%"></svg>';

  if (appState.view === "character") {
    dom.selectorContainer.classList.remove("tips-mode");
    dom.selectorContainer.style.display = "grid";

    episode.characters.forEach(character => {
      const state = character.states[character.currentPhase];
      const slot = document.createElement("div");

      slot.classList.add("character-slot");
      slot.classList.add(`char-${character.id.toLowerCase()}`);
      slot.dataset.id = character.id;

      slot.style.backgroundImage = `url('${character.portrait}')`;
      slot.classList.add(`state-${state.phase}`);

      if (character.id === appState.selectedCharacterId) {
        slot.classList.add("active");
      }

      dom.selectorContainer.appendChild(slot);
    });
  }



  if (appState.view === "tips") {
    dom.selectorContainer.classList.add("tips-mode");
    dom.selectorContainer.style.display = "block";
    
    episode.tips.forEach((tip, index) => {
      const btn = document.createElement("div");
      btn.classList.add("tip-container");
      
      btn.textContent = tip.title || `Tip ${index + 1}`; 
      btn.dataset.tipIndex = index;

      if (index === appState.selectedTipIndex) {
        btn.classList.add("active");
      }

      dom.selectorContainer.appendChild(btn);
    });
  }
}



function renderRightPanel() {
  if (appState.view === "character") {
    renderCharacterView();
  } else {
    renderTipsView();
  }
}

function renderCharacterView() {

  const character = getCurrentCharacter();

  if (!character) {
    dom.characterName.textContent = "";
    dom.characterText.textContent = "Select a character.";
    dom.characterImage.style.display = "none";
    dom.textNextBtn.classList.add("hidden");
    return;
  }

  const state = character.states[character.currentPhase];

  dom.characterImage.style.display = "block";
  dom.characterImage.src = state.image;
  dom.characterName.textContent = character.name;

  const fullText = state.text.join(" ");
  characterPagesCache = paginateText(dom.characterText, fullText);

  renderCharacterPage();
}

function renderCharacterPage() {
  const offset = appState.characterTextOffset;

  dom.characterText.innerText =
    characterPagesCache[offset] || "";

  if (offset < characterPagesCache.length - 1) {
    dom.textNextBtn.classList.remove("hidden");
  } else {
    dom.textNextBtn.classList.add("hidden");
  }
}


function renderTipsView() {
  const episode = getCurrentEpisode();
  const selectedTip = episode.tips[appState.selectedTipIndex];
  const infoPanel = document.getElementById("info-panel");

  if (appState.selectedTipIndex === null || !selectedTip) {
    dom.characterName.textContent = "";
    dom.characterText.textContent = "Select a tip.";
    dom.textNextBtn.classList.add("hidden");
    return;
  }

  infoPanel.setAttribute("data-current-tip", appState.selectedTipIndex);
  dom.characterName.textContent = selectedTip.title;

  tipPagesCache = selectedTip.pages; 

  renderTipPage();
}

function renderTipPage() {
  const offset = appState.tipTextOffset;
  
  dom.characterText.innerText = tipPagesCache[offset] || "";

  if (offset < tipPagesCache.length - 1) {
    dom.textNextBtn.classList.remove("hidden");
  } else {
    dom.textNextBtn.classList.add("hidden");
  }
}

window.addEventListener("resize", () => {
  if (appState.view === "character") {
    const character = getCurrentCharacter();
    if (!character) return;

    const state = character.states[character.currentPhase];
    characterPagesCache = paginateText(dom.characterText, state.text);

    if (appState.characterTextOffset >= characterPagesCache.length) {
      appState.characterTextOffset = 0;
    }

    renderCharacterPage();
  }

  if (appState.view === "tips") {
    const episode = getCurrentEpisode();
    const tip = episode.tips[appState.selectedTipIndex];
    if (!tip) return;

    tipPagesCache = paginateText(dom.characterText, tip);

    if (appState.tipTextOffset >= tipPagesCache.length) {
      appState.tipTextOffset = 0;
    }

    renderTipPage();
  }
});