import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import NewsletterForm from "@/components/NewsletterForm";
import { siteConfig } from "@/config/site";
import { getGuide, guides } from "@/lib/learn";
import { getPlatform } from "@/lib/platforms";
import { getUpdate } from "@/lib/updates";
import { absoluteUrl, buildMetadata, formatDate } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((guide) => ({ topic: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const guide = getGuide(topic);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.description,
    path: `/learn/${guide.slug}`,
    kicker: "Learn paid ads",
    ogType: "article",
  });
}

export default async function LearnTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const guide = getGuide(topic);
  if (!guide) notFound();

  const url = absoluteUrl(`/learn/${guide.slug}`);
  const relatedUpdates = guide.relatedUpdateSlugs
    .map((slug) => getUpdate(slug))
    .filter((update) => update !== undefined);
  const relatedPlatforms = guide.relatedPlatformSlugs
    .map((slug) => getPlatform(slug))
    .filter((platform) => platform !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: guide.updated,
        dateModified: guide.updated,
        mainEntityOfPage: url,
        url,
        author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      },
      {
        "@type": "HowTo",
        name: guide.title,
        description: guide.description,
        step: guide.sections.map((section, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: section.heading,
          text: section.paragraphs.join(" "),
          url: `${url}#${section.id}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Learn", item: absoluteUrl("/learn") },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={jsonLd} />
      <p className="text-sm font-bold">
        <Link href="/learn" className="underline">Learn</Link>
        <span> / {guide.title.split(":")[0]}</span>
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">{guide.title}</h1>
      <p className="mt-3 text-sm font-semibold text-ink/70">Updated {formatDate(guide.updated)}</p>
      <p className="mt-5 text-lg leading-7">{guide.intro}</p>

      <nav className="mt-6 flex flex-wrap gap-2" aria-label="On this page">
        {guide.sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="chip rounded-full bg-white px-3 py-1 text-sm font-bold">
            {section.heading}
          </a>
        ))}
      </nav>

      {(relatedUpdates.length > 0 || relatedPlatforms.length > 0) && (
        <aside className="sticker mt-8 rounded-3xl bg-sun/70 p-5">
          <h2 className="font-display text-2xl font-bold">Linked from the tracker and directory</h2>
          <ul className="mt-3 space-y-2 text-sm font-bold">
            {relatedUpdates.map((update) => (
              <li key={update.slug}>
                <Link href={`/updates/${update.slug}`} className="underline">
                  {update.title}
                </Link>
              </li>
            ))}
            {relatedPlatforms.map((platform) => (
              <li key={platform.slug}>
                <Link href={`/platforms/${platform.slug}`} className="underline">
                  {platform.name} platform page
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <article className="mt-8 space-y-8">
        {guide.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="font-display text-3xl font-bold">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-3 leading-7">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>

      <section className="mt-10">
        <h2 className="font-display text-3xl font-bold">FAQ</h2>
        <div className="mt-4 space-y-3">
          {guide.faqs.map((faq) => (
            <details key={faq.question} className="faq sticker rounded-2xl bg-white p-4">
              <summary className="flex items-center justify-between gap-4 font-bold">
                {faq.question}
                <span className="faq-plus text-xl leading-none transition-transform">+</span>
              </summary>
              <p className="mt-3 leading-7 text-ink/85">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">Sources</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {guide.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-violet underline">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="sticker mt-10 rounded-3xl bg-white p-5">
        <h2 className="font-display text-2xl font-bold">Take the next launch with you</h2>
        <div className="mt-3">
          <NewsletterForm variant="compact" />
        </div>
      </section>
    </main>
  );
}
