import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const items = JSON.parse(readFileSync(join(root, "lib/infographic-copy.json"), "utf8"));
const outDir = join(root, "public/infographics");
mkdirSync(outDir, { recursive: true });

const WIDTH = 1600;
const HEIGHT = 1000;

/** One short hook. The card title sits underneath, so this stays a stat or a keyword. */
const heroes = {
  "dv360-pinterest-inventory": "PINS",
  "dv360-loblaw-canada": "CANADA",
  "meta-product-showcase-default": "OPT OUT",
  "meta-threads-ads-all-markets": "THREADS",
  "linkedin-first-impression-and-ctv": "FIRST",
  "meta-newfronts-reels-trending": "REELS",
  "whatsapp-updates-tab-ads": "STATUS",
  "wendys-sponsored-snaps": "52M",
  "prime-video-pinterest-invincible": "4×",
  "amazon-sponsored-products-video": "VIDEO",
  "amazon-sponsored-brands-rsov": "TOP",
  "amazon-ads-prompts": "PROMPT",
  "pinterest-performance-plus": "FASTER",
  "pinterest-performance-cropping": "CROP",
  "wayfair-top-of-search": "+237%",
  "google-marketing-live-2025-ai-ads": "AI",
  "lenovo-reddit-dpa": "+7%",
  "vistaprint-reddit-dpa": "4×",
  "amazon-sponsored-tv-expansion": "TV",
  "booking-prime-video": "22.3M",
  "fizz-fallout": "+21%",
  "jeep-women-era": "96.3M",
  "meta-partnership-ads-hub": "UGC",
  "instagram-partnership-ads-api": "BOOST",
  "tiktok-creator-ai-search": "BRIEF",
  "tiktok-mena-formats": "MENA",
  "asics-sponsored-snaps": "2M",
  "meta-partnership-catalog-card": "INTRO",
  "tiktok-smart-plus-catalog": "FEED",
  "tiktok-gmv-max-profit": "PROFIT",
  "kerastase-premiere": "13.3M",
  "canadian-tire-local-inventory": "+16.5%",
  "pinterest-media-network-connect": "RETAIL",
  "snap-smart-bidding": "CPA",
  "tiktok-smart-asset-manager": "AUTO",
};

const brands = {
  DV360: ["#0b3d91", "#4c8dff"],
  Meta: ["#0668E1", "#a033b5"],
  LinkedIn: ["#053e78", "#0A66C2"],
  WhatsApp: ["#075E54", "#1ebe5d"],
  "Wendy's": ["#6d0d1c", "#e31837"],
  "Prime Video": ["#0b1218", "#1a98ff"],
  "Amazon Ads": ["#131921", "#ff9900"],
  Pinterest: ["#7a0614", "#e60023"],
  Wayfair: ["#4a1020", "#c8102e"],
  "Google Ads": ["#174ea6", "#1e8e3e"],
  Lenovo: ["#1a1a1a", "#e1140a"],
  VistaPrint: ["#2a0a4a", "#9b4dff"],
  "Booking.com": ["#003580", "#009fe3"],
  Fizz: ["#2a0845", "#c084fc"],
  Jeep: ["#142016", "#6fbf4a"],
  Instagram: ["#6a11cb", "#fc4a1a"],
  TikTok: ["#111111", "#fe2c55"],
  "TikTok Shop": ["#06221f", "#25f4ee"],
  ASICS: ["#00143f", "#1d4ed8"],
  "Canadian Tire": ["#111111", "#d0121a"],
  Snap: ["#111111", "#ffe600"],
  Kérastase: ["#1c140c", "#d4b483"],
};

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isLight(hex) {
  const value = Number.parseInt(hex.slice(1), 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return (red * 299 + green * 587 + blue * 114) / 1000 > 180;
}

function motif(index, color) {
  if (index % 5 === 0) {
    return `<g fill="${color}">
      <rect x="1180" y="560" width="78" height="250" rx="18"/>
      <rect x="1290" y="420" width="78" height="390" rx="18"/>
      <rect x="1400" y="280" width="78" height="530" rx="18"/>
    </g>`;
  }
  if (index % 5 === 1) {
    return `<circle cx="1340" cy="500" r="230" fill="none" stroke="${color}" stroke-width="26"/>
      <circle cx="1340" cy="500" r="64" fill="${color}"/>`;
  }
  if (index % 5 === 2) {
    return `<path d="M1160 300 L1500 500 L1160 700 Z" fill="${color}"/>`;
  }
  if (index % 5 === 3) {
    return `<rect x="1160" y="250" width="300" height="300" rx="70" fill="none" stroke="${color}" stroke-width="22"/>
      <circle cx="1310" cy="400" r="34" fill="${color}"/>`;
  }
  return `<path d="M1140 760 A280 280 0 0 1 1500 240" fill="none" stroke="${color}" stroke-width="34" stroke-linecap="round"/>`;
}

for (const [index, item] of items.entries()) {
  const [from, to] = brands[item.kicker] ?? ["#141a2a", "#6d4aff"];
  const hero = heroes[item.slug] ?? item.lines[0];
  const size = hero.length > 8 ? 112 : hero.length > 5 ? 148 : 188;
  const accent = isLight(to) ? "#14120a" : "#ffffff";
  const id = `g${index}`;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="${esc(item.kicker + " " + hero)}">
  <defs>
    <radialGradient id="${id}" cx="82%" cy="42%" r="78%">
      <stop offset="0%" stop-color="${to}"/>
      <stop offset="58%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${from}"/>
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${from}"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#${id})"/>
  <circle cx="1460" cy="-80" r="460" fill="#ffffff" opacity="0.1"/>
  <circle cx="80" cy="1080" r="360" fill="#000000" opacity="0.16"/>
  ${motif(index, accent)}
  <text x="72" y="118" fill="#ffffff" fill-opacity="0.82" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" letter-spacing="4">${esc(item.kicker.toUpperCase())}</text>
  <text x="72" y="560" fill="#ffffff" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="${size}" font-weight="800">${esc(hero)}</text>
</svg>
`;
  writeFileSync(join(outDir, `${item.slug}.svg`), svg);
}

console.log(`wrote ${items.length} infographics at ${WIDTH}x${HEIGHT}`);
