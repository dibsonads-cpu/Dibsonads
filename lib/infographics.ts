import copy from "@/lib/infographic-copy.json";
import type { LaunchMedia } from "@/lib/media";

export const INFOGRAPHIC_LICENCE =
  "Original Dibs On Ads infographic drawn for this item. Typography and simple shapes only. No people and no platform logos.";

const slugs = new Set(copy.map((item) => item.slug));

export function infographicFor(slug: string, alt: string): LaunchMedia | undefined {
  if (!slugs.has(slug)) return undefined;
  return {
    type: "image",
    src: `/infographics/${slug}.svg`,
    alt,
    credit: "Dibs On Ads",
    sourceUrl: `/infographics/${slug}.svg`,
    licence: INFOGRAPHIC_LICENCE,
    fit: "cover",
    kind: "infographic",
  };
}
