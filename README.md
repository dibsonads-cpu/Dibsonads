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
| `brand` | The client, spelled as the source spells it. |
| `title` | The hook. Say what was achieved, such as `+237% clicks in two weeks`. Use a figure the source published. |
| `tint` | A light background colour for this card, distinct from the others, dark text still readable. |
| `used` | Platform, product, and format, from the source. |
| `results` | Only figures the source published. If there is no number, say so. |
| `why` | One or two plain lines. |
| `whyInferred` | `true` when the source does not say why it worked. The page labels that section Suggestion. |
| `industry` | The client's industry, such as Travel or Retail. |
| `channel` | `social`, `ctv-video`, `retail-media`, `search`, `programmatic`, or `ai-ads`. |
| `country` | The country or market the source names, or `Not stated`. |
| `platform` | The ad platform. |
| `launchSlugs` | Related launches. Use `[]` if none fit. |
| `markets` | Where the case ran, or "Not stated". |
| `sourceUrl` | The case-study page, not the homepage. |
| `image` | A unique image. No generated people. |

## Images

Use a real photograph that matches the subject.

| Kind | Rule |
| --- | --- |
| Official article image | Keep the publisher URL. The card frame is 1.6:1. `fit: "cover"` fills it. `fit: "contain"` is for a banner that would be ruined by a crop: the same image is blurred behind it so the frame is never empty. Credit the publisher. |
| Licensed photo | Unsplash or a Creative Commons photo, downloaded into `public/photos`, with the photographer's name, the licence, and the source page. It has to match the topic (shopping, a phone, a TV, a creator at work). |
| Last resort | A plain platform logo on a brand-colour field. Do not draw fake people. |

Cards use a landscape 1.6:1 image, full-bleed, with the title underneath.

Every launch and case study must use a different image. `npm test` fails if two items share a file, including the same photo with a different query string, and it checks infographics are 1600×1000. Source-article images stay on the publisher’s URL. When a story has no unique source image, use a 1600×1000 infographic from `npm run infographics` (`scripts/make-infographics.mjs` and `lib/infographic-copy.json`). Infographics use a brand-colour gradient, one stat or keyword, and a simple shape. No people, and no platform logos.

Also required on every launch: `slug`, `title`, `bullets` (2 to 4 sentences from the source), `platform`, `channel` (`social`, `programmatic`, `ai-ads`, `retail-media`, `search`, `ctv-video`), `region` (`global`, `us`, `uk`, `eu`, `apac`, `latam`, `mea`, `north-america`, `multiple`, `not-stated`), optional `countries` as ISO codes the source named, `date`, `sourceName`, and `sourceUrl`. Leave `verified` to `launch()`.

The feed, map, dashboard, sitemap, `/feed.xml`, and `/rss.xml` pick the new object up on the next build. Quick view is `/?item=your-slug`. Swipe mode is `/?view=swipe`. Case studies live at `/cases`.

If you add an official article image, put the source URL and the image URL in `articleImages` inside `lib/media.ts`. A very wide banner that cannot survive a 1.6:1 crop should use `fit: "contain"`.

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
