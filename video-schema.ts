import type { SafeVideo } from "@/types/video";
import { toNoCookieEmbed, isYouTube } from "@/types/video";

export function videoObjectJsonLd(video: SafeVideo, pageUrl: string) {
  const embed = isYouTube(video.url) ? toNoCookieEmbed(video.url) : video.url;
  const idMatch = embed.match(/embed\/([a-zA-Z0-9_-]+)/);
  const thumbnail = video.poster || (idMatch ? `https://i.ytimg.com/vi/${idMatch[1]}/hqdefault.jpg` : undefined);

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.transcript?.slice(0, 200) || video.title,
    thumbnailUrl: thumbnail,
    contentUrl: video.url,
    embedUrl: embed,
    uploadDate: new Date().toISOString().split("T")[0],
    publisher: video.channelCredit
      ? { "@type": "Organization", name: video.channelCredit }
      : { "@type": "Organization", name: "Dibs On Ads" },
    mainEntityOfPage: pageUrl,
    ...(video.duration ? { duration: video.duration } : {}),
    ...(video.transcript ? { transcript: video.transcript } : {}),
  };
}
