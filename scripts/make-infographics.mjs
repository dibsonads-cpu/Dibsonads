import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const items = JSON.parse(readFileSync(join(root, "lib/infographic-copy.json"), "utf8"));
const outDir = join(root, "public/infographics");
mkdirSync(outDir, { recursive: true });

const themes = [
  { bg: "#141a2a", fg: "#f7f4ee", accent: "#ff5a36", muted: "#ffd23f" },
  { bg: "#241447", fg: "#f7f4ee", accent: "#ffd23f", muted: "#7dffc3" },
  { bg: "#f4f0e6", fg: "#141a2a", accent: "#d7263d", muted: "#6d4aff" },
  { bg: "#10241c", fg: "#f7f4ee", accent: "#14d6a0", muted: "#ffd23f" },
  { bg: "#1b2433", fg: "#ffffff", accent: "#3ec4ff", muted: "#ff8b6a" },
  { bg: "#3a1020", fg: "#fff7f2", accent: "#ffd23f", muted: "#ff8fb8" },
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function motif(index, accent) {
  if (index % 4 === 0) {
    return `<g fill="${accent}">
      <rect x="860" y="150" width="36" height="120" rx="8"/>
      <rect x="912" y="110" width="36" height="160" rx="8"/>
      <rect x="964" y="70" width="36" height="200" rx="8"/>
    </g>`;
  }
  if (index % 4 === 1) {
    return `<circle cx="930" cy="180" r="92" fill="none" stroke="${accent}" stroke-width="18"/>
      <circle cx="930" cy="180" r="28" fill="${accent}"/>`;
  }
  if (index % 4 === 2) {
    return `<path d="M800 250 L940 130 L940 250 Z" fill="${accent}"/>`;
  }
  return `<rect x="850" y="90" width="150" height="150" rx="28" fill="none" stroke="${accent}" stroke-width="16"/>
    <path d="M890 165 H960" stroke="${accent}" stroke-width="16" stroke-linecap="round"/>`;
}

for (const [index, item] of items.entries()) {
  const theme = themes[index % themes.length];
  const size = item.lines.length > 2 ? 78 : 92;
  const lines = item.lines
    .map(
      (line, lineIndex) =>
        `<text x="80" y="${430 + lineIndex * (size + 12)}" fill="${theme.fg}" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="${size}" font-weight="800">${esc(line)}</text>`,
    )
    .join("\n");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080" role="img" aria-label="${esc(item.lines.join(" "))}">
  <rect width="1080" height="1080" fill="${theme.bg}"/>
  <rect x="0" y="0" width="18" height="1080" fill="${theme.accent}"/>
  ${motif(index, theme.accent)}
  <text x="80" y="150" fill="${theme.accent}" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" letter-spacing="3">${esc(item.kicker.toUpperCase())}</text>
  ${lines}
  <text x="80" y="960" fill="${theme.muted}" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700">${esc(item.foot)}</text>
</svg>
`;
  writeFileSync(join(outDir, `${item.slug}.svg`), svg);
}

console.log(`wrote ${items.length} infographics`);
