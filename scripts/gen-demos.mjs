import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const itemsDir = path.join(rootDir, "src", "lib", "demo", "items");
const targetFile = path.join(rootDir, "src", "lib", "demo", "demos.ts");

const files = fs
  .readdirSync(itemsDir)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .sort();

const toIdent = (name) =>
  name
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/[^A-Za-z0-9_$]/g, "");

const imports = files.map((file) => {
  const name = path.basename(file, ".ts");
  return `import ${toIdent(name)} from "./items/${name}";`;
});

const arrayEntries = files.map((file) => {
  const name = path.basename(file, ".ts");
  return `  ${toIdent(name)},`;
});

const content = `import type { DemoItem } from "./types";
${imports.join("\n")}

export const demoItems: DemoItem[] = [
${arrayEntries.join("\n")}
];

export type { DemoItem } from "./types";
`;

fs.writeFileSync(targetFile, content, "utf8");
console.log(`Generated ${targetFile} with ${files.length} demo items.`);
