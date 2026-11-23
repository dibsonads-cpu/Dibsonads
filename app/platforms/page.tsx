import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { platformsForIndex } from "@/lib/platforms";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ad platform directory",
  description:
    "Formats, specs, minimum budgets, and countries for Meta, Google Ads, TikTok, Amazon Ads, Pinterest, LinkedIn, Snap, Reddit, Microsoft Advertising, and The Trade Desk.",
  path: "/platforms",
  kicker: "Platform directory",
});

export default function PlatformsPage() {
  const platforms = platformsForIndex();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ad platform directory",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: platforms.length,
    itemListElement: platforms.map((platform, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: platform.name,
      url: absoluteUrl(`/platforms/${platform.slug}`),
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={jsonLd} />
      <p className="text-sm font-extrabold uppercase tracking-wide text-magenta">Directory</p>
      <h1 className="mt-2 font-display text-5xl font-bold leading-none">Ad platforms</h1>
      <p className="mt-3 max-w-2xl text-ink/80">
        One page per platform: formats, the specs we could cite, the minimum budget if the platform publishes one, and where it runs. A featured flag is ready for a sponsored listing. None of these pages are paid placements.
      </p>
      <p className="mt-3 text-sm font-bold">
        <Link href="/advertise" className="text-violet underline">Advertise on this directory</Link>
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {platforms.map((platform, index) => (
          <Link key={platform.slug} href={`/platforms/${platform.slug}`} className="sticker relative rounded-3xl bg-white p-5">
            <span
              className={`mb-3 block h-3 w-14 rounded-full ${
                ["bg-coral", "bg-violet", "bg-sun", "bg-mint", "bg-sky", "bg-magenta"][index % 6]
              }`}
            />
            {platform.featured ? (
              <span className="absolute right-4 top-4 rounded-full bg-sun px-2 py-1 text-xs font-extrabold uppercase">Featured</span>
            ) : null}
            <h2 className="font-display text-3xl font-bold">{platform.name}</h2>
            <p className="mt-2 text-sm leading-6 text-ink/80">{platform.summary}</p>
            <p className="mt-3 text-xs font-extrabold uppercase tracking-wide">
              {platform.minimumBudget.known ? "Budget published" : "Budget unknown"}
              {" · "}
              {platform.regions.known ? "Regions cited" : "Regions incomplete"}
            </p>
          </Link>
        ))}
      </div>
      <p className="mt-6 text-xs text-ink/60">Directory publisher: {siteConfig.name}.</p>
    </main>
  );
}
