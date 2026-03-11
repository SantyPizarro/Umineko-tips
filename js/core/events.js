import { renderAll } from "./renderer.js";
import { appState } from "./state.js";
import * as Engine from "./engine.js";

export function bindEvents() {
    document.addEventListener("click", e => {
        const target = e.target;

        const charSlot = target.closest(".character-slot");
        if (charSlot) {
            Engine.selectCharacter(charSlot.dataset.id);
            return renderAll();
        }

        const tipContainer = target.closest(".tip-container");
        if (tipContainer) {
            Engine.selectTip(Number(tipContainer.dataset.tipIndex));
            return renderAll();
        }

        
        const epBtn = target.closest(".episode-btn");
            if (epBtn) {
                appState.currentEpisode = parseInt(epBtn.dataset.ep);
                appState.isFantasyMode = false;
                return renderAll();
            }

        if (target.id === "btn-execute") {
            Engine.updateCharacterPhase(1);
            return renderAll();
        }
        if (target.id === "btn-resurrect") {
            Engine.updateCharacterPhase(-1);
            return renderAll();
        }

        if (target.id === "btn-tips") {
            Engine.toggleTipsView();
            return renderAll();
        }
        if (target.id === "text-next-btn") {
            Engine.changePage(1);
            return renderAll();
        }
        if (target.id === "text-back-btn") {
            Engine.changePage(-1);
            return renderAll();
        }

        if (target.id === "btn-fantasy-next") {
            Engine.toggleFantasyMode();
            return renderAll();
        }
    });
}