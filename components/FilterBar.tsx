import Link from "next/link";
import { channels } from "@/config/site";

function hrefFor(channel?: string, country?: string) {
  const params = new URLSearchParams();
  if (channel) params.set("channel", channel);
  if (country) params.set("country", country);
  const query = params.toString();
  return query ? `/updates?${query}` : "/updates";
}

export default function FilterBar({
  channel,
  country,
  countries,
}: {
  channel?: string;
  country?: string;
  countries: string[];
}) {
  const activeChannels = channels;

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-ink/60">Channel</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Link
            href={hrefFor(undefined, country)}
            className={`chip rounded-full px-3 py-1 text-sm font-bold ${channel ? "bg-white" : "bg-ink text-white"}`}
            aria-current={channel ? undefined : "true"}
          >
            All
          </Link>
          {activeChannels.map((item) => (
            <Link
              key={item.slug}
              href={hrefFor(item.slug, country)}
              className={`chip rounded-full px-3 py-1 text-sm font-bold ${
                channel === item.slug ? "bg-coral text-white" : "bg-white"
              }`}
              aria-current={channel === item.slug ? "true" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-ink/60">Country</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Link
            href={hrefFor(channel, undefined)}
            className={`chip rounded-full px-3 py-1 text-sm font-bold ${country ? "bg-white" : "bg-ink text-white"}`}
          >
            All
          </Link>
          {countries.map((item) => (
            <Link
              key={item}
              href={hrefFor(channel, item)}
              className={`chip rounded-full px-3 py-1 text-sm font-bold ${
                country === item ? "bg-sun text-ink" : "bg-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
