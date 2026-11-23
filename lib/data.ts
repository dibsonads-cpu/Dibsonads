export type Update = {
  slug: string;
  title: string;
  bullets: string[];
  platform: string;
  country: string;
  channel: string;
  sourceUrl: string;
  date: string;
};

export const updates: Update[] = [
  {
    slug: "pinterest-ctv",
    title: "Pinterest launches CTV ads",
    bullets: [
      "New connected TV ad format now available in select markets.",
      "Available to advertisers using Pinterest Ads Manager.",
      "Expands Pinterest beyond mobile into living-room inventory."
    ],
    platform: "Pinterest",
    country: "US",
    channel: "CTV & Audio",
    sourceUrl: "https://newsroom.pinterest.com",
    date: "2026-11-15"
  },
  {
    slug: "chatgpt-ads",
    title: "ChatGPT Ads enter limited testing",
    bullets: [
      "OpenAI begins testing sponsored results inside ChatGPT.",
      "Currently limited to a small set of advertisers.",
      "Signals the start of conversational ad inventory."
    ],
    platform: "OpenAI",
    country: "US",
    channel: "Search & AI",
    sourceUrl: "https://openai.com",
    date: "2026-11-10"
  },
  {
    slug: "trade-desk-kokai",
    title: "The Trade Desk expands Kokai",
    bullets: [
      "New AI-powered buying features rolled out in Kokai.",
      "Available to existing Trade Desk clients.",
      "Improves cross-channel optimization and forecasting."
    ],
    platform: "The Trade Desk",
    country: "Global",
    channel: "Programmatic & DSP",
    sourceUrl: "https://www.thetradedesk.com",
    date: "2026-11-08"
  }
];
