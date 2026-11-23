import Link from "next/link";
import MediaVisual from "@/components/feed/MediaVisual";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import NewsletterForm from "@/components/NewsletterForm";
import { siteConfig } from "@/config/site";
import { guides } from "@/lib/learn";
import { getPlatform } from "@/lib/platforms";
import { channelLabel, regionLabel } from "@/lib/taxonomy";
import { formatLaunchDate, getUpdate, launchDek, updates } from "@/lib/updates";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return updates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const update = getUpdate(slug);
  if (!update) return {};
  return buildMetadata({
    title: update.title,
    description: launchDek(update),
    path: `/updates/${update.slug}`,
    kicker: `${update.platform} · ${regionLabel(update.region)}`,
    ogType: "article",
  });
}

export default async function UpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const update = getUpdate(slug);
  if (!update) notFound();

  const platform = update.platformSlug ? getPlatform(update.platformSlug) : undefined;
  const relatedGuides = guides.filter((guide) => guide.relatedUpdateSlugs.includes(update.slug));
  const url = absoluteUrl(`/updates/${update.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: update.title,
    description: launchDek(update),
    datePublished: update.date,
    dateModified: update.date,
    mainEntityOfPage: url,
    url,
    image: update.image.type === "logo" ? absoluteUrl(update.image.src) : update.image.src,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    citation: update.sourceUrl,
    isBasedOn: update.sourceUrl,
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={jsonLd} />
      <p className="text-sm font-bold">
        <Link href="/" className="underline">Desk</Link>
        <span> / {update.platform}</span>
      </p>
      <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-3xl bg-white">
        <MediaVisual media={update.image} platform={update.platform} className="absolute inset-0" />
      </div>
      <p className="mt-2 text-xs text-ink/60">
        {update.image.credit}. {update.image.licence}{" "}
        <a className="underline" href={update.image.sourceUrl}>Image source</a>
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-extrabold uppercase">
        <span className="rounded-full bg-coral px-2 py-1 text-white">{channelLabel(update.channel)}</span>
        <span className="rounded-full bg-sun px-2 py-1">{regionLabel(update.region)}</span>
        <span className="rounded-full bg-mint px-2 py-1">Verified</span>
      </div>
      <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">{update.title}</h1>
      <p className="mt-3 text-sm font-semibold text-ink/70">
        <time dateTime={update.date}>{formatLaunchDate(update)}</time>
        {" · "}
        {update.platform}
      </p>
      <ul className="mt-5 list-disc space-y-2 pl-5 leading-7">
        {update.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {update.regionNote ? <p className="mt-4 text-sm leading-6 text-ink/80">{update.regionNote}</p> : null}
      <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer" className="sticker mt-6 inline-flex rounded-full bg-ink px-5 py-2 font-extrabold text-white">
        {update.sourceName}
      </a>
      <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
        {platform ? (
          <Link href={`/platforms/${platform.slug}`} className="chip rounded-full bg-white px-3 py-1">{platform.name} directory</Link>
        ) : null}
        <Link href={`/?channel=${update.channel}`} className="chip rounded-full bg-white px-3 py-1">More {channelLabel(update.channel)}</Link>
        <Link href={`/?region=${update.region}`} className="chip rounded-full bg-white px-3 py-1">More in {regionLabel(update.region)}</Link>
      </div>
      {relatedGuides.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">Guides that use this</h2>
          <ul className="mt-3 space-y-2">
            {relatedGuides.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/learn/${guide.slug}`} className="font-bold text-violet underline">{guide.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className="sticker mt-10 rounded-3xl bg-white p-5">
        <h2 className="font-display text-2xl font-bold">Know about the next one first</h2>
        <div className="mt-3">
          <NewsletterForm variant="compact" />
        </div>
      </section>
    </main>
  );
}
