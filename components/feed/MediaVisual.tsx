"use client";

import Image from "next/image";
import { useState } from "react";
import { logoFor } from "@/lib/media";
import type { LaunchImage } from "@/lib/updates";

const tint: Record<string, string> = {
  "Google Ads": "#eef3fb",
  YouTube: "#fff1f1",
  "Display & Video 360": "#eef3fb",
  Meta: "#eef2fb",
  TikTok: "#f4f4f4",
  "Amazon Ads": "#fff6ee",
  Pinterest: "#fdecec",
  LinkedIn: "#e8f3fa",
  Reddit: "#fff1e8",
  "Microsoft Advertising": "#f3f6fb",
  "ChatGPT Ads": "#f4f4f4",
};

export default function MediaVisual({
  media,
  platform,
  className = "",
}: {
  media: LaunchImage;
  platform: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const logo = failed || media.type === "logo";
  const src = logo ? logoFor(platform).src : media.src;

  if (media.type === "video" && !failed) {
    return (
      <div className={`relative bg-black ${className}`}>
        <iframe
          src={media.src}
          title={media.alt}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (logo) {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 px-6 ${className}`} style={{ background: tint[platform] ?? "#f4f4f4" }}>
        <Image src={src} alt="" width={160} height={64} className="max-h-16 w-auto max-w-[70%] object-contain" unoptimized />
        <p className="text-center text-sm font-semibold">{platform}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={media.alt}
      fill
      className="object-cover"
      sizes="(min-width: 1440px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
