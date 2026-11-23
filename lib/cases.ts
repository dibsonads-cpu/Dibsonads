import { infographicFor } from "@/lib/infographics";
import type { LaunchMedia } from "@/lib/media";

export type CaseStudy = {
  slug: string;
  brand: string;
  /** Result-led line for the card and the page title. */
  title: string;
  platform: string;
  launchSlugs: string[];
  /** Platform, product, and format, from the source. */
  used: string;
  /** Published figures only. */
  results: string;
  /** One or two plain lines. Mark whyInferred when this is not stated in the source. */
  why: string;
  whyInferred: boolean;
  tint: string;
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
    title: "22.3 million people saw The Idea of You",
    platform: "Amazon Ads",
    launchSlugs: ["amazon-sponsored-tv-expansion", "amazon-uk-geographic-insights"],
    used: "Amazon Ads on Prime Video. Interactive campaigns built with the Brand Innovation Lab around The Idea of You and season two of The Rings of Power.",
    results: "Amazon says The Idea of You flight reached 22.3 million unique users, with a 10% lift in aided awareness and a 9% lift in brand opinion. The Rings of Power flight showed an 8% lift in aided awareness and an 11% lift in brand opinion. A later brand study said 73% were more likely to use Booking.com. Figures are advertiser-provided, 2024.",
    why: "People could move from a scene they were watching to a stay inspired by that place, so the ad was part of the story rather than a break from it.",
    whyInferred: true,
    tint: "#d7e6f7",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/library/case-studies/booking-com-prime-video-campaigns",
    date: "2024-10-01",
    markets: ["Not listed country by country. The case study describes a 2024 Prime Video campaign."],
    image: infographicFor("booking-prime-video", "Booking.com reached 22.3 million viewers")!,
  },
  {
    slug: "fizz-fallout",
    brand: "Fizz Mobile",
    title: "+21% awareness beside Fallout",
    platform: "Amazon Ads",
    launchSlugs: ["amazon-sponsored-tv-expansion"],
    used: "Prime Video ads in Canada around the Fallout premiere, with remarketing on other Amazon screens.",
    results: "Amazon's brand lift study in Canada (11 April–17 May 2024) reported a 21% lift in awareness and a 25% lift in ad recall. The campaign had 37 million impressions and reached 3.5 million viewers. Prime Video ads were 69% of that reach.",
    why: "The show already had the gamers Fizz wanted, so the ad borrowed that audience instead of trying to build one from scratch.",
    whyInferred: true,
    tint: "#eadcff",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/en-us/library/case-studies/how-fizz-mobile-used-prime-video-to-reach-gamers/",
    date: "2024-05-17",
    markets: ["Canada"],
    image: infographicFor("fizz-fallout", "Fizz awareness rose 21 percent")!,
  },
  {
    slug: "jeep-women-era",
    brand: "Jeep",
    title: "96.3 million impressions in Italy",
    platform: "Amazon Ads",
    launchSlugs: ["amazon-sponsored-tv-expansion"],
    used: "A five-episode series, The Women Era, on Prime Video and Fire TV in Italy, with Amazon DSP used to remarket.",
    results: "Amazon's Italy data for 3–31 December 2024: 42,100 unique streams, 514,000 minutes watched, 96.3 million impressions (118.85% of goal), a 93.1% video completion rate, and a 1.2% click-through rate on the Fire TV Feature Rotator.",
    why: "A series gives people a reason to keep watching, which is a better fit for streaming than a single spot.",
    whyInferred: true,
    tint: "#e4f0d8",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/library/case-studies/jeep-women-era-prime-video-ads",
    date: "2024-12-31",
    markets: ["Italy"],
    image: infographicFor("jeep-women-era", "Jeep ran 96.3 million impressions")!,
  },
  {
    slug: "kerastase-premiere",
    brand: "Kérastase",
    title: "Searches up 80% for Première",
    platform: "Amazon Ads",
    launchSlugs: ["amazon-sponsored-tv-expansion"],
    used: "Prime Video and Fire TV in Italy, with Amazon Marketing Cloud audiences and educational pages for the Première line.",
    results: "Amazon and Kantar, Italy, September–October 2024: 13.3 million unique users, awareness up 6.5%, ad awareness up 12.2%, consideration up 7.1%, brand searches on Amazon.it up 80%, and sell-out up 30%.",
    why: "The film introduced the product and the pages on Amazon were there for the search that followed.",
    whyInferred: true,
    tint: "#f6ead4",
    sourceName: "Amazon Ads",
    sourceUrl: "https://advertising.amazon.com/en-us/library/case-studies/kerastase-prime-video-ads/",
    date: "2024-10-27",
    markets: ["Italy"],
    image: infographicFor("kerastase-premiere", "Kérastase reached 13.3 million people")!,
  },
  {
    slug: "wendys-sponsored-snaps",
    brand: "Wendy's",
    title: "Nearly 52 million impressions in a day",
    platform: "Snap",
    launchSlugs: ["snap-newfronts-chat-ads", "snap-sponsored-snaps-global"],
    used: "Snap Sponsored Snaps, a full-screen video in the Chat inbox.",
    results: "Snap says Wendy's saw nearly 52 million impressions in a single day and grew Public Profile followers by 54%. The country is not stated in the post.",
    why: "Chat is where people already are, so a one-day takeover can pile up impressions without waiting for the Stories feed.",
    whyInferred: true,
    tint: "#fde2e2",
    sourceName: "Snap Newsroom",
    sourceUrl: "https://newsroom.snap.com/say-it-in-a-snap-newfronts-2025",
    date: "2025-05-07",
    markets: ["Not stated in the NewFronts post"],
    image: infographicFor("wendys-sponsored-snaps", "Wendy's ran 52 million impressions in a day")!,
  },
  {
    slug: "asics-sponsored-snaps",
    brand: "ASICS",
    title: "2 million people reached in Chat",
    platform: "Snap",
    launchSlugs: ["snap-sponsored-snaps-global"],
    used: "Sponsored Snaps with Zeno Group, promoting a running shoe line in the Chat inbox.",
    results: "Snap says the ASICS work reached 2 million unique Snapchatters in the Chat inbox. eBay's campaign, mentioned beside it, achieved nearly twice the incremental unique reach. No further split by country is given.",
    why: "A shoe is easier to grasp full-screen in a chat than as a small tile in a feed.",
    whyInferred: true,
    tint: "#d9e4f5",
    sourceName: "Snapchat for Business",
    sourceUrl: "https://forbusiness.snapchat.com/blog/snapchat-2025-performance-advertising",
    date: "2025-12-09",
    markets: ["Not stated"],
    image: infographicFor("asics-sponsored-snaps", "ASICS reached 2 million people")!,
  },
  {
    slug: "prime-video-pinterest-invincible",
    brand: "Prime Video",
    title: "4× the clicks they had planned",
    platform: "Pinterest",
    launchSlugs: ["pinterest-performance-plus"],
    used: "Pinterest showcase ads, video, and carousel Pins, made with Dojo Agency for people who already watch adult animation. Pinterest tells this as a Brazil story.",
    results: "Pinterest says the month-long campaign delivered 2× the planned impressions, 4× the planned clicks, engagement almost 50% higher, CPM almost 70% under the target, and CPC down more than 80%.",
    why: "The Pins were aimed at people already into the kind of show Invincible is, so the click was a short step.",
    whyInferred: true,
    tint: "#fde4ea",
    sourceName: "Pinterest Business",
    sourceUrl: "https://business.pinterest.com/pt-br/success-stories/prime-video/",
    date: "2024-01-01",
    markets: ["Told as a Pinterest Business story for Brazil. A second country is not named."],
    image: infographicFor("prime-video-pinterest-invincible", "Prime Video delivered four times the clicks")!,
  },
  {
    slug: "wayfair-top-of-search",
    brand: "Wayfair",
    title: "+237% clicks in two weeks",
    platform: "Pinterest",
    launchSlugs: ["pinterest-top-of-search"],
    used: "Pinterest Top of Search ads, which sit in the top ten search results. Wayfair was an early tester.",
    results: "Pinterest says Wayfair's click-through rate rose 237% over two weeks versus its usual campaigns. Across the beta, Pinterest also cites a 29% higher click-through rate than standard campaigns.",
    why: "The ad showed up at the moment someone was already looking, which is when a click is easiest to earn.",
    whyInferred: true,
    tint: "#f8d5dc",
    sourceName: "Pinterest Newsroom",
    sourceUrl: "https://newsroom.pinterest.com/en-au/news/pinterest-introduces-top-of-search-ads-and-new-advertising-tools/",
    date: "2025-09-25",
    markets: ["Beta across monetised markets. Wayfair's test country is not named."],
    image: infographicFor("wayfair-top-of-search", "Wayfair click rate rose 237 percent")!,
  },
  {
    slug: "canadian-tire-local-inventory",
    brand: "Canadian Tire",
    title: "+16.5% more store visits",
    platform: "Pinterest",
    launchSlugs: ["pinterest-top-of-search", "pinterest-performance-cropping"],
    used: "Pinterest local inventory ads in Canada, showing in-stock prices near the shopper. Pinterest names Canadian Tire as the first Canadian retailer to test them.",
    results: "Pinterest says Canadian Tire reached interested shoppers 48% more efficiently than with standard shopping campaigns and saw a 16.5% higher in-store visit rate.",
    why: "A price and a nearby store answer the question that stops a Pin from becoming a visit.",
    whyInferred: true,
    tint: "#fde8d2",
    sourceName: "Pinterest Newsroom",
    sourceUrl: "https://newsroom.pinterest.com/en-au/news/pinterest-introduces-top-of-search-ads-and-new-advertising-tools/",
    date: "2025-09-25",
    markets: ["Canada"],
    image: infographicFor("canadian-tire-local-inventory", "Canadian Tire store visits rose 16.5 percent")!,
  },
  {
    slug: "lenovo-reddit-dpa",
    brand: "Lenovo",
    title: "+7% purchase conversions",
    platform: "Reddit",
    launchSlugs: ["reddit-dynamic-product-ads"],
    used: "Reddit Dynamic Product Ads, run with Assembly Global as an always-on campaign for purchases.",
    results: "Reddit quotes Gabby Mazzone, Lenovo's NA eCommerce media lead: Dynamic Product Ads delivered a 7% lift in purchase conversions. The post also says advertisers running DPA and standard conversion campaigns in Q1 2025 saw 2× the ROAS from DPA.",
    why: "The ad could show a product that matched what that person was already reading about.",
    whyInferred: true,
    tint: "#f8ddd6",
    sourceName: "Reddit for Business",
    sourceUrl: "https://www.business.reddit.com/blog/dynamic-product-ads-launch",
    date: "2025-05-22",
    markets: ["North America is in the spokesperson's title. Reddit does not list further countries."],
    image: infographicFor("lenovo-reddit-dpa", "Lenovo purchases rose 7 percent")!,
  },
  {
    slug: "vistaprint-reddit-dpa",
    brand: "VistaPrint",
    title: "4× return on ad spend",
    platform: "Reddit",
    launchSlugs: ["reddit-dynamic-product-ads"],
    used: "Reddit Dynamic Product Ads, as one part of a full-funnel plan.",
    results: "Reddit says VistaPrint achieved a 4× return on ad spend with Dynamic Product Ads. No country is named.",
    why: "Product ads lower down the plan can take the demand the rest of the campaign started.",
    whyInferred: true,
    tint: "#efe4fb",
    sourceName: "Reddit for Business",
    sourceUrl: "https://www.business.reddit.com/blog/dynamic-product-ads-launch",
    date: "2025-05-22",
    markets: ["Not stated"],
    image: infographicFor("vistaprint-reddit-dpa", "VistaPrint saw a 4 times return")!,
  },
];

export function getCase(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function casesForLaunch(slug: string) {
  return caseStudies.filter((item) => item.launchSlugs.includes(slug));
}
