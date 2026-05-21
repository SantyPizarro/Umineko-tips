import { collectAssetRecords, pathExists, writeJson } from "./shared.mjs";

const records = [];

for (const record of collectAssetRecords()) {
  records.push({
    ...record,
    exists: await pathExists(record.path)
  });
}

const report = {
  generatedAt: new Date().toISOString(),
  total: records.length,
  present: records.filter(record => record.exists).length,
  missing: records.filter(record => !record.exists).length,
  records
};

await writeJson("assets/required-assets.report.json", report);

console.log(`Asset report written: assets/required-assets.report.json`);
console.log(`Present: ${report.present}/${report.total}`);
console.log(`Missing: ${report.missing}/${report.total}`);
