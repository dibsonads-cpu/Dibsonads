import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link href="/" className="px-3 py-2 rounded hover:bg-slate-100">
            Live Updates
          </Link>
          <div className="relative group">
            <button className="px-3 py-2 rounded hover:bg-slate-100">
              By Country ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white border border-slate-200 rounded-lg shadow-lg mt-1 py-1 min-w-[120px]">
              {["UK", "US", "EU", "Global"].map((c) => (
                <Link
                  key={c}
                  href={`/?country=${c}`}
                  className="block px-4 py-2 hover:bg-slate-50"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/learn" className="px-3 py-2 rounded hover:bg-slate-100">
            Learn Paid Ads
          </Link>
          <a
            href="#subscribe"
            className="ml-2 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
