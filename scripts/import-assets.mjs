import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { collectAssetRecords, listFilesRecursive, pathExists, rootDir } from "./shared.mjs";

const sourceArg = process.argv.find(arg => arg.startsWith("--from="));
const dryRun = process.argv.includes("--dry-run");

if (!sourceArg) {
  console.error("Usage: node scripts/import-assets.mjs --from=\"C:\\path\\to\\legal\\umineko\\assets\" [--dry-run]");
  process.exit(1);
}

const sourceDir = path.resolve(sourceArg.slice("--from=".length));
const sourceFiles = await listFilesRecursive(sourceDir);
const sourceByName = new Map();

for (const file of sourceFiles) {
  const key = path.basename(file).toLowerCase();
  if (!sourceByName.has(key)) sourceByName.set(key, []);
  sourceByName.get(key).push(file);
}

const copied = [];
const ambiguous = [];
const missing = [];

for (const record of collectAssetRecords()) {
  if (await pathExists(record.path)) continue;

  const matches = sourceByName.get(record.fileName.toLowerCase()) || [];
  if (matches.length === 1) {
    const target = path.join(rootDir, record.path);
    copied.push({ from: matches[0], to: record.path });
    if (!dryRun) {
      await mkdir(path.dirname(target), { recursive: true });
      await copyFile(matches[0], target);
    }
  } else if (matches.length > 1) {
    ambiguous.push({ asset: record.path, matches });
  } else {
    missing.push(record.path);
  }
}

console.log(`${dryRun ? "Would copy" : "Copied"}: ${copied.length}`);
console.log(`Ambiguous: ${ambiguous.length}`);
console.log(`Still missing: ${missing.length}`);

if (ambiguous.length) {
  console.log("\nAmbiguous filename matches:");
  for (const item of ambiguous) {
    console.log(`- ${item.asset}`);
    for (const match of item.matches.slice(0, 5)) console.log(`  ${match}`);
  }
}

if (missing.length) {
  console.log("\nStill missing:");
  for (const item of missing) console.log(`- ${item}`);
}
