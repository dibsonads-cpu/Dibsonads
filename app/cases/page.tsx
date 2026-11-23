import CaseGrid from "@/components/cases/CaseGrid";
import JsonLd from "@/components/JsonLd";
import { caseStudies } from "@/lib/cases";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case studies",
  description: "Published brand examples of new paid-media products, with the result the source actually printed.",
  path: "/cases",
});

export default async function CasesPage({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string; channel?: string; country?: string }>;
}) {
  const params = await searchParams;
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
      <div className="mt-5">
        <CaseGrid
          studies={[...caseStudies].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.brand.localeCompare(b.brand)))}
          initial={{
            industry: params.industry ?? "",
            channel: params.channel ?? "",
            country: params.country ?? "",
          }}
        />
      </div>
    </main>
  );
}
