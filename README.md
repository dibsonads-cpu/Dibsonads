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

## Add a launch

One object in `lib/updates.ts`, inside the `updates` array. Copy the nearest example and change the fields. Then regenerate the cover:

```bash
node scripts/generate-covers.mjs
```

Required fields:

| Field | What to put |
| --- | --- |
| `slug` | URL piece, lowercase and hyphenated. Also becomes the `id`. |
| `title` | The headline on the card. |
| `bullets` | 2 to 4 short sentences. No essay. |
| `platform` | Display name, such as `TikTok` or `Google Ads`. |
| `platformSlug` | Optional. Use a directory slug (`meta`, `tiktok`, `google-ads`) when one exists. |
| `channel` | `social`, `programmatic`, `ai-ads`, `retail-media`, `search`, or `ctv-video`. |
| `region` | `global`, `us`, `uk`, `eu`, `apac`, `north-america`, `multiple`, or `not-stated`. |
| `countries` | Optional ISO codes, such as `["US", "IN"]`. Leave unset for a plain US, UK, or North America item. Do not invent a country the source did not name. |
| `regionNote` | Optional sentence when the announcement is more specific than the chip. |
| `date` | ISO `YYYY-MM-DD`. If the source only gives a month, use the first of that month and set `datePrecision: "month"`. |
| `sourceName` | Publication or company, shown on the card. |
| `sourceUrl` | The specific article, not a homepage. |
| `image` | Optional. If you omit it, a generated cover is used. For a real photo, put the file in `public/photos` and set `src`, `alt`, `credit`, `licence`, and `sourceUrl`. Only use a photo whose licence allows this site (Unsplash, Pexels, CC, or a press kit that allows editorial use). |
| `verified` | Leave this to the `launch()` helper. It is always `true`. Do not add a launch you have not opened. |

The feed, dashboard, map, sitemap, `/feed.xml`, and `/rss.xml` pick the new object up on the next build. A platform shortcut is `/dashboard?platform=TikTok`. The homepage grid opens a quick view at `/?item=your-slug`. Swipe mode is `/?view=swipe`.

## Images and video

Do not generate cover art and do not use a stock photo that is unrelated to the launch.

Each launch gets a `image` object from `lib/media.ts`:

| `type` | When |
| --- | --- |
| `image` | The hero from the official article. Leave it on the publisher’s URL. Set `credit` to the publisher, `sourceUrl` to the article, and `licence` to the article-image note in `lib/media.ts`. |
| `video` | An official YouTube or Vimeo embed URL from that platform’s own channel. `src` is the embed URL. Credit the channel. |
| `logo` | No official image. The card shows the platform’s official logo, unmodified, on a plain background, with the platform name. Logos in `public/logos` are for identification only. They are trademarks. Do not redraw, recolour, or imply a partnership. |

If you add a new article image, put the source URL and the image URL in `articleImages` inside `lib/media.ts`.

## Other content

| Add a… | Edit |
| --- | --- |
| Guide | `lib/learn.ts` |
| Platform | `lib/platforms.ts` |

Guides render their own H2s, FAQ, and links to related launches and directory pages. A new guide object is enough; the learn index, sitemap, and static paths pick it up.

Platforms have `featured` and `sponsored` flags. Both are false. The advertise page (`/advertise`) explains a future sponsored listing and shows the contact placeholder `TODO`.

## Routes

- `/` home
- `/updates` and `/updates/[slug]` with channel and country filters
- `/learn` and `/learn/[topic]`
- `/platforms` and `/platforms/[slug]`
- `/advertise`
- `/feed.xml` and `/rss.xml` launch feeds
- `/sitemap.xml` and `/robots.txt`
- `/og` dynamic Open Graph image
