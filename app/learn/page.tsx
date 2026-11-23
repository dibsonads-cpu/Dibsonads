import Link from "next/link";
import { guides } from "@/lib/learn";
import { buildMetadata, formatDate } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Learn paid ads",
  description:
    "Practical guides to paid social, search and AI ads, TikTok, retail media, and programmatic buying. Written for people who traffic the campaigns.",
  path: "/learn",
  kicker: "Learn paid ads",
});

export default function LearnPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-extrabold uppercase tracking-wide text-violet">Learn paid ads</p>
      <h1 className="mt-2 font-display text-5xl font-bold leading-none">Guides you can brief from</h1>
      <p className="mt-3 max-w-2xl text-ink/80">
        One guide per channel, with the structure, the metrics, and the official limits we could verify. Adding another guide is a new entry in the content file.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/learn/${guide.slug}`} className="sticker rounded-3xl bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-wide text-coral">Updated {formatDate(guide.updated)}</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight">{guide.title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink/80">{guide.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
