import { channelLabel, regionLabel, type FeedChannelId, type FeedRegionId } from "@/lib/taxonomy";

export type LaunchImage = {
  src: string;
  alt: string;
  credit: string;
  licence: string;
  sourceUrl?: string;
};

export type Coverage = "global" | "countries" | "region" | "multi" | "unknown";

export type Launch = {
  id: string;
  slug: string;
  title: string;
  bullets: string[];
  platform: string;
  platformSlug?: string;
  channel: FeedChannelId;
  region: FeedRegionId;
  regionNote?: string;
  countries: string[];
  coverage: Coverage;
  date: string;
  datePrecision?: "day" | "month";
  sourceName: string;
  sourceUrl: string;
  image: LaunchImage;
  verified: true;
};

function cover(slug: string, title: string): LaunchImage {
  return {
    src: `/covers/${slug}.svg`,
    alt: `Original typographic cover for “${title}”`,
    credit: "Dibs On Ads",
    licence: "Original. Generated cover art, not a platform logo or a press photo.",
  };
}

function inferCountries(region: FeedRegionId, explicit?: string[]) {
  if (explicit) return explicit;
  if (region === "us") return ["US"];
  if (region === "uk") return ["GB"];
  if (region === "north-america") return ["US", "CA"];
  return [];
}

function inferCoverage(region: FeedRegionId, countries: string[]): Coverage {
  if (region === "global") return "global";
  if (region === "eu") return "region";
  if (region === "not-stated") return "unknown";
  if (region === "multiple" || region === "apac") return "multi";
  if (countries.length > 0) return "countries";
  return "unknown";
}

function launch(
  entry: Omit<Launch, "id" | "image" | "verified" | "countries" | "coverage"> & {
    image?: LaunchImage;
    countries?: string[];
    coverage?: Coverage;
  },
): Launch {
  const countries = inferCountries(entry.region, entry.countries);
  return {
    ...entry,
    id: entry.slug,
    countries,
    coverage: entry.coverage ?? inferCoverage(entry.region, countries),
    verified: true,
    image: entry.image ?? cover(entry.slug, entry.title),
  };
}

export const updates: Launch[] = [
  launch({
    slug: "dv360-spotify-audiences",
    title: "DV360 opens Google audiences on Spotify in the US and India",
    bullets: [
      "Display & Video 360 buyers in the US and India can run video and audio on Spotify with Google audiences.",
      "It is part of the November 2026 Google Marketing Platform drop.",
    ],
    platform: "Display & Video 360",
    channel: "programmatic",
    region: "multiple",
    countries: ["US", "IN"],
    regionNote: "United States and India.",
    date: "2026-11-18",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/marketingplatform/360/google-marketing-platform-drop-november/",
  }),
  launch({
    slug: "dv360-pinterest-inventory",
    title: "DV360 adds programmatic Pinterest inventory",
    bullets: [
      "Advertisers can buy Pinterest video and display inventory from Display & Video 360.",
      "Google describes it as premium inventory next to high-intent Pinterest audiences.",
      "The post does not name the countries.",
    ],
    platform: "Display & Video 360",
    channel: "programmatic",
    region: "not-stated",
    date: "2026-11-18",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/marketingplatform/360/google-marketing-platform-drop-november/",
  }),
  launch({
    slug: "dv360-loblaw-canada",
    title: "DV360 adds Loblaw shopper audiences in Canada",
    bullets: [
      "Loblaw Advance audiences and closed-loop SKU measurement are in DV360’s Commerce Media Suite.",
      "The suite already includes retailers such as Walmart and Costco.",
      "This addition is for Canada.",
    ],
    platform: "Display & Video 360",
    channel: "retail-media",
    region: "north-america",
    countries: ["CA"],
    regionNote: "Canada.",
    date: "2026-11-18",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/marketingplatform/360/google-marketing-platform-drop-november/",
  }),
  launch({
    slug: "meta-product-showcase-default",
    title: "Meta can turn Product showcase on by default",
    bullets: [
      "From Marketing API v27.0, Meta may enable Product showcase on ads unless an advertiser opts out.",
      "Opt out by setting product extensions enroll status to OPT_OUT.",
      "New Sales ad sets aimed at specific phones also default to other mobile devices, unless that is switched off.",
    ],
    platform: "Meta",
    platformSlug: "meta",
    channel: "social",
    region: "not-stated",
    date: "2026-11-04",
    sourceName: "Meta for Developers",
    sourceUrl: "https://developers.facebook.com/blog/post/2026/11/04/introducing-graph-api-v27-and-marketing-api-v27/",
  }),
  launch({
    slug: "amazon-uk-geographic-insights",
    title: "Amazon Ads opens UK geographic insights",
    bullets: [
      "Geographic Insights and Activation is available to UK advertisers, with a map of regional performance.",
      "Amazon also announced location-based interactive video ads on Prime Video, planned by the end of 2026.",
      "Prime Video was set to join Barb CFlight measurement in the UK.",
    ],
    platform: "Amazon Ads",
    platformSlug: "amazon-ads",
    channel: "ctv-video",
    region: "uk",
    countries: ["GB"],
    date: "2026-10-07",
    sourceName: "About Amazon UK",
    sourceUrl:
      "https://www.aboutamazon.co.uk/news/entertainment/the-2026-amazon-uk-upfront-brings-industry-standard-measurement-to-prime-video-and-local-relevance-to-national-campaigns",
  }),
  launch({
    slug: "microsoft-bing-ai-overview-ads",
    title: "Microsoft Advertising places ads in Bing AI Overviews",
    bullets: [
      "Ads can show beside Bing AI Overviews through campaigns you already run, including Performance Max and AI Max.",
      "Microsoft says this placement is available in all markets except China.",
      "No separate campaign type is required.",
    ],
    platform: "Microsoft Advertising",
    platformSlug: "microsoft-ads",
    channel: "search",
    region: "global",
    regionNote: "All markets except China.",
    date: "2026-11-19",
    sourceName: "Microsoft Advertising",
    sourceUrl:
      "https://about.ads.microsoft.com/en/blog/post/november-2026/put-ai-to-work-engaging-customers-in-more-places-whats-new-in-microsoft-advertising-this-november",
  }),
  launch({
    slug: "chatgpt-ads-expands-26-countries",
    title: "ChatGPT Ads expands to 26 more countries",
    bullets: [
      "OpenAI says ChatGPT Ads now reaches 89 countries after this 26-country expansion.",
      "Ads stay on Free and Go. Plus, Pro, and Enterprise stay ad-free.",
      "Buying is through technology partners or self-serve Ads Manager.",
    ],
    platform: "ChatGPT Ads",
    channel: "ai-ads",
    region: "multiple",
    regionNote: "OpenAI says 89 countries and names examples, not the full list.",
    date: "2026-10-21",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com/index/chatgpt-ads-expands-26-new-countries",
  }),
  launch({
    slug: "dv360-vertical-video",
    title: "DV360 introduces Vertical Video Unification",
    bullets: [
      "Display & Video 360 can buy and measure vertical video across publishers in one workflow.",
      "Google says Gemini powers buying, execution, and full-funnel measurement in this setup.",
      "The post does not name the countries included.",
    ],
    platform: "Display & Video 360",
    channel: "programmatic",
    region: "not-stated",
    date: "2026-09-28",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/marketingplatform/360/vertical-video-unification/",
  }),
  launch({
    slug: "pinterest-visual-search-ads",
    title: "Pinterest announces Visual Search Ads",
    bullets: [
      "The unit sits in search results and Pin closeups, and advertisers can bid for a top response.",
      "It supports lower-funnel objectives and works with Pinterest Performance+.",
      "Beta for eligible advertisers in all Pinterest ad markets. The post does not name those markets.",
    ],
    platform: "Pinterest",
    platformSlug: "pinterest",
    channel: "social",
    region: "multiple",
    regionNote: "All Pinterest ad markets. The list is not in the announcement.",
    date: "2026-09-17",
    sourceName: "Pinterest Newsroom",
    sourceUrl: "https://newsroom.pinterest.com/news/new-pinterest-visual-search-performance-ads/",
  }),
  launch({
    slug: "google-lsa-home-listings",
    title: "Google rolls Local Services home-listing ads across the US",
    bullets: [
      "Richer Local Services Ads for home listings reach all 50 U.S. states after a limited pilot.",
      "The ad can show price, images, and home features, via a HouseCanary data partnership.",
      "Buyers can call, message, or book an agent from the ad. Existing LSA agents are included automatically.",
    ],
    platform: "Google Ads",
    platformSlug: "google-ads",
    channel: "search",
    region: "us",
    date: "2026-06-11",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/ads-commerce/new-real-estate-ads-formats/",
  }),
  launch({
    slug: "youtube-demand-gen-may-2026",
    title: "YouTube adds Demand Gen creative, Maps, and checkout updates",
    bullets: [
      "Multimodal video creation in Asset Studio, plus a way to boost creator partnership videos inside Demand Gen setup.",
      "New Google Maps inventory, and checkout links expanding to nine markets the post does not name.",
      "Product feeds extend to more surfaces, including automotive.",
    ],
    platform: "YouTube",
    channel: "ctv-video",
    region: "not-stated",
    regionNote: "Nine new checkout-link markets are mentioned and not listed.",
    date: "2026-05-20",
    sourceName: "Google / YouTube",
    sourceUrl: "https://blog.google/products-and-platforms/products/youtube/youtube-demand-gen-updates/",
  }),
  launch({
    slug: "google-conversational-discovery-ads",
    title: "Google tests Conversational Discovery ads and Highlighted Answers",
    bullets: [
      "Both formats are tests inside AI Mode and stay labeled Sponsored.",
      "Each includes an explainer written by Gemini, separate from the advertiser’s creative.",
      "The post does not say which countries are in the test.",
    ],
    platform: "Google Ads",
    platformSlug: "google-ads",
    channel: "ai-ads",
    region: "not-stated",
    date: "2026-05-20",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/ads-commerce/google-marketing-live-search-ads/",
  }),
  launch({
    slug: "youtube-brandcast-2026",
    title: "YouTube Brandcast adds sponsorships, CTV checkout, and a new masthead",
    bullets: [
      "Custom Sponsorships use AI to surface videos around a moment the brand chooses.",
      "Masthead with Custom Content Shelf lets a brand curate extra videos next to the hero.",
      "Buy with Google Pay lets a viewer check out on the TV in two clicks. Affiliate Partnerships Boost amplifies organic videos that already tag the product.",
    ],
    platform: "YouTube",
    channel: "ctv-video",
    region: "not-stated",
    date: "2026-05-13",
    sourceName: "Google / YouTube",
    sourceUrl: "https://blog.google/products-and-platforms/products/youtube/youtube-brandcast-2026-advertiser-updates/",
  }),
  launch({
    slug: "openai-ads-manager-cpc",
    title: "OpenAI opens a beta Ads Manager and CPC bidding for ChatGPT",
    bullets: [
      "Advertisers can buy through partners or a beta self-serve Ads Manager.",
      "CPC bidding sits alongside the earlier CPM option. You pay when someone clicks.",
      "OpenAI says it has also launched a Conversions API and pixel measurement. Conversations are not shared.",
    ],
    platform: "ChatGPT Ads",
    channel: "ai-ads",
    region: "not-stated",
    date: "2026-05-05",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com/index/new-ways-to-buy-chatgpt-ads/",
  }),
  launch({
    slug: "google-ai-max-for-shopping",
    title: "Google launches AI Max for Shopping campaigns",
    bullets: [
      "One-click upgrade for existing Shopping campaigns, using the Merchant Center feed.",
      "Adds text customization, final URL expansion, and automatic choice between text and Shopping formats.",
      "Final URL expansion can be turned off so delivery stays on Shopping ads.",
    ],
    platform: "Google Ads",
    platformSlug: "google-ads",
    channel: "search",
    region: "not-stated",
    date: "2026-04-30",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/ads-commerce/ai-max-for-shopping/",
  }),
  launch({
    slug: "microsoft-ai-max-offer-highlights",
    title: "Microsoft Advertising opens AI Max and Offer Highlights",
    bullets: [
      "AI Max for Search is an open pilot from May 2026: broader query matching, asset personalization, and URL routing.",
      "Offer Highlights promote a product difference, such as free shipping, inside Copilot. Retail, English-speaking markets.",
      "Audience generation, a prompt-to-audience tool, is a closed pilot in the US and Canada.",
    ],
    platform: "Microsoft Advertising",
    platformSlug: "microsoft-ads",
    channel: "search",
    region: "multiple",
    regionNote: "Offer Highlights: English-speaking markets. Audience generation: US and Canada.",
    date: "2026-04-21",
    sourceName: "Microsoft Advertising",
    sourceUrl: "https://about.ads.microsoft.com/en/blog/post/april-2026/win-across-all-three-eras-of-the-web",
  }),
  launch({
    slug: "tiktok-newfronts-high-impact-formats",
    title: "TikTok launches Logo Takeover, Prime Time, and TopReach",
    bullets: [
      "Logo Takeover brands the moment someone opens the app.",
      "Prime Time can serve up to three sequential ads from one advertiser to the same person inside 15 minutes.",
      "TopReach packages TopView and TopFeed as one buy aimed at a single day’s reach.",
    ],
    platform: "TikTok",
    platformSlug: "tiktok",
    channel: "social",
    region: "us",
    regionNote: "US-framed NewFronts post. A wider country list is not included.",
    date: "2026-03-24",
    sourceName: "TikTok Newsroom",
    sourceUrl: "https://newsroom.tiktok.com/newfronts-26-tiktok-unveils-new-high-impact-ad-solutions?lang=en",
  }),
  launch({
    slug: "youtube-vrc-non-skip",
    title: "YouTube VRC non-skip ads reach general availability",
    bullets: [
      "Generally available globally in Google Ads and Display & Video 360.",
      "Built for CTV. Google AI chooses among 6-second bumpers, 15-second ads, and 30-second CTV-only non-skips.",
      "The point of the format is that the message plays through.",
    ],
    platform: "YouTube",
    channel: "ctv-video",
    region: "global",
    date: "2026-03-02",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/ads-commerce/vrc-non-skip-ads-generally-available/",
  }),
  launch({
    slug: "tiktok-europe-streaming-ads",
    title: "TikTok brings Streaming Ads and New Title Launch to Europe",
    bullets: [
      "Two performance formats for entertainment advertisers, announced in Europe around the Berlinale.",
      "Streaming Ads run on Smart+. Creative options include a four-title video carousel and a media card.",
      "New Title Launch is aimed at premieres, subscriptions, and ticket sales.",
    ],
    platform: "TikTok",
    platformSlug: "tiktok",
    channel: "social",
    region: "eu",
    date: "2026-02-12",
    sourceName: "TikTok Newsroom",
    sourceUrl: "https://newsroom.tiktok.com/tiktok-feiert-die-liebe-zum-film-zur-berlinale-2026?lang=de-DE",
  }),
  launch({
    slug: "chatgpt-ads-us-test",
    title: "OpenAI starts testing ads in ChatGPT in the US",
    bullets: [
      "Logged-in adults on Free and Go in the United States. Plus, Pro, Business, Enterprise, and Education do not get ads.",
      "Ads are labeled, separated from the answer, and do not change the answer.",
      "Advertisers receive aggregate results, not the chat. Ads are kept off accounts believed to be under 18.",
    ],
    platform: "ChatGPT Ads",
    channel: "ai-ads",
    region: "us",
    date: "2026-02-09",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com/index/testing-ads-in-chatgpt/",
  }),
  launch({
    slug: "meta-threads-ads-all-markets",
    title: "Meta expands Threads ads to users in all markets",
    bullets: [
      "Image, video, and carousel ads run in the Threads feed.",
      "Threads can be added as a placement on Advantage+ and on manual campaigns.",
      "Meta said user delivery would begin the week after this announcement.",
    ],
    platform: "Meta",
    platformSlug: "meta",
    channel: "social",
    region: "global",
    date: "2026-01-21",
    sourceName: "Meta for Business",
    sourceUrl: "https://www.facebook.com/business/news/ads-on-threads-one-year-in",
  }),
  launch({
    slug: "reddit-max-campaigns-beta",
    title: "Reddit opens Max campaigns in beta",
    bullets: [
      "Max automates targeting, creative, placements, and budget for traffic and conversion objectives.",
      "Create one by choosing Traffic or Conversions in Advanced Create.",
      "The beta opened to select advertisers. The post does not name countries.",
    ],
    platform: "Reddit",
    platformSlug: "reddit",
    channel: "social",
    region: "not-stated",
    date: "2026-01-05",
    sourceName: "Reddit, Inc.",
    sourceUrl:
      "https://redditinc.com/news/now-in-beta-max-campaigns-for-ai-powered-ad-performance-and-unique-audience-insights",
  }),
  launch({
    slug: "amazon-sponsored-products-video",
    title: "Amazon Ads launches Sponsored Products video in the US",
    bullets: [
      "Advertisers upload 1–5 feature videos per product, with a short description for each.",
      "Shoppers can see up to three thumbnails picked from the query and browsing history.",
      "Available in the United States, inside existing Sponsored Products campaigns.",
    ],
    platform: "Amazon Ads",
    platformSlug: "amazon-ads",
    channel: "retail-media",
    region: "us",
    regionNote: "Announced at unBoxed 2025. Dated 11 Nov 2025 by AdExchanger’s report from the show.",
    date: "2025-11-11",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/resources/whats-new/unboxed-2025-sponsored-products-video",
  }),
  launch({
    slug: "amazon-sponsored-brands-rsov",
    title: "Amazon Ads launches Sponsored Brands reserve share of voice",
    bullets: [
      "Brands can reserve top-of-search on branded keywords at a fixed price, in self-serve.",
      "Creative can be video, a logo, headlines, Brand Store links, or collections.",
      "Amazon’s write-up of the early pilots is US data.",
    ],
    platform: "Amazon Ads",
    platformSlug: "amazon-ads",
    channel: "retail-media",
    region: "us",
    date: "2025-11-11",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/library/news/unboxed-2025-sponsored-brands-reserve-share-of-voice",
  }),
  launch({
    slug: "amazon-ads-prompts",
    title: "Amazon adds Sponsored Products and Brands prompts",
    bullets: [
      "Prompts on search results and product pages can open a Rufus dialog or answer on the page.",
      "Existing Sponsored Products and Sponsored Brands campaigns in the US are enrolled. Authors and publishers are excluded.",
      "Introduced as an open beta in November 2025. The page does not give a day.",
    ],
    platform: "Amazon Ads",
    platformSlug: "amazon-ads",
    channel: "retail-media",
    region: "us",
    date: "2025-11-01",
    datePrecision: "month",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/resources/whats-new/unboxed-2025-sponsored-products-and-sponsored-brands-prompts",
  }),
  launch({
    slug: "pinterest-top-of-search",
    title: "Pinterest previews Top of Search ads",
    bullets: [
      "Beta across all monetised markets. Ads sit in the top ten search results and in Related Pins.",
      "Catalogues can appear in a brand-exclusive unit.",
      "The same summit post says local inventory ads are available in shopping markets.",
    ],
    platform: "Pinterest",
    platformSlug: "pinterest",
    channel: "social",
    region: "multiple",
    regionNote: "All monetised markets. Not listed by name.",
    date: "2025-09-25",
    sourceName: "Pinterest Newsroom",
    sourceUrl: "https://newsroom.pinterest.com/en-au/news/pinterest-introduces-top-of-search-ads-and-new-advertising-tools/",
  }),
  launch({
    slug: "pinterest-where-to-buy",
    title: "Pinterest adds where-to-buy links for CPG ads",
    bullets: [
      "Image and video ads can show several in-stock retailers for one product.",
      "Built with Pear Commerce, native in Ads Manager, and with MikMak for brands that already use it.",
      "Coming to all US and Canada advertisers in the weeks after the announcement.",
    ],
    platform: "Pinterest",
    platformSlug: "pinterest",
    channel: "retail-media",
    region: "north-america",
    regionNote: "United States and Canada.",
    date: "2025-09-10",
    sourceName: "Pinterest Newsroom",
    sourceUrl: "https://newsroom.pinterest.com/news/where-to-buy-links-turn-inspiration-into-action-for-cpg-brands-on-pinterest/",
  }),
  launch({
    slug: "linkedin-first-impression-and-ctv",
    title: "LinkedIn introduces First Impression Ads and opens CTV in the US and Canada",
    bullets: [
      "First Impression Ads are full-screen vertical video reserved as the first ad a member sees that day.",
      "Reserved Ads can put Sponsored Content in the first slot of the feed.",
      "CTV ads are generally available for targeting buyers in the US and Canada.",
    ],
    platform: "LinkedIn",
    platformSlug: "linkedin",
    channel: "social",
    region: "north-america",
    regionNote: "CTV: US and Canada. First Impression country list is not in the post.",
    date: "2025-06-03",
    sourceName: "LinkedIn News",
    sourceUrl: "https://news.linkedin.com/2025/lms-introduces-new-ad-formats-and-more-collaborations",
  }),
  launch({
    slug: "tiktok-search-center",
    title: "TikTok announces Search Center and Brand Consideration ads",
    bullets: [
      "Search Center is an AI workspace in Ads Manager for keyword ideas, measurement, and creative.",
      "Brand Consideration is a mid-funnel buy meant to move people from awareness to consideration.",
      "The summit post does not publish a country list.",
    ],
    platform: "TikTok",
    platformSlug: "tiktok",
    channel: "search",
    region: "not-stated",
    date: "2025-06-03",
    sourceName: "TikTok Newsroom",
    sourceUrl: "https://newsroom.tiktok.com/tiktok-world-2025?lang=en",
  }),
  launch({
    slug: "reddit-dynamic-product-ads",
    title: "Reddit Dynamic Product Ads reach general availability",
    bullets: [
      "DPA matches catalog products to people using on-platform and off-platform shopping signals.",
      "Available in Reddit Ads Manager. Catalogs can run to millions of products.",
      "A Smartly integration for planning DPA was in beta at the same time.",
    ],
    platform: "Reddit",
    platformSlug: "reddit",
    channel: "social",
    region: "not-stated",
    date: "2025-05-22",
    sourceName: "Reddit for Business",
    sourceUrl: "https://www.business.reddit.com/blog/dynamic-product-ads-launch",
  }),
  launch({
    slug: "google-marketing-live-2025-ai-ads",
    title: "Google expands ads in AI Overviews and tests ads in AI Mode",
    bullets: [
      "Ads in AI Overviews were expanding, in English, in select countries, on desktop and mobile.",
      "Ads in AI Mode were a test in English in the US.",
      "Peak Points, a YouTube format, was available in English in the US, UK, Canada, and Australia.",
    ],
    platform: "Google Ads",
    platformSlug: "google-ads",
    channel: "ai-ads",
    region: "multiple",
    countries: ["US", "GB", "CA", "AU"],
    regionNote: "Named in the post: AI Mode in the US. Peak Points in the US, UK, Canada, and Australia. AI Overviews: select countries, not fully listed.",
    date: "2025-05-21",
    sourceName: "Google Ads Help",
    sourceUrl: "https://support.google.com/google-ads/answer/16290177?hl=en",
  }),
  launch({
    slug: "meta-newfronts-reels-trending",
    title: "Meta tests Reels trending ads and a single-partner ad header",
    bullets: [
      "Reels trending ads were a test that places an ad after popular creator Reels, including topical lineups.",
      "Partnership ads can feature one partner in the header on Facebook and Instagram.",
      "Meta also described Facebook Live partnership ads at the same NewFronts.",
    ],
    platform: "Meta",
    platformSlug: "meta",
    channel: "social",
    region: "not-stated",
    date: "2025-05-08",
    sourceName: "Meta for Business",
    sourceUrl: "https://www.facebook.com/business/news/meta-at-iab-newfronts-2025",
  }),
  launch({
    slug: "google-ai-max-for-search",
    title: "Google introduces AI Max for Search campaigns",
    bullets: [
      "A one-click suite on Search: broader query matching, text customization, and final URL expansion.",
      "Controls include brand lists, locations of interest, asset removal, and URL controls.",
      "Google said the beta would reach all advertisers globally later in May 2025.",
    ],
    platform: "Google Ads",
    platformSlug: "google-ads",
    channel: "search",
    region: "global",
    date: "2025-05-06",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/ads-commerce/google-ai-max-for-search-campaigns/",
  }),
  launch({
    slug: "dv360-newfront-2025",
    title: "DV360 adds live CTV inventory and a commerce media offer",
    bullets: [
      "Live CTV inventory, including NFL Sunday Ticket on YouTube, plus a one-click curated CTV auction.",
      "New direct integrations called out include Tubi, Spotify, and Roblox video.",
      "A commerce and retail-media solution in DV360 was announced, with YouTube access to follow later that summer.",
    ],
    platform: "Display & Video 360",
    channel: "programmatic",
    region: "not-stated",
    regionNote: "The post cites US watch time and an expanded Netflix partnership in EMEA. It is not a single-country launch.",
    date: "2025-05-05",
    sourceName: "Google",
    sourceUrl: "https://blog.google/products/marketingplatform/360/google-newfront-rethink-ctv-beyond-streaming-with-display-video-360/",
  }),
];

function photo(file: string, alt: string, credit: string, licence: string, sourceUrl: string): LaunchImage {
  return { src: `/photos/${file}`, alt, credit, licence, sourceUrl };
}

const photos: Record<string, LaunchImage> = {
  phone: photo(
    "phone.jpg",
    "A person holding a smartphone outdoors",
    "Jonatan Svensson Glad",
    "CC BY-SA 4.0",
    "https://commons.wikimedia.org/wiki/File:Girl_Holding_a_Smartphone.jpg",
  ),
  tv: photo(
    "tv.jpg",
    "A flat-screen television in a room",
    "Evan Prodromou",
    "CC BY-SA 4.0",
    "https://commons.wikimedia.org/wiki/File:A_flat-screen_television.jpg",
  ),
  city: photo(
    "city.jpg",
    "New York City at night",
    "Paulo Barcellos Jr.",
    "CC BY-SA 2.0",
    "https://commons.wikimedia.org/wiki/File:New_York_City_at_night_HDR.jpg",
  ),
  shoppers: photo(
    "shoppers.jpg",
    "Shoppers inside a supermarket",
    "Jason Zhang",
    "CC BY-SA 3.0",
    "https://commons.wikimedia.org/wiki/File:Kai_Wei_Supermarket_shoppers,_December_2018.jpg",
  ),
  laptop: photo(
    "laptop.jpg",
    "A person working on a laptop at a desk",
    "Robert Durec",
    "CC BY 4.0",
    "https://commons.wikimedia.org/wiki/File:Robert_Durec_portrait_working_on_laptop_in_studio.jpg",
  ),
};

const photoForSlug: Record<string, LaunchImage> = {
  "meta-threads-ads-all-markets": photos.phone,
  "tiktok-newfronts-high-impact-formats": photos.phone,
  "pinterest-visual-search-ads": photos.phone,
  "meta-newfronts-reels-trending": photos.phone,
  "reddit-max-campaigns-beta": photos.phone,
  "tiktok-europe-streaming-ads": photos.phone,
  "meta-product-showcase-default": photos.phone,
  "youtube-vrc-non-skip": photos.tv,
  "youtube-brandcast-2026": photos.tv,
  "youtube-demand-gen-may-2026": photos.tv,
  "amazon-uk-geographic-insights": photos.tv,
  "dv360-vertical-video": photos.city,
  "dv360-newfront-2025": photos.city,
  "dv360-spotify-audiences": photos.city,
  "dv360-pinterest-inventory": photos.city,
  "amazon-sponsored-products-video": photos.shoppers,
  "pinterest-where-to-buy": photos.shoppers,
  "amazon-ads-prompts": photos.shoppers,
  "dv360-loblaw-canada": photos.shoppers,
  "google-ai-max-for-search": photos.laptop,
  "google-ai-max-for-shopping": photos.laptop,
  "microsoft-bing-ai-overview-ads": photos.laptop,
  "google-lsa-home-listings": photos.laptop,
};

for (const update of updates) {
  const assigned = photoForSlug[update.slug];
  if (assigned) update.image = assigned;
}

export type LaunchUpdate = Launch;

export function getUpdate(slug: string) {
  return updates.find((update) => update.slug === slug);
}

export function updatesByDate() {
  return [...updates].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
}

export function launchDek(update: Launch) {
  return update.bullets[0] ?? update.title;
}

export function launchPlatforms() {
  return Array.from(new Set(updates.map((update) => update.platform))).sort((a, b) => a.localeCompare(b));
}

export function launchYears() {
  return Array.from(new Set(updates.map((update) => update.date.slice(0, 4)))).sort((a, b) => (a < b ? 1 : -1));
}

export function formatLaunchDate(update: Pick<Launch, "date" | "datePrecision">) {
  const parsed = new Date(`${update.date}T00:00:00Z`);
  if (update.datePrecision === "month") {
    return new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(parsed);
  }
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

export function channelName(id: string) {
  return channelLabel(id);
}

export function regionName(id: string) {
  return regionLabel(id);
}
