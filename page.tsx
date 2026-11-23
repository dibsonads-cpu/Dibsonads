"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { updates, type ChannelGroup, type Country } from "@/lib/data";

const CHANNELS: (ChannelGroup | "All")[] = [
  "All",
  "Paid Social",
  "Search & AI",
  "Programmatic & DSP",
  "Retail Media",
  "Publisher & Ad Tech",
  "CTV & Audio",
  "Offline",
];

const COUNTRIES: (Country | "All")[] = ["All", "UK", "US", "EU", "Global"];

export default function HomePage() {
  const [channel, setChannel] = useState<ChannelGroup | "All">("All");
  const [country, setCountry] = useState<Country | "All">("All");

  const filtered = useMemo(() => {
    return updates.filter((u) => {
      const chOk = channel === "All" || u.channel === channel;
      const coOk = country === "All" || u.countries.includes(country);
      return chOk && coOk;
    });
  }, [channel, country]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{siteConfig.name}</h1>
        <p className="text-slate-600 mt-1 text-lg">{siteConfig.tagline}</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-4">
        {COUNTRIES.map((c) => (
          <button
            key={c}
            onClick={() => setCountry(c)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${
              country === c
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {CHANNELS.map((c) => (
          <button
            key={c}
            onClick={() => setChannel(c)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${
              channel === c
                ? "bg-blue-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filtered.map((u) => {
          const ogUrl = `/api/og?title=${encodeURIComponent(u.headline)}&platform=${encodeURIComponent(
            u.platform
          )}&country=${u.countries[0]}&channel=${encodeURIComponent(u.channel)}`;
          return (
            <article
              key={u.slug}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row">
                <img
                  src={ogUrl}
                  alt=""
                  className="w-full sm:w-48 h-36 object-cover bg-slate-100"
                />
                <div className="p-5 flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {u.countries.map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {u.channel}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold leading-snug mb-3">
                    <Link href={`/updates/${u.slug}`} className="hover:underline">
                      {u.headline}
                    </Link>
                  </h2>
                  <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc list-inside">
                    {u.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/learn/${siteConfig.channels.find((c) => c.channel === u.channel)?.slug || "programmatic-dsp"}`}
                    className="text-sm text-blue-600 hover:underline mb-3 inline-block"
                  >
                    New to {u.channel}? Read the 3-min guide →
                  </Link>
                  <div>
                    <a
                      href={u.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800"
                    >
                      Read Official Article ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-slate-500">No updates match the selected filters.</p>
        )}
      </div>

      <section id="subscribe" className="mt-12 bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-2">Get updates by email</h3>
        <p className="text-sm text-slate-600 mb-4">
          Country and channel-segmented digests of verified paid media launches.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-2"
          action={siteConfig.newsletter.type === "substack" ? siteConfig.newsletter.url : siteConfig.newsletter.apiEndpoint}
          method={siteConfig.newsletter.type === "substack" ? "get" : "post"}
          target={siteConfig.newsletter.type === "substack" ? "_blank" : undefined}
        >
          <input
            type="email"
            placeholder="Work email"
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
