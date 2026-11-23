import DashboardView, { type DashState } from "@/components/dashboard/DashboardView";
import { updatesByDate } from "@/lib/updates";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dashboard",
  description: "Latest verified ad launches, with time range, channel, platform, and region filters you can also hide.",
  path: "/dashboard",
  kicker: "Dashboard",
});

type Search = {
  range?: string;
  month?: string;
  year?: string;
  channel?: string;
  platform?: string;
  region?: string;
  exclude?: string;
};

export default async function DashboardPage({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams;
  const range = params.range === "30" || params.range === "month" || params.range === "custom" ? params.range : "10";
  const initial: DashState = {
    range,
    month: params.month || String(new Date().getUTCMonth() + 1),
    year: params.year || String(new Date().getUTCFullYear()),
    channel: params.channel || "",
    platform: params.platform || "",
    region: params.region || "",
    exclude: params.exclude ? params.exclude.split(",").filter(Boolean) : [],
  };
  const todayIso = new Date().toISOString().slice(0, 10);

  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="font-display text-4xl font-bold">Dashboard</h1>
      <p className="mt-2 text-ink/70">Newest first. Filters stay on this device and in the link.</p>
      <div className="mt-6">
        <DashboardView launches={updatesByDate()} initial={initial} todayIso={todayIso} />
      </div>
    </main>
  );
}
