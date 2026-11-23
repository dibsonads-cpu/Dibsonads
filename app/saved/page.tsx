"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatLaunchDate, updates } from "@/lib/updates";

const SAVED = "dibsonads-saved";

export default function SavedPage() {
  const [slugs, setSlugs] = useState<string[] | null>(null);

  useEffect(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem(SAVED) || "[]");
      setSlugs(Array.isArray(parsed) ? parsed : []);
    } catch {
      setSlugs([]);
    }
  }, []);

  function remove(slug: string) {
    const next = (slugs ?? []).filter((item) => item !== slug);
    setSlugs(next);
    localStorage.setItem(SAVED, JSON.stringify(next));
  }

  const items = (slugs ?? [])
    .map((slug) => updates.find((item) => item.slug === slug))
    .filter((item) => item !== undefined)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.headline.localeCompare(b.headline)));

  return (
    <main className="mx-auto max-w-xl px-4 py-6">
      <h1 className="font-display text-4xl font-bold">Saved</h1>
      {slugs === null ? <p className="mt-4">Loading…</p> : null}
      {slugs && items.length === 0 ? (
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
          <p className="font-display text-2xl font-bold">Nothing saved yet.</p>
          <p className="mt-2 text-ink/70">On the feed, swipe a card right or tap Save. It stays on this device. No account.</p>
          <Link href="/" className="mt-4 inline-flex min-h-12 items-center rounded-2xl bg-navy px-4 font-semibold text-white">
            Go to the feed
          </Link>
        </div>
      ) : null}
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item.slug} className="rounded-3xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-ink/60">{item.platform} · {formatLaunchDate(item)}</p>
            <Link href={`/updates/${item.slug}`} className="font-display text-2xl font-bold leading-tight">
              {item.title}
            </Link>
            <button type="button" onClick={() => remove(item.slug)} className="mt-3 inline-flex min-h-11 items-center rounded-full bg-paper px-4 text-sm font-semibold text-coral">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
