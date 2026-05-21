import { appState } from "./state.js";
import { episodesById } from "../data/episodes.js?v=ep1-complete-pass11";
import { MODE_NAMES, getEpisodeMode } from "../data/normalize.js";

export const getCurrentEpisode = () => episodesById[appState.currentEpisode] || null;

export function getCurrentModeData() {
    const ep = getCurrentEpisode();
    return getEpisodeMode(ep, appState.selectionMode) || getEpisodeMode(ep, "normal");
}

export function getAvailableModes() {
    const ep = getCurrentEpisode();
    return MODE_NAMES.filter(mode => Boolean(getEpisodeMode(ep, mode)));
}

export const getAvailableCharacters = () => {
    return getCurrentModeData()?.characters || [];
};

export const getAvailableTips = () => {
    return getCurrentModeData()?.tips || [];
};

export function setEpisode(episodeId) {
    appState.currentEpisode = episodeId;
    appState.view = "character";
    setSelectionMode("normal");
}

export function setSelectionMode(mode) {
    const nextMode = getAvailableModes().includes(mode) ? mode : "normal";
    appState.selectionMode = nextMode;
    appState.selectedCharacterId = null;
    appState.selectedTipIndex = null;
    appState.characterTextOffset = 0;
    appState.tipTextOffset = 0;
}

export function toggleFantasyMode() {
    setSelectionMode(appState.selectionMode === "fantasy" ? "normal" : "fantasy");
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
    const nextView = appState.view === "character" ? "tips" : "character";
    appState.view = nextView;
    appState.selectedCharacterId = null;
    appState.selectedTipIndex = nextView === "tips" && getAvailableTips().length ? 0 : null;
    appState.characterTextOffset = 0;
    appState.tipTextOffset = 0;
}

export function selectCharacter(id) {
    const characters = getAvailableCharacters();
    const char = characters.find(c => c.id === id);

    if (appState.selectedCharacterId === id && char && char.subCharacters) {
        char.currentSubIndex = (char.currentSubIndex + 1) % char.subCharacters.length;
    } else {
        appState.selectedCharacterId = id;
        if (char && char.subCharacters) char.currentSubIndex = 0;
    }
    
    appState.characterTextOffset = 0;
}

export function getCurrentCharacter() {
    const chars = getAvailableCharacters();
    return chars.find(c => c.id === appState.selectedCharacterId);
}

export function getCurrentCharacterViewModel() {
    const char = getCurrentCharacter();
    if (!char) return null;

    if (char.subCharacters?.length) {
        const subCharacter = char.subCharacters[char.currentSubIndex || 0];
        if (subCharacter) {
            return {
                id: char.id,
                name: subCharacter.name || char.name,
                image: subCharacter.image || getCurrentCharacterState(char)?.image,
                pages: subCharacter.pages || [subCharacter.info || ""],
                phase: getCurrentCharacterState(char)?.phase || "active",
                pc: char.pc ? { ...char.pc, ...getCurrentCharacterState(char)?.pc } : null
            };
        }
    }

    const state = getCurrentCharacterState(char);
    return {
        id: char.id,
        name: char.name,
        image: state?.image || "",
        pages: state?.pages || state?.text || [],
        phase: state?.phase || "active",
        referenceTextImage: state?.pc?.referenceTextImage || null,
        pc: char.pc ? { ...char.pc, ...state?.pc } : null
    };
}

export function getCurrentCharacterState(char = getCurrentCharacter()) {
    if (!char?.states?.length) return null;
    const phase = Math.max(0, Math.min(char.currentPhase || 0, char.states.length - 1));
    char.currentPhase = phase;
    return char.states[phase];
}

export function selectTip(index) {
    appState.selectedTipIndex = index;
    appState.tipTextOffset = 0;
}

export function selectAdjacentItem(direction) {
    if (appState.view === "character") {
        const characters = getAvailableCharacters();
        if (!characters.length) return;

        const currentIndex = Math.max(0, characters.findIndex(c => c.id === appState.selectedCharacterId));
        const nextIndex = Math.max(0, Math.min(currentIndex + direction, characters.length - 1));
        selectCharacter(characters[nextIndex].id);
        return;
    }

    const tips = getAvailableTips();
    if (!tips.length) return;

    const currentIndex = Number.isInteger(appState.selectedTipIndex) ? appState.selectedTipIndex : 0;
    const nextIndex = Math.max(0, Math.min(currentIndex + direction, tips.length - 1));
    selectTip(nextIndex);
}

export function getCurrentTip() {
    const tips = getAvailableTips();
    return tips[appState.selectedTipIndex] || null;
}

export function getTipPages(tip = getCurrentTip()) {
    return tip?.pageImages || tip?.pages || [];
}

export function changePage(direction) {
    const pages = appState.view === "character"
        ? getCurrentCharacterViewModel()?.pages
        : getTipPages();
    const maxOffset = Math.max(0, (pages?.length || 1) - 1);

    if (appState.view === "character") {
        appState.characterTextOffset = Math.max(0, Math.min(appState.characterTextOffset + direction, maxOffset));
    } else {
        appState.tipTextOffset = Math.max(0, Math.min(appState.tipTextOffset + direction, maxOffset));
    }
}
