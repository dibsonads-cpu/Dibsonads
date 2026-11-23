import { topicPhoto, type LaunchMedia } from "@/lib/media";

export type CaseStudy = {
  slug: string;
  brand: string;
  title: string;
  platform: string;
  launchSlugs: string[];
  whatTheyDid: string;
  results: string;
  sourceName: string;
  sourceUrl: string;
  date: string;
  markets: string[];
  image: LaunchMedia;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "booking-prime-video",
    brand: "Booking.com",
    title: "Travel the Screen on Prime Video",
    platform: "Amazon Ads",
    launchSlugs: ["amazon-sponsored-tv-expansion", "amazon-uk-geographic-insights"],
    whatTheyDid: "Booking.com and Amazon's Brand Innovation Lab built interactive Prime Video campaigns around The Idea of You and the second season of The Rings of Power. Viewers could move from a scene to a Booking.com stay inspired by that place.",
    results: "Amazon says The Idea of You flight reached 22.3 million unique users, with a 10% lift in aided awareness and a 9% lift in brand opinion. The Rings of Power flight showed an 8% lift in aided awareness and an 11% lift in brand opinion. A later brand study said 73% were more likely to use Booking.com. Figures are advertiser-provided, 2024.",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/library/case-studies/booking-com-prime-video-campaigns",
    date: "2024-10-01",
    markets: ["Not listed country by country. The case study describes a 2024 Prime Video campaign."],
    image: topicPhoto("tv", "A television in a living room"),
  },
  {
    slug: "fizz-fallout",
    brand: "Fizz Mobile",
    title: "Prime Video ads beside Fallout in Canada",
    platform: "Amazon Ads",
    launchSlugs: ["amazon-sponsored-tv-expansion"],
    whatTheyDid: "The Canadian telecom brand ran Prime Video ads around the Fallout premiere, with remarketing and other Amazon screens, to reach millennial and Gen Z gamers.",
    results: "Amazon's brand lift study in Canada (11 April–17 May 2024) reported a 21% lift in awareness and a 25% lift in ad recall. The campaign had 37 million impressions and reached 3.5 million viewers. Prime Video ads were 69% of that reach.",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/en-us/library/case-studies/how-fizz-mobile-used-prime-video-to-reach-gamers/",
    date: "2024-05-17",
    markets: ["Canada"],
    image: topicPhoto("tv", "A flat-screen television"),
  },
  {
    slug: "jeep-women-era",
    brand: "Jeep",
    title: "The Women Era on Prime Video in Italy",
    platform: "Amazon Ads",
    launchSlugs: ["amazon-sponsored-tv-expansion"],
    whatTheyDid: "Jeep ran a five-episode series, The Women Era, on Prime Video and Fire TV in Italy, with Amazon DSP used to remarket.",
    results: "Amazon's Italy data for 3–31 December 2024: 42,100 unique streams, 514,000 minutes watched, 96.3 million impressions (118.85% of goal), a 93.1% video completion rate, and a 1.2% click-through rate on the Fire TV Feature Rotator.",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/library/case-studies/jeep-women-era-prime-video-ads",
    date: "2024-12-31",
    markets: ["Italy"],
    image: topicPhoto("tv", "Television in a home"),
  },
  {
    slug: "kerastase-premiere",
    brand: "Kérastase",
    title: "Première launch on Prime Video in Italy",
    platform: "Amazon Ads",
    launchSlugs: ["amazon-sponsored-tv-expansion"],
    whatTheyDid: "Kérastase launched the Première haircare line with Amazon Marketing Cloud audiences, educational pages, Prime Video, and Fire TV in Italy.",
    results: "Amazon and Kantar, Italy, September–October 2024: 13.3 million unique users, awareness up 6.5%, ad awareness up 12.2%, consideration up 7.1%, brand searches on Amazon.it up 80%, and sell-out up 30%.",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/en-us/library/case-studies/kerastase-prime-video-ads/",
    date: "2024-10-27",
    markets: ["Italy"],
    image: topicPhoto("shop", "A shop aisle"),
  },
  {
    slug: "wendys-sponsored-snaps",
    brand: "Wendy's",
    title: "A day of Sponsored Snaps",
    platform: "Snap",
    launchSlugs: ["snap-newfronts-chat-ads", "snap-sponsored-snaps-global"],
    whatTheyDid: "Wendy's used Sponsored Snaps, the Chat placement, as Snap described at the 2025 NewFronts.",
    results: "Snap says Wendy's saw nearly 52 million impressions in a single day and grew Public Profile followers by 54%. The country is not stated in the post.",
    sourceName: "Snap Newsroom",
    sourceUrl: "https://newsroom.snap.com/say-it-in-a-snap-newfronts-2025",
    date: "2025-05-07",
    markets: ["Not stated in the NewFronts post"],
    image: topicPhoto("phone", "A smartphone in a hand"),
  },
  {
    slug: "asics-sponsored-snaps",
    brand: "ASICS",
    title: "Running shoes in the Chat inbox",
    platform: "Snap",
    launchSlugs: ["snap-sponsored-snaps-global"],
    whatTheyDid: "ASICS worked with Zeno Group to promote a running shoe line with Sponsored Snaps. Snap also cites an eBay campaign in the same note.",
    results: "Snap says the ASICS work reached 2 million unique Snapchatters in the Chat inbox. eBay's campaign, mentioned beside it, achieved nearly twice the incremental unique reach. No further split by country is given.",
    sourceName: "Snapchat for Business",
    sourceUrl: "https://forbusiness.snapchat.com/blog/snapchat-2025-performance-advertising",
    date: "2025-12-09",
    markets: ["Not stated"],
    image: topicPhoto("creator", "Someone filming on a phone"),
  },
  {
    slug: "prime-video-pinterest-invincible",
    brand: "Prime Video",
    title: "Invincible season two on Pinterest",
    platform: "Pinterest",
    launchSlugs: ["pinterest-performance-plus"],
    whatTheyDid: "Prime Video, with Dojo Agency, promoted the second season of Invincible on Pinterest using showcase ads, video, and carousel Pins aimed at people who already watch adult animation. The write-up is Pinterest's Brazilian business story.",
    results: "Pinterest says the month-long campaign delivered 2× the planned impressions, 4× the planned clicks, engagement almost 50% higher, CPM almost 70% under the target, and CPC down more than 80%.",
    sourceName: "Pinterest Business",
    sourceUrl: "https://business.pinterest.com/pt-br/success-stories/prime-video/",
    date: "2024-01-01",
    markets: ["Told as a Pinterest Business story for Brazil. A second country is not named."],
    image: topicPhoto("phone", "A phone in someone's hand"),
  },
  {
    slug: "wayfair-top-of-search",
    brand: "Wayfair",
    title: "An early test of Top of Search ads",
    platform: "Pinterest",
    launchSlugs: ["pinterest-top-of-search"],
    whatTheyDid: "Wayfair was one of the first advertisers to test Pinterest Top of Search ads, which sit in the top ten search results.",
    results: "Pinterest says Wayfair's click-through rate rose 237% over two weeks versus its usual campaigns. Across the beta, Pinterest also cites a 29% higher click-through rate than standard campaigns.",
    sourceName: "Pinterest Newsroom",
    sourceUrl: "https://newsroom.pinterest.com/en-au/news/pinterest-introduces-top-of-search-ads-and-new-advertising-tools/",
    date: "2025-09-25",
    markets: ["Beta across monetised markets. Wayfair's test country is not named."],
    image: topicPhoto("grocery", "Products on shop shelves"),
  },
  {
    slug: "canadian-tire-local-inventory",
    brand: "Canadian Tire",
    title: "Local inventory ads in Canada",
    platform: "Pinterest",
    launchSlugs: ["pinterest-top-of-search", "pinterest-performance-cropping"],
    whatTheyDid: "Canadian Tire was the first Canadian retailer Pinterest names as testing local inventory ads, which show in-stock prices near the shopper.",
    results: "Pinterest says Canadian Tire reached interested shoppers 48% more efficiently than with standard shopping campaigns and saw a 16.5% higher in-store visit rate.",
    sourceName: "Pinterest Newsroom",
    sourceUrl: "https://newsroom.pinterest.com/en-au/news/pinterest-introduces-top-of-search-ads-and-new-advertising-tools/",
    date: "2025-09-25",
    markets: ["Canada"],
    image: topicPhoto("shop", "A supermarket aisle"),
  },
  {
    slug: "lenovo-reddit-dpa",
    brand: "Lenovo",
    title: "Dynamic Product Ads with Assembly Global",
    platform: "Reddit",
    launchSlugs: ["reddit-dynamic-product-ads"],
    whatTheyDid: "Lenovo and Assembly Global used Reddit Dynamic Product Ads in an always-on campaign aimed at incremental purchases.",
    results: "Reddit quotes Gabby Mazzone, Lenovo's NA eCommerce media lead: Dynamic Product Ads delivered a 7% lift in purchase conversions. The post also says advertisers running DPA and standard conversion campaigns in Q1 2025 saw 2× the ROAS from DPA.",
    sourceName: "Reddit for Business",
    sourceUrl: "https://www.business.reddit.com/blog/dynamic-product-ads-launch",
    date: "2025-05-22",
    markets: ["North America is in the spokesperson's title. Reddit does not list further countries."],
    image: topicPhoto("laptop", "A laptop on a desk"),
  },
  {
    slug: "vistaprint-reddit-dpa",
    brand: "VistaPrint",
    title: "Dynamic Product Ads in a full-funnel plan",
    platform: "Reddit",
    launchSlugs: ["reddit-dynamic-product-ads"],
    whatTheyDid: "VistaPrint used Dynamic Product Ads as part of a full-funnel Reddit plan.",
    results: "Reddit says VistaPrint achieved a 4× return on ad spend with Dynamic Product Ads. No country is named.",
    sourceName: "Reddit for Business",
    sourceUrl: "https://www.business.reddit.com/blog/dynamic-product-ads-launch",
    date: "2025-05-22",
    markets: ["Not stated"],
    image: topicPhoto("laptop", "Laptop and books on a desk"),
  },
];

export function getCase(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function casesForLaunch(slug: string) {
  return caseStudies.filter((item) => item.launchSlugs.includes(slug));
}
