export type LaunchUpdate = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  platform: string;
  platformSlug?: string;
  country: string;
  countryNote: string;
  channel: string;
  channelSlug: string;
  sourceUrl: string;
  sourceName: string;
  date: string;
  verified: true;
};

export const updates: LaunchUpdate[] = [
  {
    slug: "microsoft-bing-ai-overview-ads",
    title: "Microsoft Advertising places ads in Bing AI Overviews",
    summary:
      "Ads can now appear next to AI Overviews on Bing through campaigns advertisers already run, including Performance Max and AI Max. Microsoft says the placement is available in every market except China.",
    bullets: [
      "No separate campaign type is required. Microsoft says Performance Max and AI Max are the most effective way to show up in these AI experiences.",
      "Availability, as stated in the post: all markets except China.",
      "The same November update also introduces Discover ads on Edge and Windows in the US, Canada, the UK, Australia, and India, and points to Xbox Video for Brands as full-screen video before a cloud-gaming session.",
    ],
    platform: "Microsoft Advertising",
    platformSlug: "microsoft-ads",
    country: "Multiple",
    countryNote: "AI Overview ads: all markets except China. Discover: US, Canada, UK, Australia, and India.",
    channel: "Search & AI",
    channelSlug: "search-ai",
    sourceUrl:
      "https://about.ads.microsoft.com/en/blog/post/november-2026/put-ai-to-work-engaging-customers-in-more-places-whats-new-in-microsoft-advertising-this-november",
    sourceName: "Microsoft Advertising blog, 19 Nov 2026",
    date: "2026-11-19",
    verified: true,
  },
  {
    slug: "chatgpt-ads-expands-26-countries",
    title: "ChatGPT Ads expands to 26 more countries",
    summary:
      "OpenAI says ChatGPT Ads is now available in 89 countries after a 26-country expansion. Ads stay on the Free and Go plans. Plus, Pro, and Enterprise stay ad-free.",
    bullets: [
      "OpenAI says more than 100,000 advertisers have run campaigns since ads launched about eight months earlier.",
      "The new wave includes 14 more Latin American countries, among them Argentina, Chile, Colombia, and Peru, plus markets such as Nigeria, South Africa, Serbia, Ukraine, Cambodia, Bangladesh, and Pakistan.",
      "Advertisers can buy through technology partners or self-serve Ads Manager. OpenAI says answers stay independent of ads and conversations are not sold to advertisers.",
    ],
    platform: "ChatGPT Ads",
    country: "Multiple",
    countryNote: "OpenAI says availability now covers 89 countries. The post names examples, not the full list of 89.",
    channel: "Search & AI",
    channelSlug: "search-ai",
    sourceUrl: "https://openai.com/index/chatgpt-ads-expands-26-new-countries",
    sourceName: "OpenAI, 21 Oct 2026",
    date: "2026-10-21",
    verified: true,
  },
  {
    slug: "pinterest-visual-search-ads",
    title: "Pinterest announces Visual Search Ads",
    summary:
      "Visual Search Ads place a keyword-relevant unit in Pinterest search results and Pin closeups. Pinterest says the beta opens to eligible advertisers in all of its ad markets in the coming weeks.",
    bullets: [
      "The format supports lower-funnel objectives and works with Pinterest Performance+.",
      "Advertisers can bid for a top response and send people to the advertiser site.",
      "The same summit post adds Priority Products and self-serve A/B testing inside Performance+, plus an App Promotion objective in global beta for qualified advertisers.",
      "Pinterest does not list the individual ad markets in the announcement.",
    ],
    platform: "Pinterest",
    platformSlug: "pinterest",
    country: "Multiple",
    countryNote: "Beta for eligible advertisers in all Pinterest ad markets. The post does not name those markets.",
    channel: "Paid Social",
    channelSlug: "paid-social",
    sourceUrl: "https://newsroom.pinterest.com/news/new-pinterest-visual-search-performance-ads/",
    sourceName: "Pinterest Newsroom, 17 Sep 2026",
    date: "2026-09-17",
    verified: true,
  },
  {
    slug: "google-conversational-discovery-ads",
    title: "Google tests Conversational Discovery ads and Highlighted Answers",
    summary:
      "At Google Marketing Live 2026, Google said it is testing two Gemini-built ad formats inside AI Mode in Search. Both include an independent AI explainer and stay labeled Sponsored.",
    bullets: [
      "Conversational Discovery ads tailor creative to a specific question someone asks in AI Mode.",
      "Highlighted Answers can place a highly relevant ad inside an AI Mode recommendation list.",
      "The same post describes AI-powered Shopping ads and Business Agent for Leads as coming to Search in the following months, and expands the Direct Offers pilot.",
      "The announcement does not name the countries included in the AI Mode tests.",
    ],
    platform: "Google Ads",
    platformSlug: "google-ads",
    country: "Not stated",
    countryNote: "Google’s post does not say which countries are in the AI Mode ad tests.",
    channel: "Search & AI",
    channelSlug: "search-ai",
    sourceUrl: "https://blog.google/products/ads-commerce/google-marketing-live-search-ads/",
    sourceName: "Google blog, 20 May 2026",
    date: "2026-05-20",
    verified: true,
  },
  {
    slug: "tiktok-newfronts-high-impact-formats",
    title: "TikTok launches Logo Takeover, Prime Time, and TopReach",
    summary:
      "At IAB NewFronts 2026, TikTok announced three high-impact buys: Logo Takeover on app open, Prime Time sequential ads, and TopReach, which packages TopView with TopFeed.",
    bullets: [
      "Logo Takeover co-brands the moment someone opens TikTok, before other distractions.",
      "Prime Time can show up to three sequential ads from one advertiser to the same person inside a 15-minute window.",
      "TopReach combines TopView (the first view on open) and TopFeed (the first in-feed spot) into one buy aimed at one-day reach.",
      "The post also extends TikTok Pulse with Pulse Mentions and Pulse Tastemakers. It highlights US audiences and does not publish a country-by-country list.",
    ],
    platform: "TikTok",
    platformSlug: "tiktok",
    country: "US",
    countryNote: "Framed for advertisers reaching audiences in the US. A wider country list is not in the post.",
    channel: "Paid Social",
    channelSlug: "paid-social",
    sourceUrl: "https://newsroom.tiktok.com/newfronts-26-tiktok-unveils-new-high-impact-ad-solutions?lang=en",
    sourceName: "TikTok Newsroom, 24 Mar 2026",
    date: "2026-03-24",
    verified: true,
  },
  {
    slug: "chatgpt-ads-us-test",
    title: "OpenAI starts testing ads in ChatGPT in the US",
    summary:
      "On 9 February 2026 OpenAI began testing ads in ChatGPT for logged-in adults on the Free and Go tiers in the United States. Paid Plus, Pro, Business, Enterprise, and Education plans do not include ads.",
    bullets: [
      "Ads are labeled and separated from the answer. OpenAI says ads do not influence the answer.",
      "Advertisers do not receive chats, chat history, memories, or personal details — only aggregate performance such as views or clicks.",
      "During the test, ads are not shown on accounts OpenAI is told or predicts are under 18, and they are not eligible near sensitive topics such as health, mental health, or politics.",
      "The same page later records expansions beyond the US, including a 11 August 2026 note that ads had launched in the UK, Mexico, Brazil, Japan, and South Korea.",
    ],
    platform: "ChatGPT Ads",
    country: "US",
    countryNote: "The 9 February 2026 test is the United States. Later updates on the same page add more countries.",
    channel: "Search & AI",
    channelSlug: "search-ai",
    sourceUrl: "https://openai.com/index/testing-ads-in-chatgpt/",
    sourceName: "OpenAI, 9 Feb 2026",
    date: "2026-02-09",
    verified: true,
  },
  {
    slug: "meta-threads-ads-all-markets",
    title: "Meta expands Threads ads to users in all markets",
    summary:
      "Meta says ads on Threads, already offered to advertisers globally the previous spring, begin reaching users in all markets. Image, video, and carousel ads run in the Threads feed.",
    bullets: [
      "Threads can be added as a placement on Advantage+ and manual campaigns.",
      "Meta describes the formats as the familiar image, video, and carousel units, shown natively in the Threads feed.",
      "The post says the expansion to users in every market begins the week after the 21 January 2026 announcement.",
    ],
    platform: "Meta",
    platformSlug: "meta",
    country: "Global",
    countryNote: "Meta says delivery expands to users in all markets globally.",
    channel: "Paid Social",
    channelSlug: "paid-social",
    sourceUrl: "https://www.facebook.com/business/news/ads-on-threads-one-year-in",
    sourceName: "Meta for Business, 21 Jan 2026",
    date: "2026-01-21",
    verified: true,
  },
  {
    slug: "reddit-max-campaigns-beta",
    title: "Reddit opens Max campaigns in beta",
    summary:
      "Reddit’s Max campaigns automate targeting, creative selection, placements, and budget allocation for traffic and conversion objectives. The beta launched to select advertisers, with wider access planned over the following months.",
    bullets: [
      "Advertisers create a Max campaign by choosing Traffic or Conversions in Advanced Create.",
      "Optional creative tools include headline suggestions and thumbnail generation for the conversation placement.",
      "Top Audience Personas, a reporting view that clusters people the campaign reached, was scheduled for the following weeks.",
      "The announcement does not name the countries included in the beta.",
    ],
    platform: "Reddit",
    platformSlug: "reddit",
    country: "Not stated",
    countryNote: "Beta for select advertisers. Reddit does not list countries in the announcement.",
    channel: "Paid Social",
    channelSlug: "paid-social",
    sourceUrl:
      "https://redditinc.com/news/now-in-beta-max-campaigns-for-ai-powered-ad-performance-and-unique-audience-insights",
    sourceName: "Reddit, Inc., 5 Jan 2026",
    date: "2026-01-05",
    verified: true,
  },
  {
    slug: "linkedin-first-impression-and-ctv",
    title: "LinkedIn introduces First Impression Ads and opens CTV ads in the US and Canada",
    summary:
      "LinkedIn announced First Impression Ads, a full-screen vertical video reserved as the first ad a member sees that day, and said CTV ads are generally available for targeting buyers in the US and Canada.",
    bullets: [
      "First Impression Ads are single-day campaigns built to reserve the first ad impression.",
      "Reserved Ads can place Sponsored Content — Thought Leader Ads, Single Image Ads, and Document Ads — in the first ad slot of the feed.",
      "CTV ads are generally available to target buyers in the US and Canada. The post does not give a country list for First Impression Ads or Reserved Ads.",
    ],
    platform: "LinkedIn",
    platformSlug: "linkedin",
    country: "US & Canada",
    countryNote: "CTV general availability is stated for buyers in the US and Canada. Other formats in the post have no country list.",
    channel: "Paid Social",
    channelSlug: "paid-social",
    sourceUrl: "https://news.linkedin.com/2025/lms-introduces-new-ad-formats-and-more-collaborations",
    sourceName: "LinkedIn News, 3 Jun 2025",
    date: "2025-06-03",
    verified: true,
  },
  {
    slug: "google-ai-max-for-search",
    title: "Google introduces AI Max for Search campaigns",
    summary:
      "AI Max is a one-click suite for Search campaigns: broader query matching, text customization, and final URL expansion, with brand and location controls. Google said the beta would reach all advertisers globally starting later in May 2025.",
    bullets: [
      "Search term matching expands beyond existing keywords using broad match and keywordless technology, learning from keywords, assets, and URLs.",
      "Text customization (formerly automatically created assets) writes headlines and descriptions from the landing page, ads, and keywords. Final URL expansion sends people to a more relevant page.",
      "Controls called out in the launch post include locations of interest, brand inclusions and exclusions, asset removals, and URL controls.",
      "Google’s rollout note: global beta, starting later in the month of the 6 May 2025 announcement.",
    ],
    platform: "Google Ads",
    platformSlug: "google-ads",
    country: "Global",
    countryNote: "Google said the beta would roll out to all advertisers globally starting later in May 2025.",
    channel: "Search & AI",
    channelSlug: "search-ai",
    sourceUrl: "https://blog.google/products/ads-commerce/google-ai-max-for-search-campaigns/",
    sourceName: "Google blog, 6 May 2025",
    date: "2025-05-06",
    verified: true,
  },
];

export function getUpdate(slug: string) {
  return updates.find((update) => update.slug === slug);
}

export function updatesByDate() {
  return [...updates].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function filterUpdates(channel?: string, country?: string) {
  return updatesByDate().filter((update) => {
    if (channel && update.channelSlug !== channel) return false;
    if (country && update.country !== country) return false;
    return true;
  });
}

export function updateCountries() {
  return Array.from(new Set(updates.map((update) => update.country)));
}
