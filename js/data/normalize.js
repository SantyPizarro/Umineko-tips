export const MODE_NAMES = ["normal", "fantasy", "future"];

export function getEpisodeMode(episode, mode) {
  if (!episode) return null;

  const legacyMode = {
    normal: {
      background: episode.background,
      characters: episode.characters,
      tips: episode.tips
    },
    fantasy: {
      background: episode.backgroundFantasy,
      characters: episode.charactersFantasy,
      tips: episode.tipsFantasy || episode.tips
    },
    future: {
      background: episode.backgroundFuture,
      characters: episode.charactersFuture,
      tips: episode.tipsFuture || episode.tips
    }
  }[mode];

  const modeData = episode.modes?.[mode] || legacyMode;
  if (mode !== "normal" && !modeData?.characters?.length) return null;
  if (!modeData?.characters?.length && !modeData?.tips?.length) return null;

  return {
    background: modeData.background || episode.background || "assets/backgrounds/m1f_p1b.png",
    characters: modeData.characters || [],
    tips: modeData.tips || [],
    pc: modeData.pc || episode.pc || null
  };
}

export function getAvailableEpisodeModes(episode) {
  return MODE_NAMES.filter(mode => Boolean(getEpisodeMode(episode, mode)));
}

export function normalizeEpisode(episode) {
  return {
    id: episode.id,
    title: episode.title || `Episode ${episode.id}`,
    modes: Object.fromEntries(
      getAvailableEpisodeModes(episode).map(mode => {
        const modeData = getEpisodeMode(episode, mode);
        return [
          mode,
          {
            background: modeData.background,
            characters: modeData.characters.map(normalizeCharacter),
            tips: modeData.tips.map((tip, index) => normalizeTip(tip, episode.id, index))
          }
        ];
      })
    )
  };
}

function normalizeCharacter(character) {
  return {
    id: character.id,
    name: character.name,
    portrait: character.portrait,
    states: (character.states || []).map(state => ({
      phase: state.phase,
      image: state.image,
      pages: state.pages || state.text || []
    }))
  };
}

function normalizeTip(tip, episodeId, index) {
  return {
    id: tip.id || slugify(`${episodeId}-${tip.title || index + 1}`),
    title: tip.title,
    episode: tip.episode || episodeId,
    unlockOrder: tip.unlockOrder ?? index + 1,
    pages: tip.pages || [],
    style: tip.style || "tip-default",
    sourceUrl: tip.sourceUrl || "",
    verified: tip.verified === true
  };
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
