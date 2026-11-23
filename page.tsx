import SafeVideoPlayer from "@/components/SafeVideoPlayer";
import { videoObjectJsonLd } from "@/lib/video-schema";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getUpdate, getAllSlugs } from "@/lib/data";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const update = getUpdate(params.slug);
  if (!update) return {};
  return {
    title: update.headline,
    description: update.summary,
  };
}

export default function UpdatePage({ params }: { params: { slug: string } }) {
  const update = getUpdate(params.slug);
  if (!update) notFound();

  const ogUrl = `/api/og?title=${encodeURIComponent(update.headline)}&platform=${encodeURIComponent(
    update.platform
  )}&country=${update.countries[0]}&channel=${encodeURIComponent(update.channel)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: update.headline,
    datePublished: update.publishedAt,
    description: update.summary,
    author: { "@type": "Organization", name: "Ad Updates Tracker" },
    publisher: { "@type": "Organization", name: "Ad Updates Tracker" },
    mainEntityOfPage: `https://example.com/updates/${update.slug}`,
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-sm text-slate-500 mb-4">
        <a href="/" className="hover:underline">
          ← All updates
        </a>
      </nav>
      <img src={ogUrl} alt="" className="w-full h-48 object-cover rounded-xl mb-6 bg-slate-100" />
      {update.video && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectJsonLd(update.video, `${siteConfig.domain}/updates/${update.slug}`)) }}
          />
          <div className="mb-6">
            <SafeVideoPlayer video={update.video} />
          </div>
        </>
      )}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {update.countries.map((c) => (
          <span
            key={c}
            className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full"
          >
            {c}
          </span>
        ))}
        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
          {update.channel}
        </span>
      </div>
      <h1 className="text-3xl font-bold leading-tight mb-4">{update.headline}</h1>
      <ul className="text-base text-slate-800 space-y-2 mb-4 list-disc list-inside">
        {update.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <Link
        href={`/learn/${siteConfig.channels.find((c) => c.channel === update.channel)?.slug || "programmatic-dsp"}`}
        className="text-sm text-blue-600 hover:underline mb-6 inline-block"
      >
        New to {update.channel}? Read the 3-min guide →
      </Link>
      <div className="mb-4">
        <a
          href={update.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800"
        >
          Read Official Article ↗
        </a>
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Source: {update.sourceDomain} · Published {update.publishedAt}
      </p>
    </main>
  );
}
