import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { platformsForIndex } from "@/lib/platforms";
import { updates } from "@/lib/updates";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Platforms",
  description: "Jump into launches for a platform, or open the spec sheet.",
  path: "/platforms",
  kicker: "Platforms",
});

export default function PlatformsPage() {
  const directory = platformsForIndex();
  const extra = Array.from(new Set(updates.map((item) => item.platform))).filter(
    (name) => !directory.some((platform) => platform.name === name),
  );
  const tiles = [
    ...directory.map((platform) => ({
      name: platform.name,
      href: `/platforms/${platform.slug}`,
      count: updates.filter((item) => item.platformSlug === platform.slug || item.platform === platform.name).length,
    })),
    ...extra.map((name) => ({
      name,
      href: "",
      count: updates.filter((item) => item.platform === name).length,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ad platforms",
    numberOfItems: tiles.length,
    itemListElement: directory.map((platform, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: platform.name,
      url: absoluteUrl(`/platforms/${platform.slug}`),
    })),
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <JsonLd data={jsonLd} />
      <h1 className="font-display text-4xl font-bold">Platforms</h1>
      <p className="mt-2 max-w-xl text-ink/70">Tap a name to see its launches. Specs stays a separate page.</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {tiles.map((tile) => (
          <li key={tile.name} className="flex flex-col rounded-3xl bg-white p-4 shadow-sm">
            <p className="font-display text-2xl font-bold leading-tight">{tile.name}</p>
            <p className="mt-1 text-sm text-ink/60">{tile.count} launch{tile.count === 1 ? "" : "es"}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={`/dashboard?platform=${encodeURIComponent(tile.name)}`} className="rounded-full bg-navy px-3 py-2 text-sm font-semibold text-white">
                Launches
              </Link>
              {tile.href ? (
                <Link href={tile.href} className="rounded-full bg-paper px-3 py-2 text-sm font-semibold">
                  Specs
                </Link>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
