"use client";

import { useState } from "react";
import type { SafeVideo } from "@/types/video";
import { toNoCookieEmbed, isYouTube } from "@/types/video";

interface Props {
  video: SafeVideo;
}

export default function SafeVideoPlayer({ video }: Props) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = isYouTube(video.url) ? toNoCookieEmbed(video.url) : video.url;
  const poster = video.poster || (isYouTube(video.url) ? `https://i.ytimg.com/vi/${embedUrl.split("/").pop()}/hqdefault.jpg` : undefined);

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden group"
        aria-label={`Play ${video.title}`}
      >
        {poster && <img src={poster} alt="" className="w-full h-full object-cover opacity-80" />}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition">
            <svg className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-xs text-white">
          <span className="bg-black/60 px-2 py-1 rounded">{video.title}</span>
          {video.type === "official_embed" && video.channelCredit && (
            <span className="bg-black/60 px-2 py-1 rounded">via {video.channelCredit}</span>
          )}
          {video.type === "original_recap" && <span className="bg-black/60 px-2 py-1 rounded">Original recap</span>}
        </div>
      </button>
    );
  }

  return (
    <div className="relative">
      <div className="aspect-video rounded-xl overflow-hidden bg-black">
        {isYouTube(embedUrl) || embedUrl.includes("vimeo") ? (
          <iframe
            src={`${embedUrl}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <video src={embedUrl} controls autoPlay poster={poster} className="w-full h-full" />
        )}
      </div>
      {video.type === "official_embed" && video.channelCredit && (
        <p className="text-xs text-slate-500 mt-1">Official embed · Credit: {video.channelCredit}</p>
      )}
      {video.transcript && (
        <details className="mt-2 text-sm text-slate-600">
          <summary className="cursor-pointer font-medium">Transcript / Captions</summary>
          <p className="mt-1 whitespace-pre-wrap">{video.transcript}</p>
        </details>
      )}
    </div>
  );
}
