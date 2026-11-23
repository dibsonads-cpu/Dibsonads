import { notFound } from "next/navigation";
import SafeVideoPlayer from "@/components/SafeVideoPlayer";
import { videoObjectJsonLd } from "@/lib/video-schema";
import type { SafeVideo } from "@/types/video";
import Link from "next/link";
import { getLearnGuide, learnGuides } from "@/lib/learn";
import { updates } from "@/lib/data";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return learnGuides.map((g) => ({ topic: g.slug }));
}

export async function generateMetadata({ params }: { params: { topic: string } }) {
  const guide = getLearnGuide(params.topic);
  if (!guide) return {};
  return {
    title: `${guide.title} Guide | ${siteConfig.name}`,
    description: guide.whatItIs,
  };
}

export default function LearnTopicPage({ params }: { params: { topic: string } }) {
  const guide = getLearnGuide(params.topic);
  if (!guide) notFound();

  const related = updates.filter((u) => u.channel === guide.channel).slice(0, 4);

  const video: SafeVideo = guide.video || {
    type: "official_embed",
    url: `https://www.youtube-nocookie.com/embed/${guide.youtubeId}`,
    title: guide.youtubeTitle,
    channelCredit: guide.youtubeChannel,
  };

  const videoLd = videoObjectJsonLd(video, `${siteConfig.domain}/learn/${guide.slug}`);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />
      <nav className="text-sm text-slate-500 mb-4">
        <Link href="/learn" className="hover:underline">
          ← All guides
        </Link>
      </nav>
      <h1 className="text-3xl font-bold leading-tight mb-2">{guide.title}</h1>
      <p className="text-slate-600 mb-6">3-minute guide · {siteConfig.name}</p>

      <section className="space-y-4 mb-8">
        <div>
          <h2 className="font-semibold text-lg">What it is</h2>
          <p className="text-slate-700">{guide.whatItIs}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">How buying works</h2>
          <p className="text-slate-700">{guide.howBuyingWorks}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Key metrics</h2>
          <p className="text-slate-700">{guide.keyMetrics}</p>
        </div>
      </section>

      <div className="mb-8">
        <SafeVideoPlayer video={video} />
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4">Latest Updates in This Channel</h2>
          <div className="space-y-3">
            {related.map((u) => (
              <Link
                key={u.slug}
                href={`/updates/${u.slug}`}
                className="block p-4 bg-white border border-slate-200 rounded-lg hover:shadow-sm"
              >
                <div className="text-sm text-slate-500 mb-1">
                  {u.countries.join(", ")} · {u.publishedAt}
                </div>
                <div className="font-semibold">{u.headline}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
