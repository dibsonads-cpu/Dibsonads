"use client";

import Link from "next/link";
import MediaVisual from "@/components/feed/MediaVisual";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { marketsLine } from "@/lib/markets";
import { channelLabel } from "@/lib/taxonomy";
import { formatLaunchDate, type Launch } from "@/lib/updates";

const SAVED = "dibsonads-saved";
const HINT = "dibsonads-hint-seen";
const VIEW = "dibsonads-feed-view";

function readSaved() {
  if (typeof window === "undefined") return [] as string[];
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVED) || "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export default function SwipeDeck({ launches, platform }: { launches: Launch[]; platform?: string }) {
  const reduce = useReducedMotion();
  const deck = useMemo(
    () => (platform ? launches.filter((item) => item.platform === platform) : launches),
    [launches, platform],
  );
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [hint, setHint] = useState(false);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    setSaved(readSaved());
    setHint(localStorage.getItem(HINT) !== "1");
    setGrid(localStorage.getItem(VIEW) === "grid");
  }, []);

  useEffect(() => {
    setIndex(0);
    setExpanded(false);
  }, [platform]);

  const current = deck[index];

  function persist(next: string[]) {
    setSaved(next);
    localStorage.setItem(SAVED, JSON.stringify(next));
  }

  function skip() {
    setExpanded(false);
    setIndex((value) => Math.min(deck.length, value + 1));
  }

  function save() {
    if (!current) return;
    if (!saved.includes(current.slug)) persist([...saved, current.slug]);
    skip();
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      if (grid) return;
      if (event.key === "ArrowLeft") skip();
      if (event.key === "ArrowRight") save();
      if (event.key === "ArrowUp") setExpanded(true);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // save/skip close over the latest card; rebinding each render keeps the keys honest.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, current, saved, deck.length]);

  function setView(next: boolean) {
    setGrid(next);
    localStorage.setItem(VIEW, next ? "grid" : "swipe");
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-2 md:max-w-xl md:py-8">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-ink/70">
          {platform ? platform : "Latest launches"}
          {platform ? (
            <Link href="/" className="ml-2 underline">
              Clear
            </Link>
          ) : null}
        </p>
        <button
          type="button"
          onClick={() => setView(!grid)}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm"
        >
          {grid ? "Swipe view" : "List view"}
        </button>
      </div>

      {grid ? (
        <ul className="space-y-3">
          {deck.map((item) => (
            <li key={item.slug} className="flex gap-3 rounded-3xl bg-white p-3 shadow-sm">
              <div className="relative aspect-[8/5] w-28 shrink-0 overflow-hidden rounded-2xl">
                <MediaVisual media={item.image} platform={item.platform} className="h-full w-full" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-ink/60">{item.platform} · {formatLaunchDate(item)}</p>
                <Link href={`/updates/${item.slug}`} className="font-display text-lg font-bold leading-tight">
                  {item.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : !current ? (
        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
          <h1 className="font-display text-3xl font-bold">You are caught up.</h1>
          <p className="mt-2 text-ink/70">That is every launch in this stack.</p>
          <button type="button" className="mt-5 rounded-full bg-navy px-5 py-3 font-semibold text-white" onClick={() => setIndex(0)}>
            Start again
          </button>
        </div>
      ) : (
        <>
          <h1 className="sr-only">{current.title}</h1>
          <motion.article
            key={current.slug}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > 110) save();
              else if (info.offset.x < -110) skip();
            }}
            className="overflow-hidden rounded-[28px] bg-white shadow-xl"
          >
            <button type="button" className="block w-full text-left" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
              <div className="relative aspect-[8/5] w-full">
                <MediaVisual media={current.image} platform={current.platform} className="absolute inset-0" />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide">
                  <span className="rounded-full bg-coral px-2 py-1 text-white">{channelLabel(current.channel)}</span>
                  <span className="rounded-full bg-paper px-2 py-1">{current.platform}</span>
                </div>
                <p className="font-display text-3xl font-bold leading-tight">{current.headline}</p>
                <p className="text-sm leading-5">Live in {marketsLine(current.markets)}</p>
                <ul className="list-disc space-y-1 pl-5 text-base leading-6">
                  {current.bullets.slice(0, expanded ? current.bullets.length : 3).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {expanded ? (
                  <p className="text-sm leading-5 text-ink/70">
                    {current.regionNote ? `${current.regionNote} ` : ""}
                    Image: {current.image.credit}. {current.image.licence}
                    {current.image.sourceUrl ? (
                      <>
                        {" "}
                        <a className="underline" href={current.image.sourceUrl}>
                          Image source
                        </a>
                      </>
                    ) : null}
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-navy">Tap the card for the rest</p>
                )}
              </div>
            </button>
          </motion.article>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <button type="button" onClick={skip} className="min-h-14 rounded-2xl bg-white text-base font-bold shadow-sm">
              Skip
            </button>
            <button type="button" onClick={save} className="min-h-14 rounded-2xl bg-coral text-base font-bold text-white">
              {saved.includes(current.slug) ? "Saved" : "Save"}
            </button>
            <a href={current.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center rounded-2xl bg-navy px-2 text-center text-base font-bold text-white">
              Read source
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-ink/50">Arrow keys: left skip, right save, up more detail</p>
        </>
      )}

      {hint ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-navy/60 p-4 md:items-center" role="dialog" aria-labelledby="hint-title">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center">
            <h2 id="hint-title" className="font-display text-3xl font-bold">Swipe right to save, left to skip.</h2>
            <p className="mt-2 text-ink/70">Or use the buttons. You can switch to a list any time.</p>
            <button
              type="button"
              className="mt-5 min-h-12 w-full rounded-2xl bg-navy font-bold text-white"
              onClick={() => {
                localStorage.setItem(HINT, "1");
                setHint(false);
              }}
            >
              Got it
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
