import type { Metadata } from "next";
import FilterBar from "@/components/FilterBar";
import UpdateCard from "@/components/UpdateCard";
import { getChannel } from "@/config/site";
import { filterUpdates, updateCountries } from "@/lib/updates";
import { buildMetadata } from "@/lib/seo";

type Search = { channel?: string; country?: string };

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Search>;
}): Promise<Metadata> {
  const { channel, country } = await searchParams;
  const channelName = channel ? getChannel(channel)?.name : undefined;
  const bits = [channelName, country].filter(Boolean).join(" · ");
  const title = bits ? `${bits} ad launches` : "Verified ad launches";
  const description = bits
    ? `Verified paid media launches filtered to ${bits}. Each entry links to the official announcement.`
    : "Filter verified paid media launches by channel and country. Every entry links to a specific official announcement.";
  return buildMetadata({ title, description, path: "/updates", kicker: "Launch tracker" });
}

export default async function UpdatesPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const { channel, country } = await searchParams;
  const items = filterUpdates(channel, country);
  const countries = updateCountries();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-extrabold uppercase tracking-wide text-magenta">Launch tracker</p>
      <h1 className="mt-2 font-display text-5xl font-bold leading-none">Verified launches</h1>
      <p className="mt-3 max-w-2xl text-ink/80">
        New ad formats and platform changes. Each card is checked against the official post linked on the page. Placeholder launches are gone.
      </p>
      <div className="mt-6">
        <FilterBar channel={channel} country={country} countries={countries} />
      </div>
      <p className="mt-6 text-sm font-bold">{items.length} launch{items.length === 1 ? "" : "es"}</p>
      {items.length === 0 ? (
        <p className="sticker mt-4 rounded-3xl bg-sun p-6 font-display text-2xl font-bold">
          Nothing verified matches that filter yet.
        </p>
      ) : (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {items.map((update) => (
            <UpdateCard key={update.slug} update={update} />
          ))}
        </div>
      )}
    </main>
  );
}
