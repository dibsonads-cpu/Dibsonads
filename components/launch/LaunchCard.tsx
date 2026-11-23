import Image from "next/image";
import Link from "next/link";
import { channelLabel, regionLabel } from "@/lib/taxonomy";
import { formatLaunchDate, type Launch } from "@/lib/updates";

const chip: Record<string, string> = {
  social: "bg-coral text-white",
  programmatic: "bg-sky text-ink",
  "ai-ads": "bg-violet text-white",
  "retail-media": "bg-sun text-ink",
  search: "bg-mint text-ink",
  "ctv-video": "bg-magenta text-white",
};

export default function LaunchCard({
  update,
  expanded,
  pinned,
  onToggle,
  onPin,
  compact = false,
}: {
  update: Launch;
  expanded: boolean;
  pinned: boolean;
  onToggle: () => void;
  onPin: () => void;
  compact?: boolean;
}) {
  const panelId = `launch-${update.id}`;

  return (
    <article className={`overflow-hidden rounded-[28px] border-[3px] border-ink bg-white shadow-sticker ${pinned ? "ring-4 ring-sun" : ""}`}>
      <div className={`relative ${compact ? "aspect-[16/9]" : "aspect-[4/5]"} bg-paper`}>
        <Image
          src={update.image.src}
          alt={update.image.alt}
          fill
          sizes={compact ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold uppercase tracking-wide">
          <span className={`rounded-full px-2 py-1 ${chip[update.channel] ?? "bg-ink text-white"}`}>
            {channelLabel(update.channel)}
          </span>
          <span className="rounded-full bg-paper px-2 py-1">{update.platform}</span>
          <span className="rounded-full bg-paper px-2 py-1">{regionLabel(update.region)}</span>
        </div>
        <h2 className="font-display text-2xl font-bold leading-tight">
          <button type="button" className="text-left hover:text-magenta" aria-expanded={expanded} aria-controls={panelId} onClick={onToggle}>
            {update.title}
          </button>
        </h2>
        <p className="text-xs font-bold uppercase tracking-wide text-ink/60">
          <time dateTime={update.date}>{formatLaunchDate(update)}</time>
        </p>
        <div id={panelId} hidden={!expanded}>
          <ul className="list-disc space-y-2 pl-4 text-sm leading-6">
            {update.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {update.regionNote ? <p className="mt-3 text-xs leading-5 text-ink/70">{update.regionNote}</p> : null}
          <a
            href={update.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-extrabold text-violet underline decoration-2 underline-offset-4"
          >
            {update.sourceName}
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {compact ? null : (
            <button type="button" onClick={onToggle} className="chip rounded-full bg-ink px-3 py-1 text-xs font-extrabold text-white" aria-expanded={expanded}>
              {expanded ? "Hide notes" : "Read notes"}
            </button>
          )}
          <button type="button" onClick={onPin} className="chip rounded-full bg-sun px-3 py-1 text-xs font-extrabold" aria-pressed={pinned}>
            {pinned ? "In the tray" : "Add to tray"}
          </button>
          <Link href={`/updates/${update.slug}`} className="chip rounded-full bg-white px-3 py-1 text-xs font-extrabold">
            Permalink
          </Link>
        </div>
        <p className="text-[11px] leading-4 text-ink/55">
          Image: {update.image.credit}. {update.image.licence}
        </p>
      </div>
    </article>
  );
}
