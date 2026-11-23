import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";

export default function LearnTopicPage({ params }: { params: { topic: string } }) {
  const channel = siteConfig.channels.find((c) => c.slug === params.topic);
  if (!channel) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{channel.name}</h1>
      <div className="prose">
        <h2>What it is</h2>
        <p>A short explanation of {channel.name} advertising.</p>
        <h2>How buying works</h2>
        <p>Overview of how media is bought in this channel.</p>
        <h2>Key metrics</h2>
        <p>The main metrics advertisers track.</p>
      </div>
    </main>
  );
}
