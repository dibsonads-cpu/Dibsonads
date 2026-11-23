import { updates } from "@/lib/data";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{siteConfig.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{siteConfig.tagline}</p>
      </header>

      <div className="space-y-6">
        {updates.map((update) => (
          <article key={update.slug} className="border rounded-lg p-4 hover:shadow-md transition">
            <div className="flex gap-2 mb-2">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{update.country}</span>
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{update.channel}</span>
            </div>
            <h2 className="text-xl font-semibold">
              <Link href={`/updates/${update.slug}`} className="hover:underline">
                {update.title}
              </Link>
            </h2>
            <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
              {update.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <a
              href={update.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline"
            >
              Read Official Article ↗
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
