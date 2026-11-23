import SwipeDeck from "@/components/feed/SwipeDeck";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { launchDek, updatesByDate } from "@/lib/updates";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dibs On Ads — Know first",
  description: siteConfig.description,
  path: "/",
  kicker: "Launch feed",
  absolute: true,
});

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ platform?: string }>;
}) {
  const { platform } = await searchParams;
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
      <SwipeDeck launches={launches} platform={platform} />
    </main>
  );
}
