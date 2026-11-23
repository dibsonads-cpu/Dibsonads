"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { numericToAlpha2, countryNames } from "@/lib/country-ids";
import { flagEmoji } from "@/lib/flags";
import { formatLaunchDate, type Launch } from "@/lib/updates";

const geoUrl = "/maps/countries-110m.json";

export default function WorldMap({ launches }: { launches: Launch[] }) {
  const [selected, setSelected] = useState<string>("global");
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const launch of launches) {
      for (const code of launch.countries) map.set(code, (map.get(code) ?? 0) + 1);
    }
    return map;
  }, [launches]);
  const max = Math.max(1, ...counts.values());

  const buckets = [
    { id: "global", label: "Global", items: launches.filter((item) => item.coverage === "global") },
    { id: "multi", label: "Multi-region", items: launches.filter((item) => item.coverage === "multi" || item.region === "multiple") },
    { id: "eu", label: "Europe-wide", items: launches.filter((item) => item.region === "eu" && item.countries.length === 0) },
    { id: "apac", label: "APAC-wide", items: launches.filter((item) => item.region === "apac" && item.countries.length === 0) },
    { id: "mea", label: "Middle East & Africa", items: launches.filter((item) => item.region === "mea") },
    { id: "latam", label: "Latin America", items: launches.filter((item) => item.region === "latam") },
    { id: "unknown", label: "Country not stated", items: launches.filter((item) => item.coverage === "unknown") },
  ];

  const countryItems =
    selected.length === 2 ? launches.filter((item) => item.countries.includes(selected)) : [];
  const bucket = buckets.find((item) => item.id === selected);
  const visible = bucket ? bucket.items : countryItems;
  const heading = bucket
    ? bucket.label
    : `${flagEmoji(selected)} ${countryNames[selected] ?? selected}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          {buckets.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item.id)}
              className={`rounded-full px-3 py-2 text-sm font-semibold ${selected === item.id ? "bg-navy text-white" : "bg-white"}`}
            >
              {item.label} · {item.items.length}
            </button>
          ))}
        </div>
        <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-sm">
          <ComposableMap projection="geoEqualEarth" height={420} style={{ width: "100%", height: "auto" }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const rawId = geo.id != null ? String(geo.id) : "";
                  const code = numericToAlpha2[rawId.padStart(3, "0")] ?? numericToAlpha2[rawId];
                  const count = code ? counts.get(code) ?? 0 : 0;
                  const active = Boolean(code && selected === code);
                  const fill = active ? "#d7263d" : count === 0 ? "#e7e2d8" : `rgba(215, 38, 61, ${0.25 + (count / max) * 0.75})`;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke="#ffffff"
                      strokeWidth={0.6}
                      onClick={() => code && setSelected(code)}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
        <p className="mt-2 text-xs text-ink/60">Shading counts launches that name a country. Global and Europe-wide items stay in the buttons, so they do not paint the whole map.</p>
      </div>
      <div>
        <h2 className="font-display text-3xl font-bold">{heading}</h2>
        <p className="mt-1 text-sm text-ink/70">{visible.length} launch{visible.length === 1 ? "" : "es"}</p>
        <ul className="mt-4 space-y-3">
          {visible.length === 0 ? <li className="rounded-3xl bg-white p-4 text-sm">Nothing filed here yet.</li> : null}
          {visible.map((item) => (
            <li key={item.slug} className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-ink/60">{item.platform} · {formatLaunchDate(item)}</p>
              <Link href={`/updates/${item.slug}`} className="font-display text-xl font-bold leading-tight">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
