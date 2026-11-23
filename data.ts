export type ChannelGroup =
  | "Paid Social"
  | "Search & AI"
  | "Programmatic & DSP"
  | "Retail Media"
  | "Publisher & Ad Tech"
  | "CTV & Audio"
  | "Offline";

export type Country = "UK" | "US" | "EU" | "Global";

export interface Update {
  slug: string;
  headline: string;
  bullets: [string, string, string];
  channel: ChannelGroup;
  countries: Country[];
  platform: string;
  sourceUrl: string;
  sourceDomain: string;
  publishedAt: string; // ISO
  summary: string;
  video?: SafeVideo;
}

export const updates: Update[] = [
  {
    slug: "pinterest-tvscientific-ctv-audiences",
    headline: "Pinterest launches high-intent audiences on CTV via tvScientific",
    bullets: [
      "What Launched: First-party Pinterest intent audiences now available for CTV campaigns through tvScientific.",
      "Who Can Buy It: US advertisers using Pinterest Performance+ and tvScientific’s platform.",
      "Why It Matters: Combines 600M user intent signals with outcome-based CTV buying and AI optimization."
    ],
    channel: "CTV & Audio",
    countries: ["US"],
    platform: "Pinterest",
    sourceUrl: "https://newsroom.pinterest.com/news/tvscientific-by-pinterest/",
    sourceDomain: "newsroom.pinterest.com",
    publishedAt: "2026-04-27",
    summary: "Pinterest completed its acquisition of tvScientific and opened its high-intent audiences for Connected TV campaigns.",
    video: {
      type: "official_embed",
      url: "https://www.youtube-nocookie.com/embed/ykn6Q1O__0g",
      title: "Introducing Kokai (related programmatic context)",
      channelCredit: "The Trade Desk",
    },
  },
  {
    slug: "chatgpt-visual-ads-format",
    headline: "OpenAI introduces visual ad format in ChatGPT",
    bullets: [
      "What Launched: New image-based ads during image generation, clearly labeled and separate from responses.",
      "Who Can Buy It: Select US advertisers on Free and Go plans; self-serve Ads Manager expanding.",
      "Why It Matters: Reaches 1.2B weekly users with product inspiration ads that do not influence ChatGPT answers."
    ],
    channel: "Search & AI",
    countries: ["US"],
    platform: "OpenAI",
    sourceUrl: "https://openai.com/index/new-chatgpt-ads-format-and-measurement/",
    sourceDomain: "openai.com",
    publishedAt: "2026-10-05",
    summary: "OpenAI launched a visual advertising format inside ChatGPT image generation with expanded measurement tools."
  },
  {
    slug: "tradedesk-kokai-ctv-pause-ads",
    headline: "The Trade Desk adds CTV pause ads and AI controls in Kokai",
    bullets: [
      "What Launched: Programmatic CTV pause ads, Audience Unlimited beta, and omnichannel insights dashboard.",
      "Who Can Buy It: Global traders on the Kokai platform.",
      "Why It Matters: Unlocks user-initiated high-attention CTV inventory with better AI optimization controls."
    ],
    channel: "Programmatic & DSP",
    countries: ["Global"],
    platform: "The Trade Desk",
    sourceUrl: "https://www.thetradedesk.com/resources/q2-2026-release-highlights",
    sourceDomain: "thetradedesk.com",
    publishedAt: "2026-05-16",
    summary: "Kokai Q2 release brings CTV pause ads, AI audience tools, and clearer omnichannel performance views."
  },
  {
    slug: "tesco-media-ad-manager",
    headline: "Tesco Media launches self-serve Ad Manager and shoppable formats",
    bullets: [
      "What Launched: Tesco Media Ad Manager (starting with Sponsored Products) plus shoppable video/display and AI Audiences.",
      "Who Can Buy It: UK brands and agencies working with Tesco Media.",
      "Why It Matters: Clubcard data powers predictive audiences and incrementality measurement across 93% of UK media spend."
    ],
    channel: "Retail Media",
    countries: ["UK"],
    platform: "Tesco Media",
    sourceUrl: "https://grocerytrader.co.uk/tesco-media-unveils-new-ad-platform-shoppable-formats-and-smarter-in-store-media/",
    sourceDomain: "grocerytrader.co.uk",
    publishedAt: "2026-10-09",
    summary: "Tesco Media unveiled a self-service platform, shoppable formats, and AI-powered audiences at its 2026 Upfront."
  },
  {
    slug: "sky-adsmart-ai-toolkit",
    headline: "Sky AdSmart adds AI creative toolkit for local TV ads",
    bullets: [
      "What Launched: AI-powered Waymark integration to create TV ads in minutes for small businesses.",
      "Who Can Buy It: UK local and regional advertisers via Sky Media AdSmart.",
      "Why It Matters: Lowers the barrier to addressable TV with postcode targeting and household-level delivery."
    ],
    channel: "Offline",
    countries: ["UK"],
    platform: "Sky Media",
    sourceUrl: "https://www.adsmartfromsky.co.uk/news-resources/new-ai-powered-creative-advertising-toolkit/",
    sourceDomain: "adsmartfromsky.co.uk",
    publishedAt: "2026-01-28",
    summary: "Sky Media launched an AI toolkit so local businesses can produce and buy targeted AdSmart TV campaigns faster and cheaper."
  },
  {
    slug: "iab-supplychain-v1-1",
    headline: "IAB Tech Lab updates SupplyChain object to v1.1",
    bullets: [
      "What Launched: SupplyChain 1.1 now requires disclosure of any entity that has custody of the bid request.",
      "Who Can Buy It: Global programmatic buyers and sellers adopting the OpenRTB update.",
      "Why It Matters: Improves supply path transparency by including non-payment-handling intermediaries."
    ],
    channel: "Publisher & Ad Tech",
    countries: ["Global"],
    platform: "IAB Tech Lab",
    sourceUrl: "https://iabtechlab.com/updating-the-supply-chain-object-finally/",
    sourceDomain: "iabtechlab.com",
    publishedAt: "2026-11-19",
    summary: "IAB Tech Lab released SupplyChain 1.1, expanding the object to cover all entities that handle bid requests."
  },
  {
    slug: "tradedesk-retail-media-onsite",
    headline: "The Trade Desk enables programmatic onsite retail media",
    bullets: [
      "What Launched: Integration with Koddi for buying premium onsite retail media inventory inside The Trade Desk.",
      "Who Can Buy It: Global advertisers; Gopuff is the initial partner with more retailers planned.",
      "Why It Matters: Lets brands run full-funnel campaigns from awareness to conversion without leaving the DSP."
    ],
    channel: "Retail Media",
    countries: ["Global"],
    platform: "The Trade Desk",
    sourceUrl: "https://www.marketing-interactive.com/the-trade-desk-brings-programmatic-retail-media-onsite",
    sourceDomain: "marketing-interactive.com",
    publishedAt: "2026-11-10",
    summary: "The Trade Desk and Koddi opened programmatic access to onsite retail media inventory."
  },
  {
    slug: "openai-sponsored-agents-ads-manager",
    headline: "OpenAI tests Sponsored Agents and expands Ads Manager AI tools",
    bullets: [
      "What Launched: Sponsored Agents for post-click conversations plus AI creative tools and HubSpot/Shopify integrations.",
      "Who Can Buy It: Select US advertisers; self-serve Ads Manager rolling out more widely.",
      "Why It Matters: Brings conversational commerce and natural-language campaign management into ChatGPT ads."
    ],
    channel: "Search & AI",
    countries: ["US"],
    platform: "OpenAI",
    sourceUrl: "https://openai.com/index/reimagining-advertising-with-ai/",
    sourceDomain: "openai.com",
    publishedAt: "2026-09-16",
    summary: "OpenAI began testing advertiser-sponsored agents and added AI tools for creating and managing ChatGPT ad campaigns."
  }
];

export function getUpdate(slug: string) {
  return updates.find((u) => u.slug === slug);
}

export function getAllSlugs() {
  return updates.map((u) => u.slug);
}
