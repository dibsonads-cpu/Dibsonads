import { updates } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function UpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = updates.find((u) => u.slug === slug);
  if (!update) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: update.title,
    datePublished: update.date,
    author: { "@type": "Organization", name: "Dibs On Ads" },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex gap-2 mb-4">
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{update.country}</span>
        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{update.channel}</span>
      </div>
      <h1 className="text-3xl font-bold mb-4">{update.title}</h1>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        {update.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <a
        href={update.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Read Official Article ↗
      </a>
    </main>
  );
}
