import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ogImagePath(title: string, kicker?: string) {
  const params = new URLSearchParams({ title });
  if (kicker) params.set("kicker", kicker);
  return `/og?${params.toString()}`;
}

export function buildMetadata({
  title,
  description,
  path,
  kicker,
  ogType = "website",
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  kicker?: string;
  ogType?: "website" | "article";
  absolute?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const image = ogImagePath(title, kicker);
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: ogType,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
