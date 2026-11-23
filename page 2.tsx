import Link from "next/link";
import { siteConfig } from "@/config/site";
import { learnGuides } from "@/lib/learn";

export default function LearnIndexPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Learn Paid Ads</h1>
      <p className="text-slate-600 mb-8 text-lg">
        Evergreen 3-minute guides by channel. What it is, how buying works, and key metrics.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {learnGuides.map((g) => (
          <Link
            key={g.slug}
            href={`/learn/${g.slug}`}
            className="block p-5 bg-white border border-slate-200 rounded-xl hover:shadow-md transition"
          >
            <h2 className="font-bold text-lg mb-1">{g.title}</h2>
            <p className="text-sm text-slate-600 line-clamp-2">{g.whatItIs}</p>
            <span className="text-sm text-blue-600 font-medium mt-2 inline-block">Read guide →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
