import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { collectAssetRecords, listFilesRecursive, pathExists, rootDir, writeJson } from "./shared.mjs";

const sourceArg = process.argv.find(arg => arg.startsWith("--from="));
const dryRun = process.argv.includes("--dry-run");

if (!sourceArg) {
  console.error("Usage: node scripts/import-pc-sprites.mjs --from=\"C:\\Users\\Santy\\Downloads\\umineko sprites\" [--dry-run]");
  process.exit(1);
}

const sourceDir = path.resolve(sourceArg.slice("--from=".length));
const files = (await listFilesRecursive(sourceDir))
  .filter(file => path.extname(file).toLowerCase() === ".png")
  .map(file => ({
    path: file,
    lower: file.toLowerCase(),
    name: path.basename(file).toLowerCase()
  }));

const copied = [];
const skipped = [];

for (const record of collectAssetRecords()) {
  if (!record.path.startsWith("assets/characters/")) continue;
  if (await pathExists(record.path)) continue;

  const source = findSource(record.path);
  if (!source) {
    skipped.push(record.path);
    continue;
  }

  copied.push({ from: source.path, to: record.path });
  if (!dryRun) {
    const target = path.join(rootDir, record.path);
    await mkdir(path.dirname(target), { recursive: true });
    await copyFile(source.path, target);
  }
}

await writeJson("assets/imported-sprites.report.json", {
  generatedAt: new Date().toISOString(),
  dryRun,
  copied,
  skipped
});

console.log(`${dryRun ? "Would copy" : "Copied"} sprites: ${copied.length}`);
console.log(`Still unresolved character assets: ${skipped.length}`);
console.log("Report: assets/imported-sprites.report.json");

function findSource(targetPath) {
  const target = targetPath.toLowerCase();
  const targetName = path.basename(target);
  const targetBase = targetName.replace(/\.png$/, "");
  const exact = ranked(files.filter(file => file.name === targetName), target);
  if (exact) return exact;

  const spec = getCharacterSpec(target);
  if (!spec) return null;

  const candidates = files.filter(file => {
    const isFolderMatch = spec.folders.some(folder => file.lower.includes(`\\${folder.toLowerCase()}\\`));
    const isPrefixMatch = spec.prefixes.some(prefix => file.name.startsWith(`${prefix.toLowerCase()}_`) || file.name.startsWith(`${prefix.toLowerCase()} `));
    return isFolderMatch && isPrefixMatch;
  });

  return ranked(candidates, target, getPreferredTokens(targetBase));
}

function ranked(candidates, target, preferredTokens = []) {
  if (!candidates.length) return null;

  const scored = candidates.map(file => {
    let score = 0;
    if (preferredTokens.some(token => file.name.includes(token))) score += 50;
    if (file.name.includes("defa1")) score += 40;
    if (file.name.includes(" copy")) score += 35;
    if (file.name.includes("majimea1")) score += 20;
    if (file.name.includes("waraia1")) score += 15;
    if (file.name.includes("akuwaraia1")) score += 10;
    if (target.includes("/portrait/") && file.name.includes("defa1")) score += 50;
    if (target.includes("/full/") && !file.name.includes("thumb")) score += 5;
    if (file.lower.includes("\\1\\")) score += 3;
    if (file.lower.includes("\\2\\")) score += 2;
    return { file, score };
  });

  scored.sort((a, b) => b.score - a.score || a.file.name.localeCompare(b.file.name));
  return scored[0].file;
}

function getPreferredTokens(targetBase) {
  const tokens = [];
  if (targetBase.includes("dead")) tokens.push("dead");
  if (targetBase.includes("smug")) tokens.push("akuwaraia", "waraia");
  if (targetBase.includes("serious")) tokens.push("majimea");
  if (targetBase.includes("stressed")) tokens.push("fumana", "komarua");
  if (targetBase.includes("cold")) tokens.push("majimea", "futekia");
  if (targetBase.includes("witch")) tokens.push("akuwaraia", "defa1");
  if (targetBase.includes("final")) tokens.push("defa1");
  return tokens;
}

function getCharacterSpec(target) {
  const specs = [
    [["battler", "batbea"], ["battler"], ["but"]],
    [["beatrice", "beato"], ["Beatrice", "Beatrice2", "Beatrice3"], ["bea", "be2"]],
    [["evabea"], ["Eva2"], ["ev2"]],
    [["eva"], ["Eva"], ["eva"]],
    [["ange", "ange1998"], ["ange"], ["enj"]],
    [["bernkastel", "bern"], ["bernkastel pc"], ["ber"]],
    [["lambdadelta", "lambda"], ["lambdadelta"], ["lam"]],
    [["ronove"], ["Ronove"], ["ron"]],
    [["virgilia"], ["Virgilia"], ["wal"]],
    [["gaap"], ["Gapgapgap"], ["gap"]],
    [["erika"], ["erika"], ["eri"]],
    [["dlanor"], ["dlanor"], ["dla"]],
    [["gertrude"], ["Gertrude"], ["ger"]],
    [["cornelia"], ["cornelia"], ["cor"]],
    [["featherine"], ["featherine"], ["fea"]],
    [["hachijo"], ["featherine"], ["fea"]],
    [["zepar_furfur"], ["zepar", "furfur"], ["zep", "fur"]],
    [["saku"], ["Sakutaro"], ["sak"]],
    [["lion"], ["Lion"], ["rio"]],
    [["will"], ["Will"], ["wil"]],
    [["clair"], ["Beatrice3"], ["bea"]],
    [["kinzo"], ["kinzo", "Kinzo2"], ["kin", "ki2"]],
    [["krauss"], ["krauss"], ["kla"]],
    [["natsu"], ["natsuhi"], ["nat"]],
    [["hide"], ["hideyoshi"], ["hid"]],
    [["rudolf"], ["rudolf"], ["rud"]],
    [["rosa"], ["rosa"], ["ros"]],
    [["kyrie"], ["kyrie"], ["kir"]],
    [["jessica"], ["jessica"], ["jes"]],
    [["george"], ["george"], ["geo"]],
    [["maria"], ["Maria"], ["mar"]],
    [["genji"], ["genji"], ["gen"]],
    [["shannon"], ["shannon"], ["sha"]],
    [["kanon"], ["kanon"], ["kan", "ka2"]],
    [["gohda"], ["gohda"], ["goh"]],
    [["kumasawa"], ["kumasawa"], ["kum"]],
    [["nanjo"], ["nanjo"], ["nan"]],
    [["lucifer"], ["Luci"], ["rg1"]],
    [["leviathan"], ["Levi"], ["rg2"]],
    [["satan"], ["Satan"], ["rg3"]],
    [["belphegor"], ["Belphe"], ["rg4"]],
    [["mammon"], ["Mammon"], ["rg5"]],
    [["beelzebub"], ["Beelz"], ["rg6"]],
    [["asmodeus"], ["Asmo"], ["rg7"]],
    [["c410"], ["410"], ["s41"]],
    [["c45"], ["45"], ["s45"]],
    [["chi_group"], ["410", "45"], ["s41", "s45"]],
    [["portrait_group", "group_full"], ["Luci", "Levi", "Satan", "Belphe", "Mammon", "Beelz", "Asmo"], ["rg1", "rg2", "rg3", "rg4", "rg5", "rg6", "rg7"]]
  ];

  const spec = specs.find(([needles]) => needles.some(needle => target.includes(needle)));
  if (!spec) return null;
  return { folders: spec[1], prefixes: spec[2] };
}
