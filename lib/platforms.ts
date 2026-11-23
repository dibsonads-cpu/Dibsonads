export type CitedFact = {
  label: string;
  value: string;
  known: boolean;
  sourceUrl?: string;
  sourceLabel?: string;
};

export type AdFormat = {
  name: string;
  summary: string;
  known: boolean;
  sourceUrl?: string;
  sourceLabel?: string;
};

export type AdPlatform = {
  slug: string;
  name: string;
  summary: string;
  officialUrl: string;
  featured: boolean;
  sponsored: boolean;
  formats: AdFormat[];
  specs: CitedFact[];
  minimumBudget: CitedFact;
  regions: CitedFact;
  sources: { label: string; url: string }[];
  reviewed: string;
};

const metaImage =
  "https://www.facebook.com/business/ads-guide/update/image/facebook-feed";
const metaCarousel =
  "https://www.facebook.com/business/ads-guide/update/carousel/facebook-feed";
const metaBudget = "https://developers.facebook.com/docs/marketing-api/reference/minimum-budget/";
const googleRsa = "https://support.google.com/google-ads/answer/7684791?hl=en";
const googleBudget = "https://support.google.com/google-ads/answer/10486536?hl=en";
const googleCountries = "https://support.google.com/google-ads/answer/6163740?hl=en";
const tiktokBudget = "https://ads.tiktok.com/help/article/budget?lang=en";
const tiktokSpecs = "https://ads.tiktok.com/help/article/video-ads-specifications?lang=en";
const amazonCost =
  "https://advertising.amazon.com/library/guides/basics-of-success-understanding-amazon-advertising";
const amazonBudget =
  "https://advertising.amazon.com/library/guides/sponsored-products-budget-best-practices";
const amazonGlobal = "https://advertising.amazon.com/library/guides/global-advertising";
const pinterestSpecs = "https://help.pinterest.com/en/business/article/pinterest-product-specs";
const linkedinBudget = "https://business.linkedin.com/advertise/ads/best-practices/maximize-your-budget";
const linkedinNews = "https://news.linkedin.com/2025/lms-introduces-new-ad-formats-and-more-collaborations";
const snapFormats = "https://forbusiness.snapchat.com/advertising/ad-formats";
const snapSpecs = "https://businesshelp.snapchat.com/s/article/top-snap-specs?language=en_US";
const snapPricing = "https://forbusiness.snapchat.com/advertising/pricing";
const redditUnits = "https://business.reddithelp.com/articles/Knowledge/Reddit-Ad-Unit-Specifications";
const redditImage = "https://business.reddithelp.com/articles/Knowledge/image-ad-specifications";
const microsoftBlog =
  "https://about.ads.microsoft.com/en/blog/post/november-2026/put-ai-to-work-engaging-customers-in-more-places-whats-new-in-microsoft-advertising-this-november";
const ttdAbout = "https://www.thetradedesk.com/";

export const platforms: AdPlatform[] = [
  {
    slug: "meta",
    name: "Meta",
    summary:
      "Auction ads across Facebook, Instagram, Messenger, Threads, and Audience Network. Specs below are the Facebook Feed figures Meta publishes in its Ads Guide. Other placements have their own sheets.",
    officialUrl: "https://www.facebook.com/business/ads-guide",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Image",
        summary:
          "Facebook Feed image ads: JPG or PNG, recommended 4:5 at 1440 × 1800, primary text 50–150 characters, headline about 27 characters.",
        known: true,
        sourceUrl: metaImage,
        sourceLabel: "Meta Ads Guide, Facebook Feed image",
      },
      {
        name: "Carousel",
        summary:
          "Facebook Feed carousel: 2 to 10 cards, 1:1 images at least 1080 × 1080, JPG or PNG. Video cards accept MP4, MOV, or GIF.",
        known: true,
        sourceUrl: metaCarousel,
        sourceLabel: "Meta Ads Guide, Facebook Feed carousel",
      },
      {
        name: "Video, Stories, Reels, Collection, Threads",
        summary:
          "These placements exist in Meta’s buying system. Pixel-level specs differ by placement and objective. This page does not copy numbers we did not re-read in the Ads Guide, so treat those sheets as the source before you export.",
        known: false,
        sourceUrl: "https://www.facebook.com/business/ads-guide",
        sourceLabel: "Meta Ads Guide",
      },
    ],
    specs: [
      {
        label: "Feed image file",
        value: "JPG or PNG. Maximum file size 30 MB. Minimum width 600 px. For 4:5, minimum height 750 px. Aspect-ratio tolerance 3%.",
        known: true,
        sourceUrl: metaImage,
        sourceLabel: "Meta Ads Guide",
      },
      {
        label: "Feed image recommendation",
        value: "4:5 at 1440 × 1800 pixels.",
        known: true,
        sourceUrl: metaImage,
        sourceLabel: "Meta Ads Guide",
      },
      {
        label: "Reels and Stories export",
        value: "Unknown on this page. Open the placement in Meta’s Ads Guide before you lock a cut.",
        known: false,
        sourceUrl: "https://www.facebook.com/business/ads-guide",
        sourceLabel: "Meta Ads Guide",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value:
        "Unknown as a single number. Meta’s Marketing API returns a minimum daily budget per ad set that changes with currency and optimization: impressions, high-frequency actions such as clicks, low-frequency actions such as app installs, and video views.",
      known: false,
      sourceUrl: metaBudget,
      sourceLabel: "Meta Marketing API, minimum budget",
    },
    regions: {
      label: "Countries",
      value:
        "Unknown as a printed list. Threads ads were expanded to users in all markets in January 2026, but Meta’s Ads Guide does not publish one static country table for every Facebook and Instagram placement. Ads Manager shows what your account can target.",
      known: false,
      sourceUrl: "https://www.facebook.com/business/news/ads-on-threads-one-year-in",
      sourceLabel: "Meta for Business, Threads ads",
    },
    sources: [
      { label: "Meta Ads Guide", url: "https://www.facebook.com/business/ads-guide" },
      { label: "Facebook Feed image specs", url: metaImage },
      { label: "Facebook Feed carousel specs", url: metaCarousel },
      { label: "Marketing API minimum budget", url: metaBudget },
    ],
    reviewed: "2026-11-23",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    summary:
      "Search, Shopping, YouTube, Display, Demand Gen, App, and Performance Max, plus newer AI controls such as AI Max for Search. The character counts below are for responsive search ads.",
    officialUrl: "https://ads.google.com/",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Responsive search ads",
        summary:
          "Up to 15 headlines (minimum 3) at 30 characters, and up to 4 descriptions (minimum 2) at 90 characters. Each path field is 15 characters. Double-width languages count each character as two.",
        known: true,
        sourceUrl: googleRsa,
        sourceLabel: "Google Ads Help, responsive search ads",
      },
      {
        name: "Performance Max, Demand Gen, Shopping, Display, YouTube, App",
        summary:
          "These are separate campaign types with their own asset rules. This page does not restate YouTube or Display pixel specs.",
        known: false,
        sourceUrl: "https://support.google.com/google-ads",
        sourceLabel: "Google Ads Help",
      },
      {
        name: "AI Max for Search",
        summary:
          "A feature suite on Search campaigns, not a new file format: search term matching, text customization, and final URL expansion. Announced 6 May 2025 as a global beta.",
        known: true,
        sourceUrl: "https://blog.google/products/ads-commerce/google-ai-max-for-search-campaigns/",
        sourceLabel: "Google blog",
      },
    ],
    specs: [
      {
        label: "RSA headlines",
        value: "Minimum 3, maximum 15. 30 characters each.",
        known: true,
        sourceUrl: googleRsa,
        sourceLabel: "Google Ads Help",
      },
      {
        label: "RSA descriptions",
        value: "Minimum 2, maximum 4. 90 characters each.",
        known: true,
        sourceUrl: googleRsa,
        sourceLabel: "Google Ads Help",
      },
      {
        label: "YouTube and Display files",
        value: "Unknown on this page. Use the format guide for the campaign type you are building.",
        known: false,
        sourceUrl: "https://support.google.com/google-ads",
        sourceLabel: "Google Ads Help",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value:
        "Google does not publish a minimum average daily budget. You choose the average. For most campaigns the daily spending limit is twice that average, and the monthly spending limit is the average multiplied by 30.4.",
      known: true,
      sourceUrl: googleBudget,
      sourceLabel: "Google Ads Help, budgets",
    },
    regions: {
      label: "Countries",
      value:
        "Google Ads is not available to advertisers in Crimea, Cuba, the so-called Donetsk People’s Republic, Iran, the so-called Luhansk People’s Republic, or North Korea. Those locations also cannot be targeted. A campaign set to all countries still needs those territories excluded if you want to avoid them explicitly.",
      known: true,
      sourceUrl: googleCountries,
      sourceLabel: "Google Ads Help, country restrictions",
    },
    sources: [
      { label: "Responsive search ads", url: googleRsa },
      { label: "Budgets overview", url: googleBudget },
      { label: "Country restrictions", url: googleCountries },
    ],
    reviewed: "2026-11-23",
  },
  {
    slug: "tiktok",
    name: "TikTok",
    summary:
      "In-feed auction ads (Spark and non-Spark), plus reserved high-impact units such as TopView, TopFeed, Logo Takeover, and Prime Time. File rules below are TikTok’s June 2026 in-feed spec.",
    officialUrl: "https://ads.tiktok.com/",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Non-Spark in-feed",
        summary:
          "Vertical 9:16 at 540 × 960 or larger is recommended. Horizontal 16:9 from 960 × 540 and square 1:1 from 640 × 640 are accepted. Up to 10 minutes, 500 MB or less, bitrate at least 516 kbps. Files: mp4, mov, mpeg, 3gp, avi. Captions cannot include links, @ mentions, or hashtags.",
        known: true,
        sourceUrl: tiktokSpecs,
        sourceLabel: "TikTok Ads Manager, in-feed specs",
      },
      {
        name: "Spark Ads",
        summary:
          "Creative is pulled from an organic post. Captions come from the video, up to 4 lines. Video file types listed: mp4 or mov. Duration: no restriction on the spec page.",
        known: true,
        sourceUrl: tiktokSpecs,
        sourceLabel: "TikTok Ads Manager, in-feed specs",
      },
      {
        name: "Logo Takeover, Prime Time, TopReach",
        summary:
          "Announced at NewFronts on 24 March 2026. File specs for these reserved units are not in that newsroom post, so they are unknown here.",
        known: false,
        sourceUrl:
          "https://newsroom.tiktok.com/newfronts-26-tiktok-unveils-new-high-impact-ad-solutions?lang=en",
        sourceLabel: "TikTok Newsroom",
      },
    ],
    specs: [
      {
        label: "Recommended in-feed ratio",
        value: "9:16, at least 540 × 960 px.",
        known: true,
        sourceUrl: tiktokSpecs,
        sourceLabel: "TikTok Ads Manager",
      },
      {
        label: "Account name",
        value: "One line. Maximum 20 characters, or 10 for Chinese, Japanese, and Korean.",
        known: true,
        sourceUrl: tiktokSpecs,
        sourceLabel: "TikTok Ads Manager",
      },
      {
        label: "Reserved-format files",
        value: "Unknown. The NewFronts post describes the buys and does not publish a spec sheet.",
        known: false,
        sourceUrl:
          "https://newsroom.tiktok.com/newfronts-26-tiktok-unveils-new-high-impact-ad-solutions?lang=en",
        sourceLabel: "TikTok Newsroom",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value:
        "Daily: campaign budget must exceed $50 and ad group budget must exceed $20. Lifetime ad group budget must be at least the number of days times the minimum daily budget (TikTok’s example: 31 days × $20 = $620). You cannot switch budget type after launch. The help page writes these as dollar amounts and does not name the currency.",
      known: true,
      sourceUrl: tiktokBudget,
      sourceLabel: "TikTok Ads Manager, budgets (updated July 2026)",
    },
    regions: {
      label: "Countries",
      value:
        "Unknown as a full list. TikTok sells ads in many markets, and the budget article does not enumerate them. Confirm the country in Ads Manager before you promise a launch market.",
      known: false,
      sourceUrl: tiktokBudget,
      sourceLabel: "TikTok Ads Manager",
    },
    sources: [
      { label: "In-feed specifications", url: tiktokSpecs },
      { label: "About budgets", url: tiktokBudget },
    ],
    reviewed: "2026-11-23",
  },
  {
    slug: "amazon-ads",
    name: "Amazon Ads",
    summary:
      "Sponsored ads on Amazon — Sponsored Products, Sponsored Brands, and Sponsored Display — plus Amazon DSP for off-search and streaming inventory. Budget notes below are from Amazon’s own sponsored-ads guides.",
    officialUrl: "https://advertising.amazon.com/",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Sponsored Products",
        summary:
          "Cost-per-click ads for individual products in search results and on product pages, on desktop, mobile web, and the Amazon app. Amazon also describes a Sponsored Products video. You set a daily budget.",
        known: true,
        sourceUrl: "https://advertising.amazon.com/solutions/products/sponsored-products",
        sourceLabel: "Amazon Ads, Sponsored Products",
      },
      {
        name: "Sponsored Brands",
        summary:
          "Amazon says you can set a daily budget and a campaign-level budget. Campaign-level budgets can be increased but not decreased, so Amazon suggests a daily budget if you may need to lower spend.",
        known: true,
        sourceUrl: amazonCost,
        sourceLabel: "Amazon Ads, understanding Amazon advertising",
      },
      {
        name: "Sponsored Display and Amazon DSP",
        summary:
          "Sponsored Display is named alongside Sponsored Products as a daily-budget product. Amazon DSP is a separate programmatic buy. Creative pixel specs for DSP line items are not copied here.",
        known: false,
        sourceUrl: amazonCost,
        sourceLabel: "Amazon Ads",
      },
    ],
    specs: [
      {
        label: "Sponsored Products billing",
        value: "Cost per click. You choose the bid and are not charged more than that bid.",
        known: true,
        sourceUrl: amazonCost,
        sourceLabel: "Amazon Ads",
      },
      {
        label: "Image and video pixel specs",
        value: "Unknown on this page. Amazon’s product pages linked here describe where ads serve, not a full file-spec table.",
        known: false,
        sourceUrl: amazonCost,
        sourceLabel: "Amazon Ads",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value:
        "Amazon says there is no minimum spend requirement for sponsored ads, and that you can test starting as low as $10. A separate Sponsored Products budget guide recommends at least $10, or the local equivalent, for many advertisers so ads can keep serving. That $10 figure is a recommendation, not a published hard floor.",
      known: true,
      sourceUrl: amazonCost,
      sourceLabel: "Amazon Ads cost guide and budget guide",
    },
    regions: {
      label: "Countries",
      value:
        "Amazon says it operates 23 online stores and that registering for ads in one country lets you advertise in the stores where you sell. The guide does not print the 23 store names, so this page does not invent the list.",
      known: false,
      sourceUrl: amazonGlobal,
      sourceLabel: "Amazon Ads, global advertising",
    },
    sources: [
      { label: "Understanding Amazon advertising", url: amazonCost },
      { label: "Sponsored Products budgets", url: amazonBudget },
      { label: "Global advertising", url: amazonGlobal },
    ],
    reviewed: "2026-11-23",
  },
  {
    slug: "pinterest",
    name: "Pinterest",
    summary:
      "Image, video, and shopping ads in a visual feed, plus newer search units such as Visual Search Ads. Specs below are from Pinterest’s product-spec article.",
    officialUrl: "https://business.pinterest.com/",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Standard image",
        summary:
          "PNG or JPEG. Pinterest recommends 2:3, or 1000 × 1500 pixels. Max file size 20 MB on desktop and 32 MB in app. Title up to 100 characters. Description up to 800 characters.",
        known: true,
        sourceUrl: pinterestSpecs,
        sourceLabel: "Pinterest Business help, ad specs",
      },
      {
        name: "Standard-width video",
        summary:
          "MP4, MOV, or M4V, H.264 or H.265, up to 2 GB. Length from 4 seconds to 15 minutes. Recommended length 6 to 15 seconds. Recommended ratios: 1:1 or vertical 2:3, 4:5, or 9:16.",
        known: true,
        sourceUrl: pinterestSpecs,
        sourceLabel: "Pinterest Business help, ad specs",
      },
      {
        name: "Max-width video",
        summary:
          "Paid-only video that spans the mobile feed. It cannot be taller than a 1:1 frame. Same file types and duration bounds as standard-width video.",
        known: true,
        sourceUrl: pinterestSpecs,
        sourceLabel: "Pinterest Business help, ad specs",
      },
      {
        name: "Visual Search Ads",
        summary:
          "Announced 17 September 2026 as a beta for eligible advertisers. The newsroom post does not include pixel specs.",
        known: false,
        sourceUrl: "https://newsroom.pinterest.com/news/new-pinterest-visual-search-performance-ads/",
        sourceLabel: "Pinterest Newsroom",
      },
    ],
    specs: [
      {
        label: "Standard image",
        value: "Recommended 1000 × 1500 (2:3). Pins taller than 2:3 can be cut off in the feed.",
        known: true,
        sourceUrl: pinterestSpecs,
        sourceLabel: "Pinterest Business help",
      },
      {
        label: "Title and description",
        value: "Title up to 100 characters (about 40 may show in feed). Description up to 800 characters and is used for relevance.",
        known: true,
        sourceUrl: pinterestSpecs,
        sourceLabel: "Pinterest Business help",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value:
        "Unknown. Pinterest’s spec article explains creative limits and does not publish a minimum daily or lifetime budget.",
      known: false,
      sourceUrl: pinterestSpecs,
      sourceLabel: "Pinterest Business help",
    },
    regions: {
      label: "Countries",
      value:
        "Unknown as a name-by-name list. Pinterest refers to “all Pinterest ad markets” in the Visual Search Ads announcement without listing them.",
      known: false,
      sourceUrl: "https://newsroom.pinterest.com/news/new-pinterest-visual-search-performance-ads/",
      sourceLabel: "Pinterest Newsroom",
    },
    sources: [
      { label: "Ad specs", url: pinterestSpecs },
      { label: "Visual Search Ads announcement", url: "https://newsroom.pinterest.com/news/new-pinterest-visual-search-performance-ads/" },
    ],
    reviewed: "2026-11-23",
  },
  {
    slug: "linkedin",
    name: "LinkedIn",
    summary:
      "Sponsored Content, Message and Conversation ads, text and dynamic ads, plus newer reserved video and CTV. The budget floor below is LinkedIn’s published minimum. Pixel specs were not re-copied from Campaign Manager.",
    officialUrl: "https://business.linkedin.com/advertise",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "First Impression Ads",
        summary:
          "Full-screen vertical video for a single day, reserving the first ad impression a member sees. Announced 3 June 2025.",
        known: true,
        sourceUrl: linkedinNews,
        sourceLabel: "LinkedIn News",
      },
      {
        name: "Reserved Ads",
        summary:
          "Puts Sponsored Content — Thought Leader Ads, Single Image Ads, or Document Ads — in the first ad slot of the feed.",
        known: true,
        sourceUrl: linkedinNews,
        sourceLabel: "LinkedIn News",
      },
      {
        name: "CTV ads",
        summary: "Generally available to target buyers in the US and Canada, per the 3 June 2025 announcement.",
        known: true,
        sourceUrl: linkedinNews,
        sourceLabel: "LinkedIn News",
      },
      {
        name: "Single image file spec",
        summary: "Unknown on this page. LinkedIn’s news post names the format and does not publish pixel dimensions.",
        known: false,
        sourceUrl: linkedinNews,
        sourceLabel: "LinkedIn News",
      },
    ],
    specs: [
      {
        label: "First Impression creative",
        value: "Described as full-screen vertical video. Exact resolution, length, and file size are not in the announcement.",
        known: false,
        sourceUrl: linkedinNews,
        sourceLabel: "LinkedIn News",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value:
        "LinkedIn says the minimum daily budget is $10 for any ad format. The minimum lifetime budget for a new, inactive campaign is $100. After launch, the lifetime minimum becomes $10 times the number of scheduled days. The page states these as dollar amounts.",
      known: true,
      sourceUrl: linkedinBudget,
      sourceLabel: "LinkedIn Marketing Solutions",
    },
    regions: {
      label: "Countries",
      value:
        "CTV ads: US and Canada, as stated in the June 2025 post. A complete country list for Sponsored Content is not in the sources checked here, so it is unknown on this page.",
      known: false,
      sourceUrl: linkedinNews,
      sourceLabel: "LinkedIn News",
    },
    sources: [
      { label: "Minimum budgets", url: linkedinBudget },
      { label: "First Impression, Reserved, and CTV", url: linkedinNews },
    ],
    reviewed: "2026-11-23",
  },
  {
    slug: "snap",
    name: "Snapchat",
    summary:
      "Full-screen vertical ads between Stories and in Spotlight, plus Commercials, AR lenses, and Sponsored Snaps. Two official Snap pages disagree on maximum video length, and both are cited.",
    officialUrl: "https://forbusiness.snapchat.com/",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Single Image or Video",
        summary:
          "9:16. The formats page lists 720 × 1280 and a length of 3–180 seconds. The specs article lists a 1080 × 1920 canvas, a 720 × 1280 minimum image, and video from 3 seconds up to 30 minutes if the file stays under 1 GB.",
        known: true,
        sourceUrl: snapFormats,
        sourceLabel: "Snapchat for Business formats and specs",
      },
      {
        name: "Story and Collection",
        summary: "9:16 at 720 × 1280 on the formats page. Video length 3–180 seconds. Brand name up to 25 characters. Headline up to 34.",
        known: true,
        sourceUrl: snapFormats,
        sourceLabel: "Snapchat for Business",
      },
      {
        name: "Commercials",
        summary:
          "Non-skippable for the first 6 seconds. Standard Commercials are 3–6 seconds. Extended Play is 7–180 seconds. 9:16, 720 × 1280, mp4 or mov, H.264.",
        known: true,
        sourceUrl: snapFormats,
        sourceLabel: "Snapchat for Business",
      },
      {
        name: "Sponsored Snaps",
        summary:
          "A Snap delivered in Chat. 9:16, 720 × 1280, up to 180 seconds, with a recommendation under 10 seconds. Files: mp4, mov, jpg, or png.",
        known: true,
        sourceUrl: snapFormats,
        sourceLabel: "Snapchat for Business",
      },
    ],
    specs: [
      {
        label: "Image minimum",
        value: "720 × 1280 px, PNG or JPEG, 9:16, maximum 5 MB on the specs article. Images are converted into a 5-second video.",
        known: true,
        sourceUrl: snapSpecs,
        sourceLabel: "Snap Business Help",
      },
      {
        label: "Video length conflict",
        value:
          "Formats page: 3–180 seconds for Single Image or Video. Specs article: 3 seconds to 30 minutes under 1 GB. Check both pages in Ads Manager before you export a long cut.",
        known: true,
        sourceUrl: snapSpecs,
        sourceLabel: "Snap formats page and specs article",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value:
        "Snap says the minimum spend per day is $5, and recommends $20–50 per day so an ad can get through the Exploration Phase. The pricing page states these as dollar amounts.",
      known: true,
      sourceUrl: snapPricing,
      sourceLabel: "Snapchat for Business, pricing",
    },
    regions: {
      label: "Countries",
      value: "Unknown. The pricing and spec pages checked here do not publish a country list.",
      known: false,
      sourceUrl: snapFormats,
      sourceLabel: "Snapchat for Business",
    },
    sources: [
      { label: "Ad formats", url: snapFormats },
      { label: "Single image or video specs", url: snapSpecs },
      { label: "Pricing", url: snapPricing },
    ],
    reviewed: "2026-11-23",
  },
  {
    slug: "reddit",
    name: "Reddit",
    summary:
      "Image, video, carousel, and free-form ads in feeds and conversation threads. Max campaigns, launched in beta in January 2026, are an automated campaign type on top of those units.",
    officialUrl: "https://ads.reddit.com/",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Image",
        summary:
          "JPG, PNG, or GIF up to 3 MB. Headline up to 300 characters; Reddit recommends 100 or fewer. Recommended ratios include 1:1 at 1080 × 1080, 4:5 at 1080 × 1350, and 4:3 at 1440 × 1080.",
        known: true,
        sourceUrl: redditImage,
        sourceLabel: "Reddit Ads Help, image specs",
      },
      {
        name: "Video",
        summary: "MOV or MP4, 30 fps or less, up to 1 GB, in feed or conversation.",
        known: true,
        sourceUrl: redditUnits,
        sourceLabel: "Reddit Ads Help, ad units",
      },
      {
        name: "Carousel",
        summary: "2 to 6 images, with a destination URL.",
        known: true,
        sourceUrl: redditUnits,
        sourceLabel: "Reddit Ads Help, ad units",
      },
      {
        name: "Free-form",
        summary: "Up to 20 images, 5 videos, and 40,000 characters of body text.",
        known: true,
        sourceUrl: redditUnits,
        sourceLabel: "Reddit Ads Help, ad units",
      },
    ],
    specs: [
      {
        label: "Feed headline",
        value: "Maximum 300 characters.",
        known: true,
        sourceUrl: redditUnits,
        sourceLabel: "Reddit Ads Help",
      },
      {
        label: "Conversation thumbnail",
        value: "Optional. Recommended 4:3 at 400 × 300. JPG, PNG, or GIF, up to 3 MB on the image spec page.",
        known: true,
        sourceUrl: redditImage,
        sourceLabel: "Reddit Ads Help",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value: "Unknown. The ad-unit articles checked here do not publish a minimum daily budget.",
      known: false,
      sourceUrl: redditUnits,
      sourceLabel: "Reddit Ads Help",
    },
    regions: {
      label: "Countries",
      value: "Unknown. The spec articles and the Max campaigns announcement do not list eligible countries.",
      known: false,
      sourceUrl: redditUnits,
      sourceLabel: "Reddit Ads Help",
    },
    sources: [
      { label: "Ad unit specifications", url: redditUnits },
      { label: "Image specifications", url: redditImage },
    ],
    reviewed: "2026-11-23",
  },
  {
    slug: "microsoft-ads",
    name: "Microsoft Advertising",
    summary:
      "Search and shopping on Bing, plus audience, multimedia, video, Performance Max, and AI placements in Copilot and Bing AI Overviews. Character counts for search ads were not re-checked for this page.",
    officialUrl: "https://about.ads.microsoft.com/",
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Ads in Bing AI Overviews",
        summary:
          "Ads appear next to AI Overviews through existing campaigns, including Performance Max and AI Max. Available in all markets except China, as of the 19 November 2026 post.",
        known: true,
        sourceUrl: microsoftBlog,
        sourceLabel: "Microsoft Advertising blog",
      },
      {
        name: "Discover",
        summary:
          "Ads in Microsoft’s AI content feed on the Edge new-tab page and Windows. Live in the US, Canada, the UK, Australia, and India. Buying is via the account team, not described as self-serve in the post.",
        known: true,
        sourceUrl: microsoftBlog,
        sourceLabel: "Microsoft Advertising blog",
      },
      {
        name: "Search text specs",
        summary: "Unknown on this page. This directory does not guess headline or description lengths.",
        known: false,
        sourceUrl: "https://help.ads.microsoft.com/",
        sourceLabel: "Microsoft Advertising Help",
      },
    ],
    specs: [
      {
        label: "AI content labels",
        value:
          "Generally available controls to declare AI-generated image and video across Product Ads, Multimedia Ads, Audience Ads, Display, Video, and Performance Max assets. Watermark support varies by format.",
        known: true,
        sourceUrl: microsoftBlog,
        sourceLabel: "Microsoft Advertising blog",
      },
      {
        label: "Responsive search character limits",
        value: "Unknown on this page.",
        known: false,
        sourceUrl: "https://help.ads.microsoft.com/",
        sourceLabel: "Microsoft Advertising Help",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value: "Unknown. The November 2026 product post does not publish a minimum daily budget.",
      known: false,
      sourceUrl: microsoftBlog,
      sourceLabel: "Microsoft Advertising blog",
    },
    regions: {
      label: "Countries",
      value:
        "Ads in Bing AI Overviews: all markets except China. Discover: US, Canada, UK, Australia, and India. A full country list for classic search campaigns was not confirmed in the sources for this page.",
      known: true,
      sourceUrl: microsoftBlog,
      sourceLabel: "Microsoft Advertising blog",
    },
    sources: [{ label: "November 2026 product update", url: microsoftBlog }],
    reviewed: "2026-11-23",
  },
  {
    slug: "the-trade-desk",
    name: "The Trade Desk",
    summary:
      "A demand-side platform for buying display, video, CTV, audio, and other inventory across publishers. It is not a single ad format with one spec sheet. Anything not printed by The Trade Desk is marked unknown.",
    officialUrl: ttdAbout,
    featured: false,
    sponsored: false,
    formats: [
      {
        name: "Programmatic display, video, and CTV",
        summary:
          "The company describes a self-serve platform for digital campaigns across formats and devices, and highlights premium CTV inventory. Creative specifications depend on the publisher or SSP.",
        known: false,
        sourceUrl: ttdAbout,
        sourceLabel: "The Trade Desk",
      },
    ],
    specs: [
      {
        label: "File specs",
        value:
          "Unknown. There is no single public canvas. Ask the publisher spec or the seat’s creative library for the line item you are trafficking.",
        known: false,
        sourceUrl: ttdAbout,
        sourceLabel: "The Trade Desk",
      },
    ],
    minimumBudget: {
      label: "Minimum budget",
      value:
        "Unknown. The Trade Desk does not publish a self-serve daily minimum on the pages checked for this directory. Access is typically a commercial seat, not an ads-manager signup with a posted floor.",
      known: false,
      sourceUrl: ttdAbout,
      sourceLabel: "The Trade Desk",
    },
    regions: {
      label: "Countries",
      value:
        "The Trade Desk describes itself as a global platform and lists offices across North America, Europe, and Asia Pacific. A country-by-country availability list was not published on the pages checked here.",
      known: false,
      sourceUrl: "https://investors.thetradedesk.com/news-and-events/news/news-details/2026/The-Trade-Desk-Reports-Third-Quarter-2026-Financial-Results/default.aspx",
      sourceLabel: "The Trade Desk Q3 2026 results",
    },
    sources: [
      { label: "The Trade Desk", url: ttdAbout },
      {
        label: "Q3 2026 results (global platform description)",
        url: "https://investors.thetradedesk.com/news-and-events/news/news-details/2026/The-Trade-Desk-Reports-Third-Quarter-2026-Financial-Results/default.aspx",
      },
    ],
    reviewed: "2026-11-23",
  },
];

export function getPlatform(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}

export function platformsForIndex() {
  return [...platforms].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}
