export const feedChannels = [
  { id: "social", label: "Social" },
  { id: "programmatic", label: "Programmatic" },
  { id: "ai-ads", label: "AI Ads" },
  { id: "retail-media", label: "Retail Media" },
  { id: "search", label: "Search" },
  { id: "ctv-video", label: "CTV / Video" },
] as const;

export const feedRegions = [
  { id: "global", label: "Global" },
  { id: "us", label: "US" },
  { id: "uk", label: "UK" },
  { id: "eu", label: "EU" },
  { id: "apac", label: "APAC" },
  { id: "latam", label: "Latin America" },
  { id: "mea", label: "Middle East & Africa" },
  { id: "north-america", label: "North America" },
  { id: "multiple", label: "Multiple" },
  { id: "not-stated", label: "Not stated" },
] as const;

export type FeedChannelId = (typeof feedChannels)[number]["id"];
export type FeedRegionId = (typeof feedRegions)[number]["id"];

export function channelLabel(id: string) {
  return feedChannels.find((channel) => channel.id === id)?.label ?? id;
}

export function regionLabel(id: string) {
  return feedRegions.find((region) => region.id === id)?.label ?? id;
}

export const channelAccent: Record<string, string> = {
  social: "#ff5d3a",
  programmatic: "#3ec4ff",
  "ai-ads": "#6d4aff",
  "retail-media": "#ffd23f",
  search: "#14d6a0",
  "ctv-video": "#ff2f8b",
};
