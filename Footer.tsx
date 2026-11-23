import { siteConfig } from "@/config/site";

const socials = [
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { key: "substack", label: "Substack", href: siteConfig.social.substack },
  { key: "youtube", label: "YouTube", href: siteConfig.social.youtube },
  { key: "x", label: "X", href: siteConfig.social.x },
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
  { key: "tiktok", label: "TikTok", href: siteConfig.social.tiktok },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <div className="font-semibold text-slate-900">{siteConfig.name}</div>
          <div>{siteConfig.tagline}</div>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}