"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MediaVisual from "@/components/feed/MediaVisual";
import { caseOptions, type CaseStudy } from "@/lib/cases";
import { channelLabel } from "@/lib/taxonomy";

type Filters = { industry: string; channel: string; country: string };

export default function CaseGrid({ studies, initial }: { studies: CaseStudy[]; initial: Filters }) {
  const router = useRouter();
  const pathname = usePathname();
  const [filters, setFilters] = useState(initial);

  const visible = useMemo(
    () =>
      studies.filter((item) => {
        if (filters.industry && item.industry !== filters.industry) return false;
        if (filters.channel && item.channel !== filters.channel) return false;
        if (filters.country && item.country !== filters.country) return false;
        return true;
      }),
    [studies, filters],
  );

  function write(next: Filters) {
    setFilters(next);
    const params = new URLSearchParams();
    if (next.industry) params.set("industry", next.industry);
    if (next.channel) params.set("channel", next.channel);
    if (next.country) params.set("country", next.country);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <>
      <div className="mb-5 flex flex-wrap gap-2">
        <Select label="Industry" value={filters.industry} onChange={(industry) => write({ ...filters, industry })} options={[["", "All industries"], ...caseOptions("industry").map((item) => [item, item] as [string, string])]} />
        <Select label="Channel" value={filters.channel} onChange={(channel) => write({ ...filters, channel })} options={[["", "All channels"], ...caseOptions("channel").map((item) => [item, channelLabel(item)] as [string, string])]} />
        <Select label="Country" value={filters.country} onChange={(country) => write({ ...filters, country })} options={[["", "All countries"], ...caseOptions("country").map((item) => [item, item] as [string, string])]} />
      </div>
      <p className="mb-3 text-sm text-ink/60">{visible.length} case studies</p>
      {visible.length === 0 ? <p className="text-sm">Nothing matches those filters.</p> : null}
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {visible.map((item) => (
          <li key={item.slug}>
            <Link href={`/cases/${item.slug}`} className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 shadow-[0_10px_28px_rgba(20,26,42,0.12)]" style={{ background: item.tint }}>
              <div className="relative aspect-[8/5] bg-white">
                <MediaVisual media={item.image} platform={item.platform} className="absolute inset-0" />
              </div>
              <div className="p-3 text-navy">
                <h2 className="line-clamp-3 text-[15px] font-semibold leading-snug">{item.title}</h2>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-navy/70">{item.brand} · {item.platform}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
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
