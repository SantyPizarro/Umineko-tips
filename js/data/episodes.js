import { ep1 } from "./ep1.js?v=pc-ep8-tip-visible7";
import { ep2 } from "./ep2.js?v=pc-ep8-tip-visible7";
import { ep3 } from "./ep3.js?v=pc-ep8-tip-visible7";
import { ep4 } from "./ep4.js?v=pc-ep8-tip-visible7";
import { ep5 } from "./ep5.js?v=pc-ep8-tip-visible7";
import { ep6 } from "./ep6.js?v=pc-ep8-tip-visible7";
import { ep7 } from "./ep7.js?v=pc-ep8-tip-visible7";
import { ep8 } from "./ep8.js?v=pc-ep8-tip-visible7";

export const episodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8];
export const episodesById = Object.fromEntries(episodes.map(episode => [episode.id, episode]));
