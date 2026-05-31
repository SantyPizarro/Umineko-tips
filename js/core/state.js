export const appState = {
  currentEpisode: 1,
  view: "character",
  selectionMode: "normal",
  selectedCharacterId: null,
  selectedTipIndex: null,
  characterTextOffset: 0,
  tipTextOffset: 0,
  pcSpriteVariant: "original",
  transitionsEnabled: true
};

export function resetCharacterState() {
  appState.selectedCharacterId = null;
  appState.characterTextOffset = 0;
}

export function resetEpisodeState() {
  resetCharacterState();
  appState.selectedTipIndex = null;
  appState.tipTextOffset = 0;
  appState.view = "character";
  appState.selectionMode = "normal";
}
