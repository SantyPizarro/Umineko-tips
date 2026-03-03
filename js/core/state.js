export const appState = {
  currentEpisode: 1,

  view: "character",

  selectedCharacterId: null,
  characterTextOffset: 0,

  selectedTipIndex: null,
  tipTextOffset: 0
};

export function resetCharacterState() {
  appState.currentCharacterId = null;
  appState.currentTextPage = 0;
}

export function resetEpisodeState() {
  resetCharacterState();
  appState.screen = "character";
}