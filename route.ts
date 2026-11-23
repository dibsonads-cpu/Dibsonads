import { updates } from "@/lib/data";
import { siteConfig } from "@/config/site";

export async function GET() {
  const items = updates
    .map(
      (u) => `
    <item>
      <title><![CDATA[${u.headline}]]></title>
      <link>${siteConfig.domain}/updates/${u.slug}</link>
      <guid>${siteConfig.domain}/updates/${u.slug}</guid>
      <pubDate>${new Date(u.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${u.bullets.join(" ")}

LinkedIn: ${u.headline} – ${u.bullets[0]} ${siteConfig.domain}/updates/${u.slug}
X: ${u.headline.slice(0, 100)}… ${siteConfig.domain}/updates/${u.slug}]]></description>
      <category>${u.channel}</category>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.domain}</link>
    <description>${siteConfig.description}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
