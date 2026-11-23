"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import LaunchCard from "@/components/launch/LaunchCard";
import NewsletterForm from "@/components/NewsletterForm";
import { feedChannels, feedRegions } from "@/lib/taxonomy";
import { launchPlatforms, launchYears, type Launch } from "@/lib/updates";

type Filters = {
  channel: string;
  platform: string;
  month: string;
  year: string;
  region: string;
};

const months = [
  ["1", "Jan"],
  ["2", "Feb"],
  ["3", "Mar"],
  ["4", "Apr"],
  ["5", "May"],
  ["6", "Jun"],
  ["7", "Jul"],
  ["8", "Aug"],
  ["9", "Sep"],
  ["10", "Oct"],
  ["11", "Nov"],
  ["12", "Dec"],
] as const;

function matches(update: Launch, filters: Filters) {
  const month = String(Number(update.date.slice(5, 7)));
  const year = update.date.slice(0, 4);
  if (filters.channel && update.channel !== filters.channel) return false;
  if (filters.platform && update.platform !== filters.platform) return false;
  if (filters.month && month !== filters.month) return false;
  if (filters.year && year !== filters.year) return false;
  if (filters.region && update.region !== filters.region) return false;
  return true;
}

export default function LaunchFeed({
  launches,
  initialFilters,
}: {
  launches: Launch[];
  initialFilters: Filters;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [filters, setFilters] = useState(initialFilters);
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [trayIds, setTrayIds] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [trayOpen, setTrayOpen] = useState(false);

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const visible = useMemo(
    () => launches.filter((update) => matches(update, filters)),
    [launches, filters],
  );
  const activeCount = Object.values(filters).filter(Boolean).length;
  const platforms = launchPlatforms();
  const years = launchYears();

  function write(next: Filters) {
    setFilters(next);
    const params = new URLSearchParams();
    (Object.entries(next) as [keyof Filters, string][]).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    const query = params.toString();
    const href = query ? `${pathname}?${query}` : pathname;
    window.history.replaceState(null, "", href);
    router.replace(href, { scroll: false });
  }

  function toggleFilter(key: keyof Filters, value: string) {
    write({ ...filters, [key]: filters[key] === value ? "" : value });
  }

  function toggleOpen(id: string) {
    setOpenIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function toggleTray(id: string) {
    setTrayIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  const tray = trayIds
    .map((id) => launches.find((update) => update.id === id))
    .filter((update): update is Launch => Boolean(update));

  useEffect(() => {
    if (!trayOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setTrayOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [trayOpen]);

  return (
    <div className={tray.length > 0 ? "pb-24" : ""}>
      <div className="border-b-[3px] border-ink bg-paper/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <button
            type="button"
            className="chip rounded-full bg-white px-3 py-1 text-sm font-extrabold md:hidden"
            aria-expanded={filtersOpen}
            onClick={() => setFiltersOpen((open) => !open)}
          >
            Filters{activeCount ? ` · ${activeCount}` : ""}
          </button>
          <p className="text-sm font-extrabold">
            {visible.length} launch{visible.length === 1 ? "" : "es"}
          </p>
          {activeCount > 0 ? (
            <button type="button" onClick={() => write({ channel: "", platform: "", month: "", year: "", region: "" })} className="text-sm font-extrabold text-magenta underline">
              Clear all
            </button>
          ) : (
            <span className="text-sm text-ink/50">Stack any mix</span>
          )}
        </div>
        <div className={`${filtersOpen ? "block" : "hidden"} space-y-3 px-4 pb-4 md:block`}>
          <div className="mx-auto max-w-6xl space-y-3">
            <ChipRow label="Channel" options={feedChannels.map((item) => [item.id, item.label])} active={filters.channel} onPick={(value) => toggleFilter("channel", value)} />
            <ChipRow label="Platform" options={platforms.map((item) => [item, item])} active={filters.platform} onPick={(value) => toggleFilter("platform", value)} />
            <ChipRow label="Month" options={months.map(([id, label]) => [id, label])} active={filters.month} onPick={(value) => toggleFilter("month", value)} />
            <ChipRow label="Year" options={years.map((year) => [year, year])} active={filters.year} onPick={(value) => toggleFilter("year", value)} />
            <ChipRow label="Region" options={feedRegions.map((item) => [item.id, item.label])} active={filters.region} onPick={(value) => toggleFilter("region", value)} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6">
        {visible.length === 0 ? (
          <p className="rounded-[28px] border-[3px] border-ink bg-sun p-6 font-display text-3xl font-bold shadow-sticker">
            Nothing in that mix yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((update, index) => (
              <div key={update.id}>
                <LaunchCard
                  update={update}
                  expanded={openIds.includes(update.id)}
                  pinned={trayIds.includes(update.id)}
                  onToggle={() => toggleOpen(update.id)}
                  onPin={() => toggleTray(update.id)}
                />
                {index === 2 ? (
                  <aside className="mt-4 rounded-[28px] border-[3px] border-ink bg-grape p-5 text-white shadow-sticker">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-sun">Know first</p>
                    <h2 className="mt-2 font-display text-3xl font-bold">The Friday note, before the group chat.</h2>
                    <p className="mt-2 text-sm text-white/80">New verified launches, once a week, on Substack. We do not keep the address.</p>
                    <div className="mt-4">
                      <NewsletterForm variant="band" />
                    </div>
                  </aside>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>

      {tray.length > 0 ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t-[3px] border-ink bg-ink text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <p className="font-extrabold">{tray.length} in the reading tray</p>
            <div className="flex gap-2">
              <button type="button" className="chip rounded-full bg-sun px-3 py-1 text-sm font-extrabold text-ink" onClick={() => setTrayOpen(true)}>
                Read side by side
              </button>
              <button type="button" className="chip rounded-full bg-white px-3 py-1 text-sm font-extrabold text-ink" onClick={() => setTrayIds([])}>
                Clear tray
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {trayOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-3 sm:items-center" role="dialog" aria-modal="true" aria-label="Reading tray">
          <div className="max-h-[90vh] w-full max-w-6xl overflow-auto rounded-[28px] border-[3px] border-ink bg-paper p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-display text-3xl font-bold">Side by side</h2>
              <button type="button" className="chip rounded-full bg-ink px-3 py-1 text-sm font-extrabold text-white" onClick={() => setTrayOpen(false)}>
                Close
              </button>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {tray.map((update) => (
                <LaunchCard
                  key={update.id}
                  update={update}
                  expanded
                  pinned
                  compact
                  onToggle={() => toggleOpen(update.id)}
                  onPin={() => toggleTray(update.id)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ChipRow({
  label,
  options,
  active,
  onPick,
}: {
  label: string;
  options: (readonly [string, string])[];
  active: string;
  onPick: (value: string) => void;
}) {
  return (
    <div className="flex items-start gap-3">
      <p className="w-20 shrink-0 pt-1 text-[11px] font-extrabold uppercase tracking-wide text-ink/50">{label}</p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {options.map(([id, name]) => (
          <button
            key={id}
            type="button"
            aria-pressed={active === id}
            onClick={() => onPick(id)}
            className={`chip shrink-0 rounded-full px-3 py-1 text-sm font-bold ${active === id ? "bg-ink text-white" : "bg-white"}`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

