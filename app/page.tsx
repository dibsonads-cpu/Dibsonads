import Link from "next/link";
import { siteConfig, channels } from "@/config/site";
import { guides } from "@/lib/learn";
import { platformsForIndex } from "@/lib/platforms";
import { updatesByDate } from "@/lib/updates";
import UpdateCard from "@/components/UpdateCard";
import NewsletterForm from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dibs On Ads — Verified paid media launches",
  description: siteConfig.description,
  path: "/",
  kicker: siteConfig.tagline,
  absolute: true,
});

const tones = ["bg-coral", "bg-sun", "bg-mint", "bg-sky", "bg-magenta", "bg-violet"];

export default function HomePage() {
  const latest = updatesByDate().slice(0, 4);
  const featuredGuides = guides.slice(0, 4);
  const platformNames = platformsForIndex().map((platform) => platform.name);
  const ticker = [...platformNames, ...platformNames];

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-10 md:pt-16">
        <div className="grid items-end gap-8 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="stamp bg-sun px-4 py-2 text-xs text-ink">Verified launches</p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              First dibs on <span className="text-coral">new formats.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-ink/80">
              A launch tracker, practical channel guides, and a platform directory. Official sources only. If a number is not published, it stays unknown.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/updates" className="sticker rounded-full bg-ink px-5 py-2 font-extrabold text-white">
                See the tracker
              </Link>
              <Link href="/learn" className="sticker rounded-full bg-white px-5 py-2 font-extrabold">
                Learn paid ads
              </Link>
            </div>
          </div>
          <div className="sticker rotate-1 rounded-3xl bg-white p-5">
            <p className="text-sm font-extrabold uppercase tracking-wide text-magenta">Latest on the desk</p>
            <ul className="mt-3 space-y-3">
              {latest.slice(0, 3).map((update) => (
                <li key={update.slug}>
                  <Link href={`/updates/${update.slug}`} className="font-display text-xl font-bold leading-tight hover:text-violet">
                    {update.title}
                  </Link>
                  <p className="text-sm text-ink/70">{update.platform} · {update.country}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="marquee border-y-[3px] border-ink bg-ink py-3 text-white">
        <div className="marquee-track gap-8 px-4 font-extrabold uppercase tracking-wide">
          {ticker.map((name, index) => (
            <span key={`${name}-${index}`} className="flex items-center gap-8">
              {name}
              <span className="text-sun">★</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold">Latest verified launches</h2>
          <Link href="/updates" className="font-extrabold text-violet underline">
            All launches
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {latest.map((update) => (
            <UpdateCard key={update.slug} update={update} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-display text-4xl font-bold">Three desks, one site</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { href: "/updates", title: "Launch tracker", copy: "New formats and platform changes, each tied to the official announcement.", color: "bg-coral text-white" },
            { href: "/learn", title: "Learn paid ads", copy: "Channel guides with a real structure, an FAQ, and links into the tracker.", color: "bg-sun text-ink" },
            { href: "/platforms", title: "Platform directory", copy: "Formats, specs, budgets, and countries. Unpublished numbers stay unknown.", color: "bg-mint text-ink" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className={`sticker rounded-3xl p-5 ${item.color}`}>
              <h3 className="font-display text-3xl font-bold">{item.title}</h3>
              <p className="mt-2 font-medium leading-6">{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-display text-4xl font-bold">Start with a channel</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGuides.map((guide, index) => (
            <Link key={guide.slug} href={`/learn/${guide.slug}`} className="sticker rounded-3xl bg-white p-4">
              <span className={`inline-block h-3 w-3 rounded-full ${tones[index % tones.length]}`} />
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{guide.title.split(":")[0]}</h3>
              <p className="mt-2 text-sm leading-5 text-ink/75">{guide.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {channels.slice(0, 4).map((channel) => (
            <Link key={channel.slug} href={`/updates?channel=${channel.slug}`} className="chip rounded-full bg-white px-3 py-1 text-sm font-bold">
              {channel.name} launches
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="sticker rounded-3xl bg-white p-6 md:p-8">
          <h2 className="font-display text-4xl font-bold">The Friday note</h2>
          <p className="mt-2 max-w-2xl text-ink/80">
            New verified launches, once a week, on Substack. No extra email tool on this site.
          </p>
          <div className="mt-4 max-w-xl">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
