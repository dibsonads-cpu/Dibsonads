export type VideoType = "official_embed" | "original_recap";

export interface SafeVideo {
  type: VideoType;
  /** For official_embed: full embed URL (prefer youtube-nocookie.com). For original_recap: mp4 or YouTube embed URL. */
  url: string;
  title: string;
  /** Required for official_embed */
  channelCredit?: string;
  /** Optional poster thumbnail URL */
  poster?: string;
  /** Transcript or captions for accessibility/SEO (especially original_recap) */
  transcript?: string;
  duration?: string; // ISO 8601 e.g. PT1M30S
}

export function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be") || url.includes("youtube-nocookie.com");
}

export function toNoCookieEmbed(url: string): string {
  if (url.includes("youtube-nocookie.com")) return url;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (match) return `https://www.youtube-nocookie.com/embed/${match[1]}`;
  return url;
}
