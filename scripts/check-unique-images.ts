import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { caseStudies } from "../lib/cases";
import { updates } from "../lib/updates";

type Item = { id: string; src: string; kind?: string };

function identity(src: string) {
  const bare = src.split("#")[0].split("?")[0].split("~")[0];
  return bare.replace(/\/\d+px-/, "/").toLowerCase();
}

const items: Item[] = [
  ...updates.map((item) => ({ id: `launch:${item.slug}`, src: item.image.src, kind: item.image.kind })),
  ...caseStudies.map((item) => ({ id: `case:${item.slug}`, src: item.image.src, kind: item.image.kind })),
];

const seen = new Map<string, string>();
const problems: string[] = [];

for (const item of items) {
  const key = identity(item.src);
  const previous = seen.get(key);
  if (previous) problems.push(`${item.id} uses the same image as ${previous}: ${item.src}`);
  else seen.set(key, item.id);

  if (item.src.startsWith("/")) {
    const file = join(process.cwd(), "public", item.src.replace(/^\//, ""));
    if (!existsSync(file)) problems.push(`${item.id} is missing the file ${item.src}`);
    if (item.src.endsWith(".svg")) {
      const svg = readFileSync(file, "utf8");
      if (!svg.includes('width="1080"') || !svg.includes('height="1080"')) {
        problems.push(`${item.id} infographic is not 1080x1080`);
      }
    }
  }
}

const counts = { source: 0, licensed: 0, infographic: 0, unmarked: 0 };
for (const item of items) {
  if (item.kind === "source" || item.kind === "licensed" || item.kind === "infographic") counts[item.kind] += 1;
  else counts.unmarked += 1;
}

console.log(`images ${items.length} unique ${seen.size}`);
console.log(`source ${counts.source} licensed ${counts.licensed} infographic ${counts.infographic} unmarked ${counts.unmarked}`);

if (counts.unmarked > 0) problems.push(`${counts.unmarked} images have no kind`);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
