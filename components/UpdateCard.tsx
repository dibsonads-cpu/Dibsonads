import Link from "next/link";
import type { LaunchUpdate } from "@/lib/updates";
import { formatDate } from "@/lib/seo";

const channelTone: Record<string, string> = {
  "paid-social": "bg-coral text-white",
  "search-ai": "bg-violet text-white",
  "retail-media": "bg-sun text-ink",
  "programmatic-dsp": "bg-sky text-ink",
  "ctv-audio": "bg-magenta text-white",
  "publisher-ad-tech": "bg-mint text-ink",
  offline: "bg-grape text-white",
};

export default function UpdateCard({ update }: { update: LaunchUpdate }) {
  const tone = channelTone[update.channelSlug] ?? "bg-white text-ink";

  return (
    <article className="sticker flex h-full flex-col rounded-3xl bg-white p-5">
      <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase tracking-wide">
        <span className={`rounded-full px-2 py-1 ${tone}`}>{update.channel}</span>
        <span className="rounded-full bg-paper px-2 py-1 text-ink">{update.country}</span>
        <time dateTime={update.date}>{formatDate(update.date)}</time>
        {update.verified ? (
          <span className="rounded-full bg-mint px-2 py-1 text-ink">Verified</span>
        ) : null}
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold leading-tight">
        <Link href={`/updates/${update.slug}`} className="hover:text-magenta">
          {update.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm leading-6 text-ink/80">{update.summary}</p>
      <p className="mt-3 text-sm font-bold">{update.platform}</p>
      <a
        href={update.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex font-extrabold text-violet underline decoration-2 underline-offset-4"
      >
        Official source
      </a>
    </article>
  );
}
