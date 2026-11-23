export const siteConfig = {
  name: "Dibs On Ads",
  shortName: "DOAds",
  tagline: "Verified paid media launches. First dibs on new formats.",
  domain: "https://dibsonads.com",
  description: "Fast, scannable B2B advertising intelligence tracking verified paid media launches across channels and countries. First access to official updates.",
  social: {
    linkedin: "https://www.linkedin.com/company/dibs-on-ads",
    substack: "https://dibsonads.substack.com",
    youtube: "https://www.youtube.com/@dibsonads",
    x: "https://x.com/dibsonads",
    instagram: "https://www.instagram.com/dibsonads",
    tiktok: "https://www.tiktok.com/@dibs.on.ads",
  },
  newsletter: {
    type: "substack" as "substack" | "api",
    url: "https://dibsonads.substack.com",
    apiEndpoint: "/api/newsletter",
  },
  channels: [
    { slug: "paid-social", name: "Paid Social", channel: "Paid Social" as const },
    { slug: "search-ai", name: "Search & AI", channel: "Search & AI" as const },
    { slug: "programmatic-dsp", name: "Programmatic & DSP", channel: "Programmatic & DSP" as const },
    { slug: "retail-media", name: "Retail Media", channel: "Retail Media" as const },
    { slug: "publisher-ad-tech", name: "Publisher & Ad Tech", channel: "Publisher & Ad Tech" as const },
    { slug: "ctv-audio", name: "CTV & Audio", channel: "CTV & Audio" as const },
    { slug: "offline", name: "Offline (TV / OOH / Radio / Print)", channel: "Offline" as const },
  ],
};
