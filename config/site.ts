const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dibsonads.com";

export const siteConfig = {
  name: "Dibs On Ads",
  shortName: "Dibs",
  tagline: "Verified paid media launches. First dibs on new formats.",
  description:
    "The launch desk for paid media. New ad products, formats, and policy changes across social, search, retail, programmatic, CTV, and AI — sourced, short, and first.",
  url: rawSiteUrl.replace(/\/$/, ""),
  contactEmail: "TODO",
  social: {
    linkedin: "https://www.linkedin.com/company/dibs-on-ads",
    substack: "https://dibsonads.substack.com",
    youtube: "https://www.youtube.com/@dibsonads",
    x: "https://x.com/dibsonads",
    instagram: "https://www.instagram.com/dibsonads",
    tiktok: "https://www.tiktok.com/@dibs.on.ads",
  },
  newsletter: {
    subscribeUrl: "https://dibsonads.substack.com/subscribe",
    formAction: "https://dibsonads.substack.com/api/v1/free?nojs=true",
  },
  rssPath: "/feed.xml",
};

export type Channel = {
  slug: string;
  name: string;
  blurb: string;
  accent: "coral" | "violet" | "mint" | "sun" | "sky" | "magenta" | "grape";
};

export const channels: Channel[] = [
  {
    slug: "paid-social",
    name: "Paid Social",
    blurb: "Meta, TikTok, Snap, Pinterest, LinkedIn, Reddit, and the other social auctions.",
    accent: "coral",
  },
  {
    slug: "search-ai",
    name: "Search & AI",
    blurb: "Google, Microsoft Advertising, and ads that sit next to AI answers.",
    accent: "violet",
  },
  {
    slug: "retail-media",
    name: "Retail Media",
    blurb: "Sponsored placements on retailer sites and apps, starting with Amazon.",
    accent: "sun",
  },
  {
    slug: "programmatic-dsp",
    name: "Programmatic & DSP",
    blurb: "Display, video, CTV, and audio bought through a demand-side platform.",
    accent: "sky",
  },
  {
    slug: "ctv-audio",
    name: "CTV & Audio",
    blurb: "Streaming TV and audio bought directly or through a DSP.",
    accent: "magenta",
  },
  {
    slug: "publisher-ad-tech",
    name: "Publisher & Ad Tech",
    blurb: "Publisher-direct deals and the tools around them.",
    accent: "mint",
  },
  {
    slug: "offline",
    name: "Offline",
    blurb: "Linear TV, out-of-home, radio, and print.",
    accent: "grape",
  },
];

export function getChannel(slug: string) {
  return channels.find((channel) => channel.slug === slug);
}
