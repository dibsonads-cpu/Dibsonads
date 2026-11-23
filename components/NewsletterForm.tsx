import { siteConfig } from "@/config/site";

type Variant = "card" | "band" | "compact";

export default function NewsletterForm({
  variant = "card",
  id,
}: {
  variant?: Variant;
  id?: string;
}) {
  const dark = variant === "band";

  return (
    <form
      id={id}
      action={siteConfig.newsletter.formAction}
      method="post"
      target="_blank"
      className="space-y-3"
    >
      <div className={variant === "card" ? "flex flex-col gap-3" : "flex flex-col gap-3 sm:flex-row sm:items-end"}>
        <label className="block min-w-0 flex-1 text-sm font-semibold">
          <span className={`mb-1 block ${dark ? "text-sun" : "text-ink"}`}>Email for the weekly dibs</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@brand.com"
            className="w-full rounded-xl border-[3px] border-ink bg-white px-3 py-2 text-base text-ink placeholder:text-ink/40"
          />
        </label>
        <button
          type="submit"
          className="sticker rounded-xl bg-coral px-4 py-2 font-extrabold text-white"
        >
          Subscribe on Substack
        </button>
      </div>
      <p className={`text-xs ${dark ? "text-white/80" : "text-ink/70"}`}>
        The form is posted to Substack. Dibs On Ads does not store the address.{" "}
        <a
          href={siteConfig.newsletter.subscribeUrl}
          className="font-semibold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the subscribe page
        </a>
        .
      </p>
    </form>
  );
}
