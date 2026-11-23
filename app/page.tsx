import ProductGrid from "@/components/feed/ProductGrid";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { launchDek, updatesByDate } from "@/lib/updates";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dibs On Ads — Know first",
  description: siteConfig.description,
  path: "/",
  kicker: "New launches",
  absolute: true,
});

type Search = {
  channel?: string;
  platform?: string;
  range?: string;
  region?: string;
  month?: string;
  year?: string;
  view?: string;
  item?: string;
};

export default async function HomePage({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams;
  const launches = updatesByDate();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Verified paid media launches",
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
      <ProductGrid
        launches={launches}
        initial={{
          channel: params.channel ?? "",
          platform: params.platform ?? "",
          range: params.range ?? "",
          region: params.region ?? "",
          month: params.month ?? "",
          year: params.year ?? "",
          view: params.view ?? "",
          item: params.item ?? "",
        }}
      />
    </main>
  );
}
