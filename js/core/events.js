import { renderAll } from "./renderer.js";
import {
  selectCharacter,
  nextCharacterPage,
  nextTipPage,
  executeCharacter,
  resurrectCharacter,
  changeEpisode,
  toggleTipsView,
  selectTip
} from "./engine.js";
export function bindEvents() {

  document.addEventListener("click", e => {

    if (e.target.dataset.id) {
      selectCharacter(e.target.dataset.id);
      renderAll();
    }

    if (e.target.id === "btn-execute") {
      executeCharacter();
      renderAll();
    }

    if (e.target.id === "btn-resurrect") {
      resurrectCharacter();
      renderAll();
    }

    if (e.target.classList.contains("episode-btn")) {
      changeEpisode(Number(e.target.dataset.ep));
      renderAll();
    }

    if (e.target.id === "text-next-btn") {
      if (appState.view === "character") {
        nextCharacterPage();
      } else {
        nextTipPage();
      }
      renderAll();
    }

    if (e.target.id === "btn-tips") {
      toggleTipsView();
      renderAll();
    }

    if (e.target.dataset.tipIndex) {
  selectTip(Number(e.target.dataset.tipIndex));
  renderAll();
}
  });
}