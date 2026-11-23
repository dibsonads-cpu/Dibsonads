import Link from "next/link";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/updates", label: "Launches" },
  { href: "/learn", label: "Learn" },
  { href: "/platforms", label: "Platforms" },
  { href: "/advertise", label: "Advertise" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-display text-2xl font-bold leading-none tracking-tight">
          <span className="text-coral">Dibs</span> <span className="text-ink">On Ads</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-magenta">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="#newsletter"
          className="sticker hidden rounded-full bg-sun px-3 py-1 text-sm font-extrabold text-ink sm:inline-flex"
        >
          Get the weekly
        </a>
        <details className="relative md:hidden">
          <summary className="chip cursor-pointer rounded-full bg-white px-3 py-1 text-sm font-extrabold">
            Menu
          </summary>
          <nav className="absolute right-0 mt-2 flex w-44 flex-col rounded-2xl border-[3px] border-ink bg-white p-2 shadow-sticker">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl px-3 py-2 font-bold hover:bg-sun">
                {link.label}
              </Link>
            ))}
            <a href="#newsletter" className="rounded-xl px-3 py-2 font-bold hover:bg-sun">
              Subscribe
            </a>
          </nav>
        </details>
      </div>
      <p className="sr-only">{siteConfig.tagline}</p>
    </header>
  );
}
