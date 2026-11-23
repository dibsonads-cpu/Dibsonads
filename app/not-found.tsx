import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <p className="stamp bg-magenta px-4 py-2 text-xs text-white">404</p>
      <h1 className="mt-6 font-display text-5xl font-bold">That page is not on the desk.</h1>
      <p className="mt-3 text-ink/80">Try a launch, a guide, or a platform instead.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/updates" className="sticker rounded-full bg-ink px-4 py-2 font-extrabold text-white">Launches</Link>
        <Link href="/learn" className="sticker rounded-full bg-white px-4 py-2 font-extrabold">Learn</Link>
        <Link href="/platforms" className="sticker rounded-full bg-sun px-4 py-2 font-extrabold">Platforms</Link>
      </div>
    </main>
  );
}
