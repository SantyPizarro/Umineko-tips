import { appState } from "./state.js";
import { episodesById } from "../data/episodes.js?v=pc-ep8-tip-visible7";
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

export function goToNextSpecialMode() {
    const modes = getAvailableModes();
    if (appState.selectionMode === "normal" && modes.includes("fantasy")) {
        setSelectionMode("fantasy");
        return;
    }
    if (appState.selectionMode !== "future" && modes.includes("future")) {
        setSelectionMode("future");
        return;
    }
    setSelectionMode("normal");
}

export function updateCharacterPhase(direction) {
    let char = getCurrentCharacter();
    if (!char) {
        const characters = getAvailableCharacters();
        char = characters[0] || null;
        if (char) appState.selectedCharacterId = char.id;
    }
    if (!char) return;

    const nextPhase = char.currentPhase + direction;
    
    if (nextPhase >= 0 && nextPhase < char.states.length) {
        char.currentPhase = nextPhase;
        appState.characterTextOffset = 0; 
    }
}

export function toggleCharacterVariant() {
    const char = getCurrentCharacter();
    if (!char?.states?.length || char.states.length < 2) return;

    char.currentPhase = ((char.currentPhase || 0) + 1) % char.states.length;
    appState.characterTextOffset = 0;
}

export function toggleTipsView() {
    if (appState.view === "character" && !getAvailableTips().length) return;

    const nextView = appState.view === "character" ? "tips" : "character";
    appState.view = nextView;
    appState.selectedCharacterId = null;
    appState.selectedTipIndex = nextView === "tips" && getAvailableTips().length ? 0 : null;
    appState.characterTextOffset = 0;
    appState.tipTextOffset = 0;
}

export function togglePcSpriteVariant() {
    appState.pcSpriteVariant = appState.pcSpriteVariant === "new" ? "original" : "new";
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
        const state = getCurrentCharacterState(char);
        const statePc = getCharacterStatePc(state);
        if (subCharacter) {
            const subVariant = subCharacter.variants?.[char.currentPhase || 0] || subCharacter;
            const subPc = subVariant.pc || subCharacter.pc || null;
            return {
                id: char.id,
                name: subCharacter.name || char.name,
                image: subVariant.image || subCharacter.image || state?.image,
                pages: subVariant.pages || subCharacter.pages || [subCharacter.info || ""],
                phase: state?.phase || "active",
                referenceTextImage: subPc?.referenceTextImage || statePc?.referenceTextImage || null,
                pc: char.pc || statePc || subPc ? { ...char.pc, ...statePc, ...subPc } : null
            };
        }
    }

    const state = getCurrentCharacterState(char);
    const statePc = getCharacterStatePc(state);
    return {
        id: char.id,
        name: char.name,
        image: state?.image || "",
        pages: state?.pages || state?.text || [],
        phase: state?.phase || "active",
        referenceTextImage: statePc?.referenceTextImage || null,
        pc: char.pc ? { ...char.pc, ...statePc } : null
    };
}

export function getCharacterStatePc(state) {
    if (!state?.pc) return null;
    if (appState.pcSpriteVariant === "new" && state.pcAlt) {
        return { ...state.pc, ...state.pcAlt };
    }
    return state.pc;
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
