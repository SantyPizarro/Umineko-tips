import { appState } from "./state.js";
import { ep1 } from "../data/ep1.js";

const episodes = {
  1: ep1
};

export function getCurrentEpisode() {
  return episodes[appState.currentEpisode];
}

export function getCurrentCharacter() {
  const episode = getCurrentEpisode();
  return episode.characters.find(
    c => c.id === appState.selectedCharacterId
  );
}

export function toggleTipsView() {
  if (appState.view === "character") {
    appState.view = "tips";
    appState.selectedCharacterId = null;
  } else {
    appState.view = "character";
    appState.selectedTipIndex = null;
  }
}

export function selectCharacter(id) {
  appState.selectedCharacterId = id;
  appState.characterTextOffset = 0;
}

export function nextCharacterPage() {
  appState.characterTextOffset++;
}

export function executeCharacter() {
  const character = getCurrentCharacter();
  if (!character) return;

  if (character.currentPhase < character.states.length - 1) {
    character.currentPhase++;
    appState.characterTextOffset = 0;
  }
}

export function resurrectCharacter() {
  const character = getCurrentCharacter();
  if (!character) return;

  if (character.currentPhase > 0) {
    character.currentPhase--;
    appState.characterTextOffset = 0;
  }
}

export function selectTip(index) {
  appState.selectedTipIndex = index;
  appState.tipTextOffset = 0;
}

export function nextTipPage() {
  appState.tipTextOffset++;
}

export function changeEpisode(epNumber) {
  appState.currentEpisode = epNumber;

  appState.selectedCharacterId = null;
  appState.selectedTipIndex = null;

  appState.characterTextOffset = 0;
  appState.tipTextOffset = 0;

  appState.view = "character";
}