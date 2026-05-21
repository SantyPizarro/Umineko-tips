import { collectAssetPaths, pathExists, printErrors } from "./shared.mjs";

const errors = [];

for (const assetPath of collectAssetPaths()) {
  if (!(await pathExists(assetPath))) {
    errors.push(`Missing asset: ${assetPath}`);
  }
}

if (errors.length) {
  console.error("Asset validation failed:");
  printErrors(errors);
  process.exit(1);
}

console.log("Asset validation passed.");
