import { updates } from "@/lib/data";
import { siteConfig } from "@/config/site";

export async function GET() {
  const items = updates
    .map(
      (u) => `
    <item>
      <title><![CDATA[${u.title}]]></title>
      <link>${siteConfig.domain}/updates/${u.slug}</link>
      <guid>${siteConfig.domain}/updates/${u.slug}</guid>
      <description><![CDATA[${u.bullets.join(" ")}]]></description>
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
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
