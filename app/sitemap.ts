import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { guides } from "@/lib/learn";
import { platforms } from "@/lib/platforms";
import { updates } from "@/lib/updates";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/map", "/dashboard", "/platforms", "/learn", "/saved", "/updates", "/advertise"];
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path || "/"}`.replace(/\/$/, "") || siteConfig.url,
    changeFrequency: path === "" || path === "/updates" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const updateEntries: MetadataRoute.Sitemap = updates.map((update) => ({
    url: `${siteConfig.url}/updates/${update.slug}`,
    lastModified: update.date,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.url}/learn/${guide.slug}`,
    lastModified: guide.updated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const platformEntries: MetadataRoute.Sitemap = platforms.map((platform) => ({
    url: `${siteConfig.url}/platforms/${platform.slug}`,
    lastModified: platform.reviewed,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...updateEntries, ...guideEntries, ...platformEntries];
}
