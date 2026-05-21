import { episodes, getAvailableEpisodeModes, getEpisodeMode, printErrors } from "./shared.mjs";

const errors = [];

if (episodes.length !== 8) {
  errors.push(`Expected 8 episodes, found ${episodes.length}.`);
}

for (const episodeId of [1, 2, 3, 4, 5, 6, 7, 8]) {
  const episode = episodes.find(item => item.id === episodeId);
  if (!episode) {
    errors.push(`Missing EP${episodeId}.`);
    continue;
  }

  const modes = getAvailableEpisodeModes(episode);
  if (!modes.includes("normal")) {
    errors.push(`EP${episodeId} is missing normal mode.`);
  }

  for (const mode of modes) {
    const modeData = getEpisodeMode(episode, mode);
    if (!modeData.background) {
      errors.push(`EP${episodeId} ${mode} mode is missing background.`);
    }
    if (!modeData.characters.length) {
      errors.push(`EP${episodeId} ${mode} mode has no characters.`);
    }
    if (!modeData.tips.length) {
      errors.push(`EP${episodeId} ${mode} mode has no tips.`);
    }

    for (const character of modeData.characters) {
      if (!character.id) errors.push(`EP${episodeId} ${mode} has a character without id.`);
      if (!character.name) errors.push(`EP${episodeId} ${mode} character ${character.id || "(unknown)"} has no name.`);
      if (!character.portrait) errors.push(`EP${episodeId} ${mode} character ${character.id || "(unknown)"} has no portrait.`);
      if (!character.states?.length) errors.push(`EP${episodeId} ${mode} character ${character.id || "(unknown)"} has no states.`);
    }
  }
}

if (errors.length) {
  console.error("Data validation failed:");
  printErrors(errors);
  process.exit(1);
}

console.log("Data validation passed.");
