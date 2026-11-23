import LaunchFeed from "@/components/launch/LaunchFeed";
import { channelLabel, regionLabel } from "@/lib/taxonomy";
import { updatesByDate } from "@/lib/updates";
import { buildMetadata } from "@/lib/seo";

type Search = {
  channel?: string;
  platform?: string;
  month?: string;
  year?: string;
  region?: string;
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams;
  const bits = [
    params.channel ? channelLabel(params.channel) : "",
    params.platform,
    params.region ? regionLabel(params.region) : "",
    params.month,
    params.year,
  ].filter(Boolean);
  const title = bits.length ? `${bits.join(" · ")} launches` : "Verified ad launches";
  const description = bits.length
    ? `Verified paid media launches filtered to ${bits.join(", ")}.`
    : "The Dibs On Ads launch desk. Filter by channel, platform, month, year, and region.";
  return buildMetadata({ title, description, path: "/updates", kicker: "Launch desk" });
}

export default async function UpdatesPage({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams;
  const launches = updatesByDate();
  return (
    <main>
      <header className="mx-auto max-w-6xl px-4 pb-2 pt-8">
        <h1 className="font-display text-5xl font-bold">The launch desk</h1>
        <p className="mt-2 max-w-2xl text-ink/75">Same feed as the homepage. Filters stay in the URL, so a view can be sent around.</p>
      </header>
      <LaunchFeed
        launches={launches}
        initialFilters={{
          channel: params.channel ?? "",
          platform: params.platform ?? "",
          month: params.month ?? "",
          year: params.year ?? "",
          region: params.region ?? "",
        }}
      />
    </main>
  );
}
