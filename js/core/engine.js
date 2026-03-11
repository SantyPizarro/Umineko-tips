import { appState } from "./state.js";
import { ep1 } from "../data/ep1.js";
import { ep2 } from "../data/ep2.js";
import { ep3 } from "../data/ep3.js";
import { ep4 } from "../data/ep4.js";
import { ep5 } from "../data/ep5.js";
import { ep6 } from "../data/ep6.js";
import { ep7 } from "../data/ep7.js";
import { ep8 } from "../data/ep8.js";

const EPISODES = { 1: ep1, 2: ep2, 3: ep3, 4: ep4, 5: ep5, 6: ep6, 7: ep7, 8: ep8 };

export const getCurrentEpisode = () => EPISODES[appState.currentEpisode] || null;

export const getAvailableCharacters = () => {
    const ep = getCurrentEpisode();
    if (!ep) return [];
    
    switch(appState.selectionMode) {
        case "fantasy": return ep.charactersFantasy || [];
        case "future": return ep.charactersFuture || [];
        default: return ep.characters || [];
    }
};

export const getAvailableTips = () => {
    const ep = getCurrentEpisode();
    return ep ? ep.tips : [];
};

export function toggleFantasyMode() {
    appState.isFantasyMode = !appState.isFantasyMode;
    appState.selectedCharacterId = null;
    appState.selectedTipIndex = null;
}

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