# Dibs On Ads

Verified paid media launches, practical channel guides, and an ad platform directory.

**Tagline:** Verified paid media launches. First dibs on new formats.

The canonical site URL is `https://dibsonads.com`. Override it with `NEXT_PUBLIC_SITE_URL` (see `.env.example`). That value is used for canonical links, Open Graph URLs, the sitemap, robots, and RSS.

## Stack

Next.js 15, React 19, TypeScript, Tailwind CSS. Deployed on Vercel. Newsletter signup posts to Substack. There is no custom email backend.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Content

Typed files, no CMS.

| Add a… | Edit |
| --- | --- |
| Launch | `lib/updates.ts` |
| Guide | `lib/learn.ts` |
| Platform | `lib/platforms.ts` |

Every launch needs a channel, country, date, a specific official source URL, and `verified: true` only when that URL is the announcement itself. Do not invent launches. If a spec or country list is not in an official source, set `known: false` and say it is unknown.

Guides render their own H2s, FAQ, and links to related launches and directory pages. A new guide object is enough; the learn index, sitemap, and static paths pick it up.

Platforms have `featured` and `sponsored` flags. Both are false. The advertise page (`/advertise`) explains a future sponsored listing and shows the contact placeholder `TODO`.

## Routes

- `/` home
- `/updates` and `/updates/[slug]` with channel and country filters
- `/learn` and `/learn/[topic]`
- `/platforms` and `/platforms/[slug]`
- `/advertise`
- `/rss.xml`
- `/sitemap.xml` and `/robots.txt`
- `/og` dynamic Open Graph image
