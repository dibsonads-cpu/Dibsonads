import Link from "next/link";
import { siteConfig } from "@/config/site";
import NewsletterForm from "@/components/NewsletterForm";

const socials = [
  { href: siteConfig.social.substack, label: "Substack" },
  { href: siteConfig.social.youtube, label: "YouTube" },
  { href: siteConfig.rssPath, label: "RSS" },
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
  { href: siteConfig.social.x, label: "X" },
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.tiktok, label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t-[3px] border-ink bg-grape text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="font-display text-3xl font-bold">
            <span className="text-sun">Dibs</span> On Ads
          </p>
          <p className="mt-2 max-w-xl text-white/80">{siteConfig.tagline}</p>
          <div id="newsletter" className="mt-5 scroll-mt-24">
            <NewsletterForm variant="band" />
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-sun">Around the site</p>
          <ul className="mt-3 space-y-1 font-semibold">
            <li><Link href="/updates" className="hover:text-sun">Launch tracker</Link></li>
            <li><Link href="/learn" className="hover:text-sun">Learn paid ads</Link></li>
            <li><Link href="/platforms" className="hover:text-sun">Platform directory</Link></li>
            <li><Link href="/advertise" className="hover:text-sun">Advertise / sponsor</Link></li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold">
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="underline decoration-sun decoration-2 underline-offset-4 hover:text-sun"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-white/70">
          © {new Date().getFullYear()} {siteConfig.name}. Launches are verified against the linked official post. Specs marked unknown were not published in the sources we checked.
        </p>
      </div>
    </footer>
  );
}
