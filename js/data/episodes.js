import { ep1 } from "./ep1.js?v=ep1-complete-pass11";
import { ep2 } from "./ep2.js";
import { ep3 } from "./ep3.js";
import { ep4 } from "./ep4.js";
import { ep5 } from "./ep5.js";
import { ep6 } from "./ep6.js";
import { ep7 } from "./ep7.js";
import { ep8 } from "./ep8.js";

export const episodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8];
export const episodesById = Object.fromEntries(episodes.map(episode => [episode.id, episode]));
