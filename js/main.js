import { renderAll } from "./core/renderer.js?v=ep1-complete-pass11";
import { bindEvents, restoreState } from "./core/events.js?v=ep1-complete-pass11";

restoreState();
bindEvents();
renderAll();
