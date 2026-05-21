import { episodes, getAvailableEpisodeModes, getEpisodeMode, printErrors } from "./shared.mjs";

const errors = [];

for (const episodeId of [1, 2, 3, 4, 5, 6, 7, 8]) {
  const episode = episodes.find(item => item.id === episodeId);
  if (!episode) continue;

  for (const mode of getAvailableEpisodeModes(episode)) {
    const modeData = getEpisodeMode(episode, mode);
    try {
      const firstCharacter = modeData.characters[0] || null;
      const firstTip = modeData.tips[0] || null;

      if (firstCharacter) {
        const firstState = firstCharacter.states?.[0];
        if (!firstState) throw new Error("first character has no state");
        if (!(firstState.pages || firstState.text)?.length) throw new Error("first character has no readable pages");
      }

      if (firstTip && !(firstTip.pageImages || firstTip.pages)?.length) {
        throw new Error("first tip has no readable pages");
      }
    } catch (error) {
      errors.push(`EP${episodeId} ${mode} route is not renderable: ${error.message}.`);
    }
  }
}

if (errors.length) {
  console.error("Route validation failed:");
  printErrors(errors);
  process.exit(1);
}

console.log("Route validation passed.");
