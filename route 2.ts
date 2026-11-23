import { updates } from "@/lib/data";
import { siteConfig } from "@/config/site";

function generateDrafts(u: (typeof updates)[0]) {
  const url = `${siteConfig.domain}/updates/${u.slug}`;
  const linkedin = `${u.headline}

• ${u.bullets[0]}
• ${u.bullets[1]}
• ${u.bullets[2]}

Read the official source → ${url}

#PaidMedia #AdTech #${u.channel.replace(/\s+/g, "")}`;

  const x = `${u.headline}

${u.bullets[0].slice(0, 80)}…

Official source: ${url}`;

  const shorts = `Hook: ${u.headline} just launched.

Takeaway 1: ${u.bullets[0]}
Takeaway 2: ${u.bullets[1]}
Takeaway 3: ${u.bullets[2]}

Full details and official link in the description.
Follow for daily verified ad launches.`;

  return { linkedin, x, shorts, url };
}

export async function GET() {
  const drafts = updates.map((u) => ({
    slug: u.slug,
    headline: u.headline,
    ...generateDrafts(u),
  }));

  return Response.json({ drafts });
}
