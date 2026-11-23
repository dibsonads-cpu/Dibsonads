import Link from "next/link";
import { notFound } from "next/navigation";
import MediaVisual from "@/components/feed/MediaVisual";
import JsonLd from "@/components/JsonLd";
import { caseStudies, getCase } from "@/lib/cases";
import { getUpdate } from "@/lib/updates";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return buildMetadata({
    title: `${item.brand}: ${item.title}`,
    description: item.results,
    path: `/cases/${item.slug}`,
  });
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();
  const related = item.launchSlugs.map((id) => getUpdate(id)).filter((update) => update != null);
  const url = absoluteUrl(`/cases/${item.slug}`);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: `${item.brand}: ${item.title}`, description: item.results, url, datePublished: item.date }} />
      <p className="text-sm font-bold">
        <Link href="/cases" className="underline">Case studies</Link>
        <span> / {item.brand}</span>
      </p>
      <div className="relative mt-4 aspect-[8/5] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <MediaVisual media={item.image} platform={item.platform} className="absolute inset-0" />
      </div>
      <p className="mt-2 text-xs text-ink/60">
        {item.image.credit}. {item.image.licence}{" "}
        <a className="underline" href={item.image.sourceUrl}>Image source</a>
      </p>
      <article className="mt-4 rounded-3xl p-5 text-navy sm:p-7" style={{ background: item.tint }}>
        <h1 className="font-display text-4xl font-bold leading-tight">{item.title}</h1>
        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-wide text-navy/60">Client</h2>
          <p className="mt-1 text-sm leading-6">{item.brand}</p>
        </section>
        <section className="mt-4">
          <h2 className="text-xs font-bold uppercase tracking-wide text-navy/60">What they used</h2>
          <p className="mt-1 text-sm leading-6">{item.used}</p>
        </section>
        <section className="mt-4">
          <h2 className="text-xs font-bold uppercase tracking-wide text-navy/60">Performance</h2>
          <p className="mt-1 text-sm leading-6">{item.results}</p>
          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center font-semibold underline">
            {item.sourceName}
          </a>
        </section>
        <section className="mt-4">
          <h2 className="text-xs font-bold uppercase tracking-wide text-navy/60">
            Why it worked
            {item.whyInferred ? <span className="ml-2 normal-case tracking-normal text-violet">Suggestion</span> : null}
          </h2>
          <p className="mt-1 text-sm leading-6">{item.why}</p>
        </section>
      </article>
      {related.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl font-bold">Related launches</h2>
          <ul className="mt-3 space-y-2">
            {related.map((update) => (
              <li key={update.slug}>
                <Link href={`/updates/${update.slug}`} className="font-bold text-violet underline">{update.headline}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
