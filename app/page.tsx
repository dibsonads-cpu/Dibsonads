import JsonLd from "@/components/JsonLd";
import LaunchFeed from "@/components/launch/LaunchFeed";
import { siteConfig } from "@/config/site";
import { channelLabel } from "@/lib/taxonomy";
import { launchDek, updatesByDate } from "@/lib/updates";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dibs On Ads — Know first",
  description: siteConfig.description,
  path: "/",
  kicker: "The launch desk",
  absolute: true,
});

type Search = {
  channel?: string;
  platform?: string;
  month?: string;
  year?: string;
  region?: string;
};

export default async function HomePage({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams;
  const launches = updatesByDate();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Verified paid media launches",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: launches.length,
    itemListElement: launches.map((update, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: update.title,
      url: absoluteUrl(`/updates/${update.slug}`),
      description: launchDek(update),
    })),
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <header className="mx-auto max-w-6xl px-4 pb-4 pt-8 md:pt-12">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-magenta">The launch desk</p>
        <h1 className="mt-2 max-w-4xl font-display text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl">
          Know first. <span className="text-coral">Then brief it.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-ink/80">
          New ad products, formats, and policy changes across social, search, retail media, programmatic, CTV, and AI. Two to four notes, the source, and a cover we made ourselves.
        </p>
        <p className="mt-3 text-sm font-bold text-ink/60">
          {launches.length} verified launches · {new Set(launches.map((item) => channelLabel(item.channel))).size} channels · open several at once
        </p>
      </header>
      <LaunchFeed
        launches={launches}
        initialFilters={{
          channel: params.channel ?? "",
          platform: params.platform ?? "",
          month: params.month ?? "",
          year: params.year ?? "",
          region: params.region ?? "",
        }}
      />
    </main>
  );
}
