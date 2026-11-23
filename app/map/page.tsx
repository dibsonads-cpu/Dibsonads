import WorldMap from "@/components/map/WorldMap";
import { updatesByDate } from "@/lib/updates";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Launch map",
  description: "See where verified ad launches apply. Tap a country, or open the global and multi-region lists.",
  path: "/map",
  kicker: "Map",
});

export default function MapPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="font-display text-4xl font-bold">Where it launched</h1>
      <p className="mt-2 max-w-xl text-ink/70">Tap a shaded country. Global and Europe-wide launches are in the buttons, not painted across the map.</p>
      <div className="mt-6">
        <WorldMap launches={updatesByDate()} />
      </div>
    </main>
  );
}
