export interface LearnGuide {
  slug: string;
  title: string;
  channel: string;
  whatItIs: string;
  howBuyingWorks: string;
  keyMetrics: string;
  youtubeId: string;
  youtubeTitle: string;
  youtubeChannel: string;
  video?: SafeVideo;
}

export const learnGuides: LearnGuide[] = [
  {
    slug: "paid-social",
    title: "Paid Social",
    channel: "Paid Social",
    whatItIs: "Advertising on social platforms (Meta, TikTok, Pinterest, LinkedIn, Snap) using first-party data and interest signals.",
    howBuyingWorks: "Self-serve Ads Managers with auction bidding (CPM, CPC, CPA). Campaigns, ad sets, and creatives. Audience building via pixels, customer lists, and lookalikes.",
    keyMetrics: "CPM, CTR, CPC, ROAS, CPA, video completion rate, and incremental reach.",
    youtubeId: "ikscTwdu2_0",
    youtubeTitle: "How to create ads on Pinterest",
    youtubeChannel: "Pinterest Business",
  },
  {
    slug: "search-ai",
    title: "Search & AI",
    channel: "Search & AI",
    whatItIs: "Intent-driven ads on search engines and emerging AI chat interfaces (Google, Bing, ChatGPT, Perplexity).",
    howBuyingWorks: "Keyword or conversational context targeting. Auction or reservation models. Self-serve platforms with conversion tracking.",
    keyMetrics: "CTR, CPC, conversion rate, ROAS, and brand search lift.",
    youtubeId: "2agJo3Jf_O4",
    youtubeTitle: "The Thinking Behind Ads in ChatGPT",
    youtubeChannel: "OpenAI",
  },
  {
    slug: "programmatic-dsp",
    title: "Programmatic & DSP",
    channel: "Programmatic & DSP",
    whatItIs: "Automated buying of digital inventory across open exchanges, private marketplaces, and preferred deals via Demand-Side Platforms.",
    howBuyingWorks: "Real-time bidding (RTB) or programmatic guaranteed. Targeting via data segments, contextual, and first-party signals. Optimization with AI co-pilots.",
    keyMetrics: "CPM, viewability, VTR, CPA, incremental ROAS, and frequency.",
    youtubeId: "ykn6Q1O__0g",
    youtubeTitle: "Introducing Kokai",
    youtubeChannel: "The Trade Desk",
  },
  {
    slug: "retail-media",
    title: "Retail Media",
    channel: "Retail Media",
    whatItIs: "Advertising on retailer properties (onsite search, display, in-store screens) powered by first-party purchase data.",
    howBuyingWorks: "Sponsored products, onsite display/video, and offsite audience activation. Closed-loop measurement via loyalty data.",
    keyMetrics: "ROAS, incrementality, share of search, and new-to-brand sales.",
    youtubeId: "Oczgrmnaxxw",
    youtubeTitle: "Can retail media be a brand channel? With Tesco's Tash Whitmey",
    youtubeChannel: "The Media Leader UK",
  },
  {
    slug: "publisher-ad-tech",
    title: "Publisher & Ad Tech",
    channel: "Publisher & Ad Tech",
    whatItIs: "Infrastructure, standards, and tools for publishers and ad tech vendors (SSPs, measurement, supply path transparency).",
    howBuyingWorks: "Header bidding, OpenRTB, ads.txt/sellers.json, and private marketplace deals. Standards from IAB Tech Lab.",
    keyMetrics: "Fill rate, revenue per session, viewability, and supply path transparency scores.",
    youtubeId: "ykn6Q1O__0g", // Fallback official platform video
    youtubeTitle: "Introducing Kokai (programmatic context)",
    youtubeChannel: "The Trade Desk",
  },
  {
    slug: "ctv-audio",
    title: "CTV & Digital Audio",
    channel: "CTV & Audio",
    whatItIs: "Advertising on Connected TV platforms and digital audio (podcasts, streaming radio) with household or device targeting.",
    howBuyingWorks: "Programmatic via DSPs or direct. Household graphs, ACR data, and outcome-based buying. Formats include pre-roll, pause ads, and audio spots.",
    keyMetrics: "Completion rate, unique household reach, CPA, and brand lift.",
    youtubeId: "JuZvKycRFW8",
    youtubeTitle: "How to boost your businesses with TV Advertising | AdSmart from Sky",
    youtubeChannel: "Elite Business",
  },
  {
    slug: "offline",
    title: "Offline (TV / OOH / Radio / Print)",
    channel: "Offline",
    whatItIs: "Traditional media channels including linear/addressable TV, out-of-home, radio, and print with growing digital targeting capabilities.",
    howBuyingWorks: "Addressable TV (e.g. Sky AdSmart) inserts targeted ads into live streams. DOOH uses location and audience data. Buying via agencies or self-serve portals.",
    keyMetrics: "Reach, frequency, GRPs, and outcome-based metrics where addressable.",
    youtubeId: "XsxiSdqH8nk",
    youtubeTitle: "What is AdSmart from Sky?",
    youtubeChannel: "Conteur",
  },
];

export function getLearnGuide(slug: string) {
  return learnGuides.find((g) => g.slug === slug);
}
