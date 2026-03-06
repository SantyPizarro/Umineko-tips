import { appState } from "./state.js";
import { ep1 } from "../data/ep1.js";

const EPISODES = { 1: ep1 };

export const getCurrentEpisode = () => EPISODES[appState.currentEpisode] || null;

export const getCurrentCharacter = () => {
    const ep = getCurrentEpisode();
    return ep?.characters.find(c => c.id === appState.selectedCharacterId) || null;
};

export const getCurrentTip = () => {
    const ep = getCurrentEpisode();
    return ep?.tips?.[appState.selectedTipIndex] || null;
};

export function updateCharacterPhase(direction) {
    const char = getCurrentCharacter();
    if (!char) return;

    const nextPhase = char.currentPhase + direction;
    
    if (nextPhase >= 0 && nextPhase < char.states.length) {
        char.currentPhase = nextPhase;
        appState.characterTextOffset = 0; 
    }
}

export function toggleTipsView() {
    appState.view = (appState.view === "character") ? "tips" : "character";
    appState.selectedCharacterId = null;
    appState.selectedTipIndex = null;
    appState.characterTextOffset = 0;
    appState.tipTextOffset = 0;
}

export function selectCharacter(id) {
    appState.selectedCharacterId = id;
    appState.characterTextOffset = 0;
}

export function selectTip(index) {
    appState.selectedTipIndex = index;
    appState.tipTextOffset = 0;
}

export function changePage(direction) {
    if (appState.view === "character") {
        appState.characterTextOffset += direction;
    } else {
        appState.tipTextOffset += direction;
    }
}