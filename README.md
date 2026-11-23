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

Each launch needs a plain-English explainer and a markets list. The card headline can be shorter than the page title.

| Field | What to put |
| --- | --- |
| `headline` | The line on the card. Short, plain English, something you could say in a meeting. |
| `markets` | Where it is actually live, in the source's words. If the source says global, list the markets it names. If it only says "globally" and does not list countries, write that. Do not invent a country list. |
| `explainer.oneLine` | One meeting-ready sentence. |
| `explainer.whatItIs` | What the product is, from the source, in your own words. |
| `explainer.onPlatform` | Where it sits in the platform and who can buy it. |
| `explainer.agencies` | What an agency can do next. |
| `explainer.brands` | What a brand can do next. |
| `explainer.amplify` | How to use it in a live campaign. |
| `explainer.inferred` | Put `"agencies"`, `"brands"`, or `"amplify"` here when that section is a suggestion rather than a fact in the source. The page labels those sections "Suggestion". |

New launches that are not part of the original list go in `lib/extra-launches.ts`.

## Add a case study

One object in `lib/cases.ts`.

| Field | What to put |
| --- | --- |
| `brand` | The advertiser, spelled as the source spells it. |
| `platform` | The ad platform. |
| `launchSlugs` | Related launches, so the case links from those pages. Use `[]` if none fit. |
| `whatTheyDid` | What the brand did, from the source. |
| `results` | Only figures the source published. If there is no number, say the source did not publish one. |
| `markets` | Where the case ran, or "Not stated". |
| `sourceUrl` | The case-study page, not the homepage. |
| `image` | A real photo that matches the story, with photographer credit, or the source article image. No generated people. |

## Images

Use a real photograph that matches the subject.

| Kind | Rule |
| --- | --- |
| Official article image | Keep the publisher URL. Set `fit` to `contain` when the image is a wide graphic, so the square card does not crop it. Credit the publisher. |
| Licensed photo | Unsplash or a Creative Commons photo, downloaded into `public/photos`, with the photographer's name, the licence, and the source page. It has to match the topic (shopping, a phone, a TV, a creator at work). |
| Last resort | A plain platform logo on a brand-colour field. Do not draw fake people. |

`fit: "cover"` is for a photo whose subject still reads in a square. `fit: "contain"` pads the rest with the platform colour.

Also required on every launch: `slug`, `title`, `bullets` (2 to 4 sentences from the source), `platform`, `channel` (`social`, `programmatic`, `ai-ads`, `retail-media`, `search`, `ctv-video`), `region` (`global`, `us`, `uk`, `eu`, `apac`, `latam`, `mea`, `north-america`, `multiple`, `not-stated`), optional `countries` as ISO codes the source named, `date`, `sourceName`, and `sourceUrl`. Leave `verified` to `launch()`.

The feed, map, dashboard, sitemap, `/feed.xml`, and `/rss.xml` pick the new object up on the next build. Quick view is `/?item=your-slug`. Swipe mode is `/?view=swipe`. Case studies live at `/cases`.

If you add an official article image, put the source URL and the image URL in `articleImages` inside `lib/media.ts`. Wide graphics should use `fit: "contain"`.

## Other content

| Add a… | Edit |
| --- | --- |
| Guide | `lib/learn.ts` |
| Platform | `lib/platforms.ts` |

Guides render their own H2s, FAQ, and links to related launches and directory pages. A new guide object is enough; the learn index, sitemap, and static paths pick it up.

Platforms have `featured` and `sponsored` flags. Both are false. The advertise page (`/advertise`) explains a future sponsored listing and shows the contact placeholder `TODO`.

## Routes

- `/` home
- `/cases` and `/cases/[slug]`
- `/updates` and `/updates/[slug]` with channel and country filters
- `/learn` and `/learn/[topic]`
- `/platforms` and `/platforms/[slug]`
- `/advertise`
- `/feed.xml` and `/rss.xml` launch feeds
- `/sitemap.xml` and `/robots.txt`
- `/og` dynamic Open Graph image
