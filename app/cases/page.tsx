import Link from "next/link";
import MediaVisual from "@/components/feed/MediaVisual";
import JsonLd from "@/components/JsonLd";
import { caseStudies } from "@/lib/cases";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case studies",
  description: "Published brand examples of new paid-media products, with the result the source actually printed.",
  path: "/cases",
});

export default function CasesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Paid media case studies",
    numberOfItems: caseStudies.length,
    itemListElement: caseStudies.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${item.brand}: ${item.title}`,
      url: absoluteUrl(`/cases/${item.slug}`),
    })),
  };

  return (
    <main className="mx-auto max-w-[1440px] px-3 py-4 sm:px-6">
      <JsonLd data={jsonLd} />
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Case studies</h1>
      <p className="mt-1 max-w-2xl text-sm text-ink/70">
        Real brand examples. Numbers appear only when the source published them.
      </p>
      <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {caseStudies.map((item) => (
          <li key={item.slug}>
            <Link href={`/cases/${item.slug}`} className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="relative aspect-square bg-[#f3f3f3]">
                <MediaVisual media={item.image} platform={item.platform} className="absolute inset-0" />
              </div>
              <div className="flex flex-1 flex-col gap-1 border-t border-black/10 p-3">
                <h2 className="text-sm font-semibold leading-snug">{item.brand}</h2>
                <p className="line-clamp-3 text-sm leading-snug">{item.title}</p>
                <p className="text-xs font-semibold">{item.platform}</p>
                <p className="line-clamp-2 text-xs text-ink/60">{item.markets.join(" · ")}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
