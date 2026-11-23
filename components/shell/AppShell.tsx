"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NewsletterForm from "@/components/NewsletterForm";

const tabs = [
  { href: "/", label: "Feed" },
  { href: "/map", label: "Map" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/cases", label: "Cases" },
  { href: "/platforms", label: "Platforms" },
  { href: "/learn", label: "Learn" },
  { href: "/saved", label: "Saved" },
];

const phoneTabs = [
  { href: "/", label: "Feed" },
  { href: "/map", label: "Map" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/cases", label: "Cases" },
  { href: "/learn", label: "Learn" },
];

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "Feed") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" {...common} />
      </svg>
    );
  }
  if (name === "Map") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M4 7l5-2 6 2 5-2v12l-5 2-6-2-5 2V7z" {...common} />
      </svg>
    );
  }
  if (name === "Dashboard") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M5 19V10M12 19V5M19 19v-7" {...common} />
      </svg>
    );
  }
  if (name === "Platforms") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" {...common} />
      </svg>
    );
  }
  if (name === "Cases") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M7 4h10a2 2 0 012 2v14l-4-2-3 2-3-2-4 2V6a2 2 0 012-2z" {...common} />
      </svg>
    );
  }
  if (name === "More") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M6 12h.01M12 12h.01M18 12h.01" {...common} />
      </svg>
    );
  }
  if (name === "Learn") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M4 6.5A2.5 2.5 0 016.5 4H20v14H6.5A2.5 2.5 0 004 20.5v-14z" {...common} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M12 19s-7-4.4-7-9a4 4 0 017-2 4 4 0 017 2c0 4.6-7 9-7 9z" {...common} />
    </svg>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  function active(href: string) {
    if (href === "/") return path === "/" || path.startsWith("/updates");
    return path === href || path.startsWith(`${href}/`);
  }

  return (
    <>
      <div className="md:pl-60">
        <header className="flex items-center justify-between px-4 py-3 md:hidden">
          <Link href="/" className="text-lg font-extrabold tracking-tight">
            Dibs
          </Link>
          <button type="button" onClick={() => setSubscribeOpen(true)} className="rounded-full px-3 py-2 text-sm font-semibold text-navy">
            Subscribe
          </button>
        </header>
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col bg-navy px-4 py-6 text-white md:flex">
          <Link href="/" className="px-2 font-display text-2xl font-bold">
            Dibs On Ads
          </Link>
          <p className="mt-1 px-2 text-sm text-white/70">Know first.</p>
          <nav className="mt-8 flex flex-1 flex-col gap-1" aria-label="Primary">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active(tab.href) ? "page" : undefined}
                className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-base font-semibold ${
                  active(tab.href) ? "bg-white text-navy" : "text-white/85 hover:bg-white/10"
                }`}
              >
                <Icon name={tab.label} />
                {tab.label}
              </Link>
            ))}
          </nav>
          <button type="button" onClick={() => setSubscribeOpen(true)} className="rounded-2xl bg-white/10 px-3 py-3 text-left text-sm font-semibold">
            Get the Friday note
          </button>
        </aside>
        <div className="min-h-screen pb-24 md:pb-8">{children}</div>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-6 border-t border-white/10 bg-navy text-white md:hidden" aria-label="Primary">
        {phoneTabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active(tab.href) ? "page" : undefined}
            className={`flex min-h-16 flex-col items-center justify-center gap-0.5 px-1 text-[10px] font-semibold ${
              active(tab.href) ? "text-coral" : "text-white/75"
            }`}
          >
            <Icon name={tab.label} />
            {tab.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => setMoreOpen(true)}
          className={`flex min-h-16 flex-col items-center justify-center gap-0.5 px-1 text-[10px] font-semibold ${
            active("/platforms") || active("/saved") ? "text-coral" : "text-white/75"
          }`}
        >
          <Icon name="More" />
          More
        </button>
      </nav>
      {moreOpen ? (
        <div className="fixed inset-0 z-50 flex items-end bg-navy/50 p-4 md:hidden" role="dialog" aria-modal="true" aria-labelledby="more-title">
          <div className="w-full rounded-3xl bg-white p-4 text-ink shadow-xl">
            <h2 id="more-title" className="font-display text-2xl font-bold">More</h2>
            <div className="mt-3 grid gap-2">
              <Link href="/platforms" onClick={() => setMoreOpen(false)} className="min-h-12 rounded-2xl bg-paper px-4 py-3 font-semibold">Platforms</Link>
              <Link href="/saved" onClick={() => setMoreOpen(false)} className="min-h-12 rounded-2xl bg-paper px-4 py-3 font-semibold">Saved</Link>
            </div>
            <button type="button" className="mt-3 text-sm font-semibold" onClick={() => setMoreOpen(false)}>Close</button>
          </div>
        </div>
      ) : null}
      {subscribeOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-navy/50 p-4 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="subscribe-title">
          <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-xl">
            <h2 id="subscribe-title" className="font-display text-2xl font-bold">Know first</h2>
            <p className="mt-1 text-sm text-ink/70">The Friday note on Substack. We do not store the address.</p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
            <button type="button" className="mt-3 text-sm font-semibold" onClick={() => setSubscribeOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
