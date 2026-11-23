"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { countryNames } from "@/lib/country-ids";
import { channelLabel, feedChannels, feedRegions, regionLabel } from "@/lib/taxonomy";
import { formatLaunchDate, launchPlatforms, launchYears, type Launch } from "@/lib/updates";

type Range = "10" | "30" | "month" | "custom";

export type DashState = {
  range: Range;
  month: string;
  year: string;
  channel: string;
  platform: string;
  region: string;
  exclude: string[];
};

const STORE = "dibsonads-dashboard";

function inRange(date: string, state: DashState, today: Date) {
  if (state.range === "custom") {
    return date.slice(0, 4) === state.year && String(Number(date.slice(5, 7))) === state.month;
  }
  const launch = new Date(`${date}T00:00:00Z`).getTime();
  if (state.range === "month") {
    const start = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1);
    return launch >= start;
  }
  const days = state.range === "30" ? 30 : 10;
  return launch >= today.getTime() - days * 24 * 60 * 60 * 1000;
}

function hidden(launch: Launch, exclude: string[]) {
  return exclude.some((rule) => {
    if (rule.startsWith("region:")) return launch.region === rule.slice(7);
    if (rule.startsWith("country:")) return launch.countries.includes(rule.slice(8));
    return false;
  });
}

export default function DashboardView({
  launches,
  initial,
  todayIso,
}: {
  launches: Launch[];
  initial: DashState;
  todayIso: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState(initial);
  const today = useMemo(() => new Date(`${todayIso}T12:00:00Z`), [todayIso]);
  const platforms = launchPlatforms();
  const years = launchYears();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const urlHas = window.location.search.length > 1;
    if (urlHas) return;
    const raw = localStorage.getItem(STORE);
    if (!raw) return;
    try {
      const saved = JSON.parse(raw) as DashState;
      if (saved?.range) setState(saved);
    } catch {
      /* ignore broken storage */
    }
  }, []);

  function write(next: DashState) {
    setState(next);
    localStorage.setItem(STORE, JSON.stringify(next));
    const params = new URLSearchParams();
    params.set("range", next.range);
    if (next.range === "custom") {
      if (next.month) params.set("month", next.month);
      if (next.year) params.set("year", next.year);
    }
    if (next.channel) params.set("channel", next.channel);
    if (next.platform) params.set("platform", next.platform);
    if (next.region) params.set("region", next.region);
    if (next.exclude.length) params.set("exclude", next.exclude.join(","));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function toggleExclude(rule: string) {
    const exclude = state.exclude.includes(rule) ? state.exclude.filter((item) => item !== rule) : [...state.exclude, rule];
    write({ ...state, exclude });
  }

  const filtered = launches.filter((launch) => {
    if (!inRange(launch.date, state, today)) return false;
    if (state.channel && launch.channel !== state.channel) return false;
    if (state.platform && launch.platform !== state.platform) return false;
    if (state.region && launch.region !== state.region) return false;
    if (hidden(launch, state.exclude)) return false;
    return true;
  });

  const byChannel = feedChannels.map((channel) => ({
    label: channel.label,
    count: filtered.filter((item) => item.channel === channel.id).length,
  }));
  const max = Math.max(1, ...byChannel.map((item) => item.count));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["10", "Last 10 days"],
            ["30", "Last 30 days"],
            ["month", "This month"],
            ["custom", "Pick a month"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => write({ ...state, range: id })}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${state.range === id ? "bg-navy text-white" : "bg-white"}`}
          >
            {label}
          </button>
        ))}
      </div>
      {state.range === "custom" ? (
        <div className="flex gap-2">
          <select className="rounded-2xl bg-white px-3 py-2" value={state.month} onChange={(event) => write({ ...state, month: event.target.value })} aria-label="Month">
            {Array.from({ length: 12 }, (_, index) => (
              <option key={index + 1} value={String(index + 1)}>
                {new Date(Date.UTC(2026, index, 1)).toLocaleString("en-GB", { month: "long", timeZone: "UTC" })}
              </option>
            ))}
          </select>
          <select className="rounded-2xl bg-white px-3 py-2" value={state.year} onChange={(event) => write({ ...state, year: event.target.value })} aria-label="Year">
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>
      ) : null}
      <div className="grid gap-3 md:grid-cols-3">
        <label className="text-sm font-semibold">
          Channel
          <select className="mt-1 w-full rounded-2xl bg-white px-3 py-3" value={state.channel} onChange={(event) => write({ ...state, channel: event.target.value })}>
            <option value="">All</option>
            {feedChannels.map((channel) => (
              <option key={channel.id} value={channel.id}>{channel.label}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Platform
          <select className="mt-1 w-full rounded-2xl bg-white px-3 py-3" value={state.platform} onChange={(event) => write({ ...state, platform: event.target.value })}>
            <option value="">All</option>
            {platforms.map((platform) => (
              <option key={platform}>{platform}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Region
          <select className="mt-1 w-full rounded-2xl bg-white px-3 py-3" value={state.region} onChange={(event) => write({ ...state, region: event.target.value })}>
            <option value="">All</option>
            {feedRegions.map((region) => (
              <option key={region.id} value={region.id}>{region.label}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <p className="text-sm font-semibold">Hide</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {feedRegions.map((region) => {
            const rule = `region:${region.id}`;
            const on = state.exclude.includes(rule);
            return (
              <button key={rule} type="button" aria-pressed={on} onClick={() => toggleExclude(rule)} className={`rounded-full px-3 py-2 text-sm font-semibold ${on ? "bg-coral text-white" : "bg-white"}`}>
                {on ? "Hiding" : "Hide"} {region.label}
              </button>
            );
          })}
          {["US", "GB", "CA", "IN", "AU"].map((code) => {
            const rule = `country:${code}`;
            const on = state.exclude.includes(rule);
            return (
              <button key={rule} type="button" aria-pressed={on} onClick={() => toggleExclude(rule)} className={`rounded-full px-3 py-2 text-sm font-semibold ${on ? "bg-coral text-white" : "bg-white"}`}>
                {on ? "Hiding" : "Hide"} {countryNames[code] ?? code}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-3xl bg-navy p-5 text-white">
          <p className="text-sm text-white/70">Launches</p>
          <p className="font-display text-4xl font-bold">{filtered.length}</p>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm sm:col-span-2">
          <p className="text-sm font-semibold">By channel</p>
          <div className="mt-3 space-y-2">
            {byChannel.map((item) => (
              <div key={item.label} className="grid grid-cols-[7rem_1fr_2rem] items-center gap-2 text-sm">
                <span>{item.label}</span>
                <span className="h-3 overflow-hidden rounded-full bg-paper">
                  <span className="block h-full rounded-full bg-coral" style={{ width: `${(item.count / max) * 100}%` }} />
                </span>
                <span className="text-right font-semibold">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="space-y-3">
        {filtered.map((item) => (
          <li key={item.slug} className="rounded-3xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-ink/60">
              {channelLabel(item.channel)} · {item.platform} · {regionLabel(item.region)} · {formatLaunchDate(item)}
            </p>
            <Link href={`/updates/${item.slug}`} className="font-display text-2xl font-bold leading-tight">
              {item.title}
            </Link>
          </li>
        ))}
        {filtered.length === 0 ? <li className="rounded-3xl bg-white p-5">Nothing in this window. Try 30 days.</li> : null}
      </ul>
    </div>
  );
}
