import { access, mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ep1 } from "../js/data/ep1.js";
import { ep2 } from "../js/data/ep2.js";
import { ep3 } from "../js/data/ep3.js";
import { ep4 } from "../js/data/ep4.js";
import { ep5 } from "../js/data/ep5.js";
import { ep6 } from "../js/data/ep6.js";
import { ep7 } from "../js/data/ep7.js";
import { ep8 } from "../js/data/ep8.js";
import { getAvailableEpisodeModes, getEpisodeMode, normalizeEpisode } from "../js/data/normalize.js";

export const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const episodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8];
export { getAvailableEpisodeModes, getEpisodeMode, normalizeEpisode };

export function collectAssetPaths() {
  return collectAssetRecords().map(record => record.path);
}

export function collectAssetRecords() {
  const records = new Map();
  addAsset(records, "assets/fonts/face0.otf", "ui", "font", "face0");
  addAsset(records, "assets/ui/umi_gf.png", "ui", "ornament", "gold-wing");
  addAsset(records, "assets/ui/umi-gf-black.png", "ui", "ornament", "black-wing");
  addAsset(records, "assets/ui/hana_back.png", "ui", "ornament", "menu-flower");
  addAsset(records, "assets/ui/system/tips.png", "ui", "button", "tips");
  addAsset(records, "assets/ui/system/character.png", "ui", "button", "character");
  addAsset(records, "assets/ui/system/execute.png", "ui", "button", "execute");
  addAsset(records, "assets/ui/system/resurrect.png", "ui", "button", "resurrect");
  addAsset(records, "assets/ui/system/cha_next.png", "ui", "button", "character-next");
  addAsset(records, "assets/ui/system/change.png", "ui", "button", "change");
  for (let episodeNumber = 1; episodeNumber <= 8; episodeNumber += 1) {
    addAsset(records, `assets/ui/system/ep${episodeNumber}.png`, "ui", "button", `episode-${episodeNumber}`);
  }
  addAsset(records, "assets/ui/characters/ep1/backdrop/cha_back.png", "ui", "characters", "ep1-backdrop");
  addAsset(records, "assets/ui/characters/ep1/text/txt_def.png", "ui", "characters", "ep1-text-default");

  for (const episode of episodes) {
    for (const mode of getAvailableEpisodeModes(episode)) {
      const modeData = getEpisodeMode(episode, mode);
      addAsset(records, modeData.background, episode.id, mode, "background");
      addAsset(records, modeData.pc?.characterBackdrop, episode.id, mode, "pc-character-backdrop");
      addAsset(records, modeData.pc?.textPanel, episode.id, mode, "pc-character-text-panel");
      addAsset(records, modeData.pc?.flourish, episode.id, mode, "pc-flourish");

      for (const character of modeData.characters) {
        addAsset(records, character.portrait, episode.id, mode, `${character.id}:portrait`);
        addAsset(records, character.pc?.iconAlive, episode.id, mode, `${character.id}:pc-icon-alive`);
        addAsset(records, character.pc?.iconDead, episode.id, mode, `${character.id}:pc-icon-dead`);
        for (const state of character.states || []) {
          addAsset(records, state.image, episode.id, mode, `${character.id}:${state.phase}:full`);
          addAsset(records, state.pc?.icon, episode.id, mode, `${character.id}:${state.phase}:pc-icon`);
          addAsset(records, state.pc?.tachi, episode.id, mode, `${character.id}:${state.phase}:pc-tachi`);
          addAsset(records, state.pc?.referenceTextImage, episode.id, mode, `${character.id}:${state.phase}:pc-reference-text`);
          addAsset(records, state.pcAlt?.icon, episode.id, mode, `${character.id}:${state.phase}:pc-alt-icon`);
          addAsset(records, state.pcAlt?.tachi, episode.id, mode, `${character.id}:${state.phase}:pc-alt-tachi`);
        }
        for (const subCharacter of character.subCharacters || []) {
          addAsset(records, subCharacter.image, episode.id, mode, `${character.id}:${subCharacter.name}:sub`);
          addAsset(records, subCharacter.pc?.tachi, episode.id, mode, `${character.id}:${subCharacter.name}:pc-tachi`);
          addAsset(records, subCharacter.pc?.referenceTextImage, episode.id, mode, `${character.id}:${subCharacter.name}:pc-reference-text`);
        }
      }

      for (const [index, tip] of (modeData.tips || []).entries()) {
        addAsset(records, tip.buttonImage, episode.id, mode, `tip-${index + 1}:button`);
        addAsset(records, tip.referenceButtonImage, episode.id, mode, `tip-${index + 1}:reference-button`);
        addAsset(records, tip.background, episode.id, mode, `tip-${index + 1}:background`);
        for (const [pageIndex, pageImage] of (tip.pageImages || []).entries()) {
          addAsset(records, pageImage, episode.id, mode, `tip-${index + 1}:page-${pageIndex + 1}`);
        }
        for (const [pageIndex, pageImage] of (tip.referencePageImages || []).entries()) {
          addAsset(records, pageImage, episode.id, mode, `tip-${index + 1}:reference-page-${pageIndex + 1}`);
        }
      }
    }
  }

  return [...records.values()].sort((a, b) => a.path.localeCompare(b.path));
}

export async function pathExists(assetPath) {
  try {
    await access(path.join(rootDir, assetPath));
    return true;
  } catch {
    return false;
  }
}

export function printErrors(errors) {
  for (const error of errors) {
    console.error(`- ${error}`);
  }
}

export async function writeJson(relativePath, data) {
  const outputPath = path.join(rootDir, relativePath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(data, null, 2)}\n`);
}

export async function listFilesRecursive(dir) {
  const output = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      output.push(...await listFilesRecursive(absolutePath));
    } else if (entry.isFile()) {
      output.push(absolutePath);
    }
  }
  return output;
}

function addAsset(records, assetPath, episode, mode, usage) {
  if (typeof assetPath === "string" && assetPath.startsWith("assets/")) {
    const existingRecord = records.get(assetPath);
    if (existingRecord) {
      existingRecord.usages.push({ episode, mode, usage });
      return;
    }

    records.set(assetPath, {
      path: assetPath,
      fileName: path.basename(assetPath),
      usages: [{ episode, mode, usage }]
    });
  }
}
