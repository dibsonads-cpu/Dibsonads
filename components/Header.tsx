import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.shortName || siteConfig.name}
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline">Live Updates</Link>
          <Link href="/learn" className="hover:underline">Learn Paid Ads</Link>
        </nav>
      </div>
    </header>
  );
}
