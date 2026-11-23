import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "lib/updates.ts"), "utf8");
const slugs = [...source.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
const channels = [...source.matchAll(/channel: "([^"]+)"/g)].map((match) => match[1]);
const titles = [...source.matchAll(/title: "([^"]+)"/g)].map((match) => match[1]);
const platforms = [...source.matchAll(/platform: "([^"]+)"/g)].map((match) => match[1]);

const accents = {
  social: ["#ff5d3a", "#ff2f8b"],
  programmatic: ["#3ec4ff", "#24124d"],
  "ai-ads": ["#6d4aff", "#ffd23f"],
  "retail-media": ["#ffd23f", "#ff5d3a"],
  search: ["#14d6a0", "#24124d"],
  "ctv-video": ["#ff2f8b", "#6d4aff"],
};

function hash(value) {
  let h = 0;
  for (const char of value) h = (h * 33 + char.charCodeAt(0)) >>> 0;
  return h;
}

function escape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const dir = join(root, "public/covers");
mkdirSync(dir, { recursive: true });

slugs.forEach((slug, index) => {
  const channel = channels[index] ?? "social";
  const [a, b] = accents[channel] ?? ["#ff5d3a", "#24124d"];
  const h = hash(slug);
  const tilt = (h % 18) - 9;
  const r1 = 40 + (h % 80);
  const r2 = 30 + ((h >> 3) % 90);
  const title = titles[index] ?? slug;
  const platform = platforms[index] ?? "";
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-label="${escape(title)}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="1000" fill="#fff4ea"/>
  <rect x="28" y="28" width="744" height="944" rx="56" fill="url(#g)"/>
  <circle cx="${140 + (h % 160)}" cy="${200 + ((h >> 2) % 140)}" r="${r1}" fill="#fff4ea" fill-opacity="0.35"/>
  <rect x="${80 + ((h >> 6) % 200)}" y="${480 + ((h >> 7) % 80)}" width="${180 + (h % 80)}" height="${220 + ((h >> 8) % 40)}" rx="36" fill="#24124d" fill-opacity="0.16" transform="rotate(${tilt} 400 600)"/>
  <circle cx="${560 + ((h >> 4) % 80)}" cy="${720 + ((h >> 5) % 80)}" r="${r2}" fill="#fff4ea" fill-opacity="0.22"/>
  <rect x="64" y="96" width="150" height="52" rx="26" fill="#24124d"/>
  <text x="139" y="130" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#fff4ea">DIBS</text>
  <rect x="64" y="860" width="520" height="58" rx="18" fill="#24124d"/>
  <text x="84" y="898" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#fff4ea">${escape(platform.slice(0, 26))}</text>
</svg>
`;
  writeFileSync(join(dir, `${slug}.svg`), svg);
});

console.log(`wrote ${slugs.length} covers`);
