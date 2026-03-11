export const appState = {
  currentEpisode: 0,
  view: "character",
  selectionMode: "normal", 
  selectedCharacterId: null,
  selectedTipIndex: null
};

export function resetCharacterState() {
  appState.currentCharacterId = null;
  appState.currentTextPage = 0;
}

export function resetEpisodeState() {
  resetCharacterState();
  appState.screen = "character";
}