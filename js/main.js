import { renderAll } from "./core/renderer.js?v=pc-ep8-tip-visible7";
import { bindEvents, restoreState } from "./core/events.js?v=pc-ep8-tip-visible7";

restoreState();
bindEvents();
renderAll();
