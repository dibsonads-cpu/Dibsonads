"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MediaVisual from "@/components/feed/MediaVisual";
import SwipeDeck from "@/components/feed/SwipeDeck";
import { coverageFlag } from "@/lib/flags";
import { channelLabel, feedChannels, feedRegions, regionLabel } from "@/lib/taxonomy";
import { formatLaunchDate, launchPlatforms, type Launch } from "@/lib/updates";

const SAVED = "dibsonads-saved";

type Filters = {
  channel: string;
  platform: string;
  range: string;
  region: string;
  view: string;
  item: string;
};

function readSaved() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVED) || "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [] as string[];
  }
}

function inRange(date: string, range: string) {
  if (!range || range === "all") return true;
  const launch = new Date(`${date}T00:00:00Z`).getTime();
  const now = Date.now();
  if (range === "10") return launch >= now - 10 * 86400000;
  if (range === "30") return launch >= now - 30 * 86400000;
  if (range === "year") return date.slice(0, 4) === String(new Date().getUTCFullYear());
  return true;
}

export default function ProductGrid({
  launches,
  initial,
}: {
  launches: Launch[];
  initial: Filters;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [filters, setFilters] = useState(initial);
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    setSaved(readSaved());
  }, []);

  useEffect(() => {
    setFilters(initial);
  }, [initial]);

  const visible = useMemo(
    () =>
      launches.filter((item) => {
        if (filters.channel && item.channel !== filters.channel) return false;
        if (filters.platform && item.platform !== filters.platform) return false;
        if (filters.region && item.region !== filters.region) return false;
        if (!inRange(item.date, filters.range)) return false;
        return true;
      }),
    [launches, filters],
  );

  const openIndex = visible.findIndex((item) => item.slug === filters.item);
  const open = openIndex >= 0 ? visible[openIndex] : undefined;

  function write(next: Filters) {
    setFilters(next);
    const params = new URLSearchParams();
    if (next.channel) params.set("channel", next.channel);
    if (next.platform) params.set("platform", next.platform);
    if (next.range) params.set("range", next.range);
    if (next.region) params.set("region", next.region);
    if (next.view === "swipe") params.set("view", "swipe");
    if (next.item) params.set("item", next.item);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function toggleSave(slug: string) {
    const next = saved.includes(slug) ? saved.filter((item) => item !== slug) : [...saved, slug];
    setSaved(next);
    localStorage.setItem(SAVED, JSON.stringify(next));
  }

  function step(delta: number) {
    if (!visible.length || openIndex < 0) return;
    const next = visible[(openIndex + delta + visible.length) % visible.length];
    write({ ...filters, item: next.slug });
  }

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") write({ ...filters, item: "" });
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const platforms = launchPlatforms();

  return (
    <div className="mx-auto max-w-[1440px] px-3 py-4 sm:px-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">New launches</h1>
          <p className="mt-1 text-sm text-ink/60">{visible.length} pieces</p>
        </div>
        <button
          type="button"
          onClick={() => write({ ...filters, view: filters.view === "swipe" ? "" : "swipe", item: "" })}
          className="min-h-11 rounded-full bg-white px-4 text-sm font-semibold shadow-sm"
        >
          {filters.view === "swipe" ? "Grid view" : "Swipe mode"}
        </button>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        <Select label="Channel" value={filters.channel} onChange={(channel) => write({ ...filters, channel, item: "" })} options={[["", "All channels"], ...feedChannels.map((item) => [item.id, item.label] as [string, string])]} />
        <Select label="Platform" value={filters.platform} onChange={(platform) => write({ ...filters, platform, item: "" })} options={[["", "All platforms"], ...platforms.map((item) => [item, item] as [string, string])]} />
        <Select label="Time" value={filters.range} onChange={(range) => write({ ...filters, range, item: "" })} options={[["", "Any time"], ["10", "Last 10 days"], ["30", "Last 30 days"], ["year", "This year"]]} />
        <Select label="Region" value={filters.region} onChange={(region) => write({ ...filters, region, item: "" })} options={[["", "All regions"], ...feedRegions.map((item) => [item.id, item.label] as [string, string])]} />
      </div>

      {filters.view === "swipe" ? (
        <SwipeDeck launches={visible} />
      ) : (
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-4 min-[1440px]:grid-cols-5">
          {visible.map((item) => (
            <li key={item.slug} className="min-w-0">
              <article className="group relative flex h-full flex-col bg-white">
                <button type="button" onClick={() => write({ ...filters, item: item.slug })} className="block min-w-0 text-left">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f3f3]">
                    <MediaVisual media={item.image} platform={item.platform} className="absolute inset-0" />
                  </div>
                  <h2 className="mt-3 line-clamp-2 px-1 text-sm font-semibold leading-snug">{item.title}</h2>
                  <p className="mt-1 px-1 text-xs text-ink/60">
                    {item.platform} · {channelLabel(item.channel)}
                  </p>
                  <p className="mt-0.5 px-1 pb-3 text-xs text-ink/50">
                    {formatLaunchDate(item)} · {coverageFlag(item.coverage, item.countries, item.region)} {regionLabel(item.region)}
                  </p>
                </button>
                <button
                  type="button"
                  aria-label={saved.includes(item.slug) ? "Remove from saved" : "Save"}
                  aria-pressed={saved.includes(item.slug)}
                  onClick={() => toggleSave(item.slug)}
                  className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-lg shadow-sm"
                >
                  {saved.includes(item.slug) ? "♥" : "♡"}
                </button>
              </article>
            </li>
          ))}
        </ul>
      )}

      {visible.length === 0 ? <p className="mt-8 text-sm">Nothing matches those filters.</p> : null}

      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-labelledby="quick-title">
          <div className="grid max-h-[100dvh] w-full max-w-5xl overflow-y-auto bg-white sm:max-h-[92vh] sm:grid-cols-2">
            <div className="relative min-h-[240px] bg-[#f3f3f3] sm:min-h-[520px]">
              <MediaVisual media={open.image} platform={open.platform} className="absolute inset-0" />
              <button type="button" onClick={() => step(-1)} className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl shadow" aria-label="Previous launch">
                ‹
              </button>
              <button type="button" onClick={() => step(1)} className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl shadow" aria-label="Next launch">
                ›
              </button>
            </div>
            <div className="flex flex-col gap-4 p-5 sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {open.platform} · {channelLabel(open.channel)} · {formatLaunchDate(open)} · {regionLabel(open.region)}
                </p>
                <button type="button" onClick={() => write({ ...filters, item: "" })} className="min-h-11 shrink-0 px-2 text-sm font-semibold">
                  Close
                </button>
              </div>
              <h2 id="quick-title" className="font-display text-3xl font-bold leading-tight">{open.title}</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
                {open.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="text-xs leading-5 text-ink/60">
                {open.image.credit}. {open.image.licence}{" "}
                <a className="underline" href={open.image.sourceUrl}>Credit link</a>
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <a href={open.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white">
                  Read source
                </a>
                <button type="button" onClick={() => toggleSave(open.slug)} className="inline-flex min-h-12 items-center rounded-full border border-ink/15 px-5 text-sm font-semibold">
                  {saved.includes(open.slug) ? "Saved" : "Save"}
                </button>
                <Link href={`/updates/${open.slug}`} className="inline-flex min-h-12 items-center px-3 text-sm font-semibold underline">
                  Open page
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
}) {
  return (
    <label className="min-w-[140px] flex-1 text-xs font-semibold sm:max-w-[220px]">
      {label}
      <select className="mt-1 min-h-11 w-full rounded-full border border-black/10 bg-white px-3 text-sm" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(([id, name]) => (
          <option key={id || "all"} value={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}
