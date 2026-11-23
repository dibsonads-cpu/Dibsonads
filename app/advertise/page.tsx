import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Advertise and sponsor a listing",
  description:
    "Featured and sponsored placements on the Dibs On Ads platform directory. Contact email is not set yet.",
  path: "/advertise",
  kicker: "Advertise",
});

export default function AdvertisePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm font-extrabold uppercase tracking-wide text-coral">Directory</p>
      <h1 className="mt-2 font-display text-5xl font-bold leading-tight">Advertise / sponsor</h1>
      <p className="mt-4 text-lg leading-7">
        The platform directory has a featured flag and a sponsored flag on every listing. Both are off today. A featured card sorts to the top of the directory and wears a sun sticker. A sponsored card is labeled so it cannot be confused with an editorial page.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 leading-7">
        <li>Featured listing on the directory index and a ribbon on the platform page.</li>
        <li>Sponsored label, kept separate from the verified-launch tracker.</li>
        <li>No tracking pixels and no guaranteed ranking inside the launch feed.</li>
      </ul>
      <section className="sticker mt-8 rounded-3xl bg-sun p-6">
        <h2 className="font-display text-3xl font-bold">Contact</h2>
        <p className="mt-3 leading-7">
          Email: <strong>{siteConfig.contactEmail}</strong>
        </p>
        <p className="mt-2 text-sm leading-6">
          TODO — replace this placeholder before the offer goes live. No real address is published on purpose.
        </p>
      </section>
    </main>
  );
}
