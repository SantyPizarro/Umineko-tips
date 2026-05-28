import { episodes, getAvailableEpisodeModes, getEpisodeMode, printErrors } from "./shared.mjs";

const errors = [];

for (const episode of episodes) {
  for (const mode of getAvailableEpisodeModes(episode)) {
    const modeData = getEpisodeMode(episode, mode);
    const seenTipIds = new Set();

    modeData.tips.forEach((tip, index) => {
      const tipId = tip.id || `${episode.id}-${mode}-${index + 1}`;
      if (seenTipIds.has(tipId)) {
        errors.push(`EP${episode.id} ${mode} duplicate tip id: ${tipId}.`);
      }
      seenTipIds.add(tipId);

      if (!tip.title) {
        errors.push(`EP${episode.id} ${mode} tip ${index + 1} has no title.`);
      }
      const pages = tip.pageImages || tip.pages;
      if (!Array.isArray(pages) || pages.length === 0) {
        errors.push(`EP${episode.id} ${mode} tip ${tip.title || index + 1} has no pages.`);
      } else if (pages.some(page => !String(page).trim())) {
        errors.push(`EP${episode.id} ${mode} tip ${tip.title || index + 1} has an empty page.`);
      }
    });

    for (const character of modeData.characters) {
      for (const state of character.states || []) {
        const pages = state.pages || state.text || [];
        if (!pages.length) {
          errors.push(`EP${episode.id} ${mode} character ${character.id} state ${state.phase} has no pages.`);
        } else if (pages.some(page => !String(page).trim())) {
          errors.push(`EP${episode.id} ${mode} character ${character.id} state ${state.phase} has an empty page.`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error("Page validation failed:");
  printErrors(errors);
  process.exit(1);
}

console.log("Page validation passed.");
