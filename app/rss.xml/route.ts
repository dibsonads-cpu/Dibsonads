import { siteConfig } from "@/config/site";
import { updatesByDate } from "@/lib/updates";

export async function GET() {
  const items = updatesByDate()
    .map(
      (update) => `
    <item>
      <title><![CDATA[${update.title}]]></title>
      <link>${siteConfig.url}/updates/${update.slug}</link>
      <guid>${siteConfig.url}/updates/${update.slug}</guid>
      <pubDate>${new Date(`${update.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description><![CDATA[${update.summary}]]></description>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
