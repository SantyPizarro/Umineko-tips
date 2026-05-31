import { renderAll } from "./core/renderer.js?v=pc-button-hover1";
import { bindEvents, restoreState } from "./core/events.js?v=pc-button-hover1";

restoreState();
bindEvents();
renderAll();
