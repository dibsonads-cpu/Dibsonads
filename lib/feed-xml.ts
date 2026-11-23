import { siteConfig } from "@/config/site";
import { updatesByDate, type Launch } from "@/lib/updates";

function itemXml(update: Launch) {
  const link = `${siteConfig.url}/updates/${update.slug}`;
  const description = update.bullets.join(" ");
  return `
    <item>
      <title><![CDATA[${update.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${new Date(`${update.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description><![CDATA[${description}]]></description>
      <category><![CDATA[${update.platform}]]></category>
    </item>`;
}

export function launchesRss(path: string) {
  const items = updatesByDate().map(itemXml).join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${siteConfig.url}${path}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}

export function rssResponse(path: string) {
  return new Response(launchesRss(path), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
