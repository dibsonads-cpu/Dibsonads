import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import NewsletterForm from "@/components/NewsletterForm";
import { siteConfig } from "@/config/site";
import { guides } from "@/lib/learn";
import { getPlatform, platforms, type CitedFact } from "@/lib/platforms";
import { updates } from "@/lib/updates";
import { absoluteUrl, buildMetadata, formatDate } from "@/lib/seo";

export function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return {};
  return buildMetadata({
    title: `${platform.name} ad specs`,
    description: platform.summary,
    path: `/platforms/${platform.slug}`,
    kicker: "Platform directory",
  });
}

function Fact({ fact }: { fact: CitedFact }) {
  return (
    <div className="rounded-2xl border-[3px] border-ink bg-paper p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-bold">{fact.label}</h3>
        <span className={`rounded-full px-2 py-0.5 text-xs font-extrabold uppercase ${fact.known ? "bg-mint" : "bg-magenta text-white"}`}>
          {fact.known ? "Official" : "Unknown"}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6">{fact.value}</p>
      {fact.sourceUrl ? (
        <a href={fact.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-bold text-violet underline">
          {fact.sourceLabel ?? "Source"}
        </a>
      ) : null}
    </div>
  );
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) notFound();

  const relatedUpdates = updates.filter((update) => update.platformSlug === platform.slug);
  const relatedGuides = guides.filter((guide) => guide.relatedPlatformSlugs.includes(platform.slug));
  const url = absoluteUrl(`/platforms/${platform.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${platform.name} ad formats, specs, and budgets`,
        description: platform.summary,
        dateModified: platform.reviewed,
        datePublished: platform.reviewed,
        mainEntityOfPage: url,
        url,
        author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Platforms", item: absoluteUrl("/platforms") },
          { "@type": "ListItem", position: 3, name: platform.name, item: url },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={jsonLd} />
      <p className="text-sm font-bold">
        <Link href="/platforms" className="underline">Platforms</Link>
        <span> / {platform.name}</span>
      </p>
      {(platform.featured || platform.sponsored) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {platform.featured ? (
            <span className="rounded-full bg-sun px-2 py-1 text-xs font-extrabold uppercase">Featured</span>
          ) : null}
          {platform.sponsored ? (
            <span className="rounded-full bg-magenta px-2 py-1 text-xs font-extrabold uppercase text-white">Sponsored</span>
          ) : null}
        </div>
      )}
      <h1 className="mt-3 font-display text-5xl font-bold">{platform.name}</h1>
      <p className="mt-3 text-lg leading-7">{platform.summary}</p>
      <p className="mt-2 text-sm font-semibold text-ink/70">Checked {formatDate(platform.reviewed)}</p>
      <a
        href={platform.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex font-extrabold text-violet underline"
      >
        Official site
      </a>

      <section className="mt-8 grid gap-3 md:grid-cols-2">
        <Fact fact={platform.minimumBudget} />
        <Fact fact={platform.regions} />
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl font-bold">Formats</h2>
        <ul className="mt-4 space-y-3">
          {platform.formats.map((format) => (
            <li key={format.name} className="sticker rounded-2xl bg-white p-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-2xl font-bold">{format.name}</h3>
                <span className={`rounded-full px-2 py-0.5 text-xs font-extrabold uppercase ${format.known ? "bg-mint" : "bg-magenta text-white"}`}>
                  {format.known ? "Cited" : "Unknown detail"}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6">{format.summary}</p>
              {format.sourceUrl ? (
                <a href={format.sourceUrl} className="mt-2 inline-block text-sm font-bold text-violet underline" target="_blank" rel="noopener noreferrer">
                  {format.sourceLabel ?? "Source"}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl font-bold">Key specs</h2>
        <div className="mt-4 space-y-3">
          {platform.specs.map((spec) => (
            <Fact key={spec.label} fact={spec} />
          ))}
        </div>
      </section>

      {relatedUpdates.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-3xl font-bold">Launches on this platform</h2>
          <ul className="mt-3 space-y-2 font-bold">
            {relatedUpdates.map((update) => (
              <li key={update.slug}>
                <Link href={`/updates/${update.slug}`} className="text-violet underline">
                  {update.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {relatedGuides.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-3xl font-bold">Guides</h2>
          <ul className="mt-3 space-y-2 font-bold">
            {relatedGuides.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/learn/${guide.slug}`} className="text-violet underline">
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">Sources</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {platform.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-violet underline">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-sm">
        Want this page featured? <Link href="/advertise" className="font-bold underline">See advertise / sponsor</Link>.
      </p>

      <section className="sticker mt-8 rounded-3xl bg-white p-5">
        <h2 className="font-display text-2xl font-bold">Weekly launches</h2>
        <div className="mt-3">
          <NewsletterForm variant="compact" />
        </div>
      </section>
    </main>
  );
}
