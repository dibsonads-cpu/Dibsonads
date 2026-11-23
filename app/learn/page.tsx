import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function LearnPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Learn Paid Ads</h1>
      <p className="text-gray-600 mb-8">Quick guides by channel.</p>
      <div className="grid gap-4">
        {siteConfig.channels.map((ch) => (
          <Link
            key={ch.slug}
            href={`/learn/${ch.slug}`}
            className="block border rounded-lg p-4 hover:shadow-md"
          >
            <h2 className="font-semibold">{ch.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
