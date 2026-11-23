export type GuideSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  channelSlug: string;
  updated: string;
  intro: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedUpdateSlugs: string[];
  relatedPlatformSlugs: string[];
  sources: { label: string; url: string }[];
};

export const guides: Guide[] = [
  {
    slug: "paid-social",
    title: "Paid social ads: a practical buying guide",
    description:
      "How paid social auctions work, how to structure campaigns on Meta and the other social platforms, and which metrics to read before you scale.",
    channelSlug: "paid-social",
    updated: "2026-11-23",
    intro:
      "Paid social is auction media inside someone else’s feed. You are renting attention between posts, stories, and short video. The platforms look similar in a screenshot and behave differently once you set a budget, which is why a Meta habit copied onto TikTok or LinkedIn usually wastes the first two weeks.",
    sections: [
      {
        id: "what-you-buy",
        heading: "What you are actually buying",
        paragraphs: [
          "You are not buying a placement the way you buy a homepage takeover. You are entering an auction. The platform predicts how likely a person is to take the action you chose — a click, a landing-page view, a purchase, a lead — and ranks your ad against everyone else who wants that impression.",
          "The objective you pick is the product. A traffic campaign and a purchase campaign can use the same video and still reach different people, because the auction is optimizing for different events. If the event is rare, delivery gets picky. If the event is easy, you can buy cheap clicks that never see a product page.",
        ],
        bullets: [
          "Awareness and reach objectives buy impressions. Judge them on reach, frequency, and recall, not on last-click return.",
          "Traffic and landing-page-view objectives buy clicks. They are useful for a message test, and a poor proxy for revenue.",
          "Conversion objectives need a pixel or conversions API that actually fires. Without that signal the auction is guessing.",
        ],
      },
      {
        id: "structure",
        heading: "A structure that stays readable",
        paragraphs: [
          "Keep one job per campaign. Split prospecting from remarketing, and split a genuinely different offer into its own campaign so the budget does not silently move to the easy audience.",
          "Inside a campaign, an ad set (Meta), ad group (TikTok, Pinterest, Snap, Reddit), or campaign-level audience (LinkedIn, depending on the objective) is where budget, placement, and people live. Ads underneath should be the same idea told a few ways, not five unrelated concepts sharing one budget.",
        ],
        bullets: [
          "Name campaigns so a teammate can see objective, market, and offer without opening them.",
          "Change one variable at a time when you test: hook, offer, or audience. Not all three.",
          "Pause the loser. Do not keep funding an ad the auction has already stopped spending on.",
        ],
      },
      {
        id: "creative",
        heading: "Creative that survives a feed",
        paragraphs: [
          "The first second does the targeting now. On short-video placements the viewer decides before your logo resolves. Open on the product, the problem, or the result. Save the brand line for when you have earned the next second.",
          "Export for the placement. A 1:1 crop of a 16:9 film often hides the product behind interface buttons. Meta’s Facebook Feed image guide currently recommends a 4:5 still at 1440 × 1800. TikTok’s in-feed spec recommends 9:16 at 540 × 960 or larger. Those are different edits, not one master resized at the last minute.",
        ],
        bullets: [
          "One idea per ad. A second offer belongs in a second ad.",
          "Put captions on. Most social video is watched without sound until someone opts in.",
          "Refresh when frequency climbs and the click or thumb-stop rate falls, not on a calendar.",
        ],
      },
      {
        id: "metrics",
        heading: "Metrics worth a Monday morning",
        paragraphs: [
          "Read the funnel in order. Cost per thousand impressions tells you what the auction charged for attention. Click-through rate tells you if the creative earned a tap. Cost per click is those two combined. Cost per result is the only number that includes your site.",
          "Return on ad spend is revenue divided by spend, for the attribution window the platform used. It is not profit, and it is not comparable across Meta, TikTok, and Google without saying which window and which revenue. A 7-day click window and a 1-day view window answer different questions.",
        ],
      },
      {
        id: "new-formats",
        heading: "Where the new formats fit",
        paragraphs: [
          "Most “new formats” are either a new placement on the same auction or a reserved buy with a guarantee. Threads ads are the first kind: Meta added the Threads feed as a placement, with image, video, and carousel, and in January 2026 expanded delivery to users in all markets. TikTok’s Logo Takeover, Prime Time, and TopReach are the second kind: high-impact units announced at NewFronts 2026, priced and booked differently from an in-feed auction.",
          "Do not move prospecting budget into a reserved unit just because it is new. Use the tracker note and the platform page, then ask the rep two questions: which country is actually live, and what is the smallest buy. If either answer is missing, treat it as unknown.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a sensible first budget on paid social?",
        answer:
          "It depends on the platform, and several of them publish a floor. TikTok says a daily campaign budget must exceed $50 and an ad group must exceed $20. LinkedIn’s published daily minimum is $10. Snap’s published daily minimum is $5. Meta does not publish one global dollar minimum. Those floors are not a test plan. You still need enough spend for the auction to leave learning, which is a separate, higher number that each help center describes differently.",
      },
      {
        question: "Should every social campaign use the platform’s automation?",
        answer:
          "Use it when you trust the conversion event and you have several creatives for it to choose from. Advantage+ on Meta, Smart+ on TikTok, Performance+ on Pinterest, and Max campaigns on Reddit all shift targeting and budget toward what has worked. They are a poor first step if the pixel is wrong or you only have one ad.",
      },
      {
        question: "How is LinkedIn different from Meta?",
        answer:
          "You are buying professional identity, and the auction is more expensive per impression. LinkedIn’s own minimum daily budget is $10. CTV on LinkedIn is a separate product: the June 2025 announcement says it is generally available for targeting buyers in the US and Canada, not worldwide.",
      },
      {
        question: "Do I need a different pixel for each platform?",
        answer:
          "Yes. Each platform only learns from the events you send it. A Meta pixel does not teach TikTok. Server-side events (Conversions API, Events API, and the equivalents) matter once browsers block third-party cookies, but they do not replace a clean event definition.",
      },
    ],
    relatedUpdateSlugs: [
      "meta-threads-ads-all-markets",
      "tiktok-newfronts-high-impact-formats",
      "pinterest-visual-search-ads",
      "linkedin-first-impression-and-ctv",
      "reddit-max-campaigns-beta",
    ],
    relatedPlatformSlugs: ["meta", "tiktok", "pinterest", "snap", "linkedin", "reddit"],
    sources: [
      { label: "Meta Ads Guide, Facebook Feed image", url: "https://www.facebook.com/business/ads-guide/update/image/facebook-feed" },
      { label: "TikTok in-feed specifications", url: "https://ads.tiktok.com/help/article/video-ads-specifications?lang=en" },
      { label: "TikTok budgets", url: "https://ads.tiktok.com/help/article/budget?lang=en" },
      { label: "LinkedIn minimum budgets", url: "https://business.linkedin.com/advertise/ads/best-practices/maximize-your-budget" },
      { label: "Snapchat pricing", url: "https://forbusiness.snapchat.com/advertising/pricing" },
    ],
  },
  {
    slug: "search-ai",
    title: "Search and AI ads: what to change, and what is still a test",
    description:
      "A working guide to Google responsive search ads, AI Max, Microsoft’s AI Overview ads, and ChatGPT ads — including which pieces are generally available and which are still tests.",
    channelSlug: "search-ai",
    updated: "2026-11-23",
    intro:
      "Search ads used to mean a keyword, a headline, and a bid. That auction is still there. Around it, Google, Microsoft, and OpenAI now insert ads into AI answers. Some of those units are live products. Some are tests with no country list. Mixing the two up is how teams brief a format they cannot actually buy.",
    sections: [
      {
        id: "intent",
        heading: "Start with the query, not the model",
        paragraphs: [
          "A search query is a job. “Emergency plumber tonight” and “how to descale a boiler” should not share an ad group, a landing page, or a bid. AI overviews and chat answers do not cancel that. They change how the job is phrased. People write longer questions, and the platform rewrites your ad to meet them.",
          "Keep a clean keyword account even if you turn on automation. Exact and phrase keywords are still the steering wheel. Broad match and keywordless matching are the extra reach. If you cannot see the search terms report, you cannot tell whether the extra reach is the job you sell.",
        ],
      },
      {
        id: "rsa",
        heading: "Responsive search ads, in the numbers Google publishes",
        paragraphs: [
          "A responsive search ad takes 3 to 15 headlines of up to 30 characters and 2 to 4 descriptions of up to 90 characters. Paths are 15 characters each. Google assembles combinations and can move a headline into the description or into a link asset. Pin a line only when it must appear, such as a legal disclaimer. Pinning everything leaves the system with nothing to test.",
          "Write headlines that still make sense alone. The third headline is not guaranteed to show. Put the keyword and the offer in the first three, then add proof, the audience, and a call to action as extra assets.",
        ],
      },
      {
        id: "ai-max",
        heading: "AI Max is a switch, not a new campaign type",
        paragraphs: [
          "Google announced AI Max for Search on 6 May 2025 and said the beta would roll out to all advertisers globally later that month. It sits on a Search campaign you already have. Turned on, it does three jobs: match more queries from your keywords, assets, and URLs; rewrite text assets from the landing page and the ads; and expand the final URL to a more relevant page.",
          "The controls that make this usable are in the same announcement: brand inclusions and exclusions, locations of interest, the option to remove a generated asset, and URL controls. If final URL expansion can send someone to a page you would not want as the ad, fix the site or turn that piece off before you judge the CPA.",
        ],
      },
      {
        id: "ai-surfaces",
        heading: "Ads inside AI answers",
        paragraphs: [
          "Google’s 20 May 2026 Marketing Live post says Conversational Discovery ads and Highlighted Answers are tests inside AI Mode. Both are labeled Sponsored and include an explainer written by Gemini, separate from the advertiser’s creative. The post does not name the countries. Do not plan a market launch on that post alone.",
          "Microsoft’s version is further along as a distribution change. On 19 November 2026 Microsoft said ads can show next to Bing AI Overviews through campaigns you already run, including Performance Max and AI Max, in every market except China. There is no new campaign type to build.",
          "ChatGPT ads are a different company. OpenAI began a US test on 9 February 2026 for logged-in adults on Free and Go. Plus, Pro, Business, Enterprise, and Education do not get ads. On 21 October 2026 OpenAI said ads were in 89 countries and that more than 100,000 advertisers had run campaigns. Answers are not influenced by the ad, and advertisers do not get the chat.",
        ],
      },
      {
        id: "measurement",
        heading: "How to read the result",
        paragraphs: [
          "Judge search on incremental conversions, not on the platform’s own ROAS in isolation, once other channels are in the mix. Branded queries will look efficient because the person already wanted you. Split brand and non-brand before you celebrate.",
          "Google does not publish a minimum daily budget. It does publish the pacing rule: for most campaigns you can be charged up to twice the average daily budget on a given day, and up to the average times 30.4 in a month. Set the average you can actually afford on the expensive day, not the average you hope for.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is AI Max required to show ads in AI Overviews?",
        answer:
          "Google has told advertisers to build on AI Max, AI Max for Shopping, and Performance Max if they want the newer AI formats. Microsoft says ads in Bing AI Overviews run through existing campaigns and that Performance Max and AI Max are the most effective route. Neither post says a classic exact-match ad is banned from every AI surface. Check the campaign’s eligibility screen rather than assuming.",
      },
      {
        question: "Can I buy ChatGPT ads the way I buy Google Ads?",
        answer:
          "Not as a Google campaign. OpenAI sells ChatGPT ads through its own Ads Manager and through technology partners. The October 2026 post points advertisers to Ads Manager and to partners. Objectives, formats, and measurement are still being added, which OpenAI says outright.",
      },
      {
        question: "What is the minimum Google Ads budget?",
        answer:
          "Google does not publish one. You set an average daily budget. The help page on budgets says most campaigns can spend up to twice that average in a day and up to 30.4 times the average in a month.",
      },
      {
        question: "Which countries can I target?",
        answer:
          "Google Ads cannot be used by advertisers in Crimea, Cuba, the so-called Donetsk People’s Republic, Iran, the so-called Luhansk People’s Republic, or North Korea, and those locations cannot be targeted. ChatGPT ads are a separate list: the US test started in February 2026, and OpenAI later said 89 countries. Microsoft’s AI Overview ads are stated as all markets except China.",
      },
    ],
    relatedUpdateSlugs: [
      "microsoft-bing-ai-overview-ads",
      "chatgpt-ads-expands-26-countries",
      "google-conversational-discovery-ads",
      "chatgpt-ads-us-test",
      "google-ai-max-for-search",
    ],
    relatedPlatformSlugs: ["google-ads", "microsoft-ads"],
    sources: [
      { label: "About responsive search ads", url: "https://support.google.com/google-ads/answer/7684791?hl=en" },
      { label: "Budgets overview", url: "https://support.google.com/google-ads/answer/10486536?hl=en" },
      { label: "Country restrictions", url: "https://support.google.com/google-ads/answer/6163740?hl=en" },
      { label: "AI Max for Search", url: "https://blog.google/products/ads-commerce/google-ai-max-for-search-campaigns/" },
      { label: "Testing ads in ChatGPT", url: "https://openai.com/index/testing-ads-in-chatgpt/" },
    ],
  },
  {
    slug: "retail-media",
    title: "Retail media: Amazon sponsored ads without the folklore",
    description:
      "How Sponsored Products, Sponsored Brands, and Sponsored Display differ, what Amazon actually says about minimum spend, and how to read ACOS without inventing a target.",
    channelSlug: "retail-media",
    updated: "2026-11-23",
    intro:
      "Retail media is advertising inside a store that already has the shopper and the checkout. On Amazon that means your ad can sit on the search results page for the product you sell. The tempting mistake is to treat it like paid social with a product feed. The auction, the creative, and the sales you are allowed to count are all different.",
    sections: [
      {
        id: "what-it-is",
        heading: "What retail media is",
        paragraphs: [
          "A retailer sells the ad slot next to the product. The signal is shopping intent plus the retailer’s own data: searches, clicks, and purchases. Amazon is the largest of these, but it is not the only one. Walmart, Instacart, and a long list of grocers run their own networks. Each network has its own minimums and its own definition of a sale. If the help center does not state a number, this site marks it unknown rather than borrowing Amazon’s.",
          "Amazon says it operates 23 online stores and that registering for ads in one country lets you advertise in the stores where you sell. The guide does not name all 23, so a country-by-country availability table is not something we will invent.",
        ],
      },
      {
        id: "formats",
        heading: "The three sponsored formats",
        paragraphs: [
          "Sponsored Products promote one product. They are cost-per-click, they show in search results and on product pages, and a click goes to that product’s detail page. Amazon also describes a video version of Sponsored Products. You set a daily budget. Ads only serve when the item is in stock.",
          "Sponsored Brands promote a brand or a set of products, often with a headline and a logo. Amazon says you can set a daily budget and a campaign budget. You can raise a campaign budget. You cannot lower it, so a daily budget is the flexible choice if the test might need to shrink.",
          "Sponsored Display is the prospecting and remarketing cousin, on and off Amazon, still with a daily budget in Amazon’s cost guide. Amazon DSP is a further step out: programmatic display, video, and streaming, with its own seat and its own specs. Those specs are not reprinted here.",
        ],
      },
      {
        id: "budget",
        heading: "The budget myth",
        paragraphs: [
          "Amazon’s cost guide says there is no minimum spend requirement for sponsored ads, and that you can start a test as low as $10. The Sponsored Products budget guide then recommends at least $10, or the local equivalent, so the ad has a chance of lasting through the day. Read those as two different sentences. One is “we will not refuse a small budget.” The other is “a tiny budget may run out before lunch.”",
          "You choose the bid. Amazon says you are not charged more than the bid you set. A bid that never wins is not a cheap test. It is an ad that did not run. If the campaign spends nothing, raise the bid or fix the product — stock, price, reviews, and the main image — before you blame the keyword.",
        ],
      },
      {
        id: "metrics",
        heading: "ACOS, ROAS, and total sales",
        paragraphs: [
          "ACOS is ad spend divided by ad-attributed sales. ROAS is the inverse: ad-attributed sales divided by ad spend. Neither number knows your margin. A 20% ACOS is healthy for a product with 50% margin and ruinous for a product with 15% margin. Set the ceiling from the contribution margin, not from a blog benchmark.",
          "TACOS is ad spend divided by total sales, ads plus organic. It tells you whether advertising is a growing tax on the whole listing. New-to-brand metrics, where Amazon shows them, tell you whether you bought a repeat customer or a first-time buyer. They are not available on every report. If a column is missing, it is missing — do not backfill it.",
        ],
      },
      {
        id: "listing",
        heading: "The listing is the ad",
        paragraphs: [
          "Sponsored Products send the click to the detail page. A weak title, a main image that fails the zoom test, or a price that is out of line will waste a perfectly targeted click. Amazon’s own best-practice guide tells advertisers to keep the item in stock, in the featured offer, with a clear title and several images. That work is part of the media plan.",
          "When you expand to a second marketplace, do not assume the US keyword list and the US bid travel. Language, price, and fulfillment change the conversion rate, which changes the bid you can afford.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is $10 the minimum Amazon Ads budget?",
        answer:
          "Amazon says sponsored ads have no minimum spend requirement, and describes testing from as low as $10. Separately, its Sponsored Products budget guide recommends a minimum of $10 or the local equivalent for many advertisers. Treat $10 as Amazon’s suggested starting point, not as a hard gate.",
      },
      {
        question: "Which format should a new brand use first?",
        answer:
          "Sponsored Products on the hero SKU, if that SKU is in stock and has a detail page you would be willing to send a stranger to. Add Sponsored Brands once you have more than one product worth showing together. Add Sponsored Display or DSP when you are trying to reach people who are not already searching your category on Amazon.",
      },
      {
        question: "What is a good ACOS?",
        answer:
          "Amazon does not publish a universal good ACOS, and neither do we. ACOS has to sit under the margin you have left after product cost, fees, and returns. Compare it with the ACOS of the same SKU last month, not with a number from another category.",
      },
      {
        question: "Can I run Amazon ads in every country?",
        answer:
          "Unknown as a full list. Amazon says it operates 23 online stores and that you advertise in the stores where you sell. Confirm the store in your ads console before you localize creative.",
      },
    ],
    relatedUpdateSlugs: [],
    relatedPlatformSlugs: ["amazon-ads", "pinterest"],
    sources: [
      { label: "Understanding Amazon advertising", url: "https://advertising.amazon.com/library/guides/basics-of-success-understanding-amazon-advertising" },
      { label: "Sponsored Products budget basics", url: "https://advertising.amazon.com/library/guides/sponsored-products-budget-best-practices" },
      { label: "Sponsored Products", url: "https://advertising.amazon.com/solutions/products/sponsored-products" },
      { label: "Global advertising", url: "https://advertising.amazon.com/library/guides/global-advertising" },
    ],
  },
  {
    slug: "tiktok-ads",
    title: "TikTok ads: specs, budget floors, and the reserved formats",
    description:
      "How TikTok in-feed ads are specced, what the published budget minimums are, and how Logo Takeover, Prime Time, and TopReach differ from the auction.",
    channelSlug: "paid-social",
    updated: "2026-11-23",
    intro:
      "TikTok is paid social with a harder creative standard and a published budget floor. The auction will spend, but a recycled Meta video with a tiny daily budget usually fails twice: the edit is wrong, and the budget never clears the minimum TikTok prints in Ads Manager.",
    sections: [
      {
        id: "in-feed",
        heading: "In-feed ads, Spark and otherwise",
        paragraphs: [
          "Non-Spark ads are videos you upload. TikTok’s June 2026 spec recommends vertical 9:16 at 540 × 960 pixels or larger, and also accepts 16:9 from 960 × 540 and 1:1 from 640 × 640. Files can be mp4, mov, mpeg, 3gp, or avi, up to 10 minutes and 500 MB, at 516 kbps or higher. The caption is set in TikTok’s font. Links, @ mentions, and hashtags in that caption are not supported.",
          "Spark Ads run an organic post, yours or a creator’s, as the ad. The caption comes from the post, up to four lines. The spec page lists mp4 or mov and does not cap the duration. Spark is usually the better default when the organic post already looks like TikTok. A polished film can still work as non-Spark if the first second is native.",
        ],
      },
      {
        id: "budget",
        heading: "The budget floor is not a suggestion",
        paragraphs: [
          "TikTok’s budget article, updated July 2026, says a daily campaign budget must exceed $50 and a daily ad group budget must exceed $20. A lifetime ad group budget has to cover the daily minimum times the number of days, including days already run. Their example for 31 days is $620. The page writes dollars and does not name the currency.",
          "You cannot switch between daily and lifetime after the campaign or ad group is live. The campaign budget should not sit below the ad group budget. TikTok also warns against raising a learning campaign by more than 40% at a time, or a graduated campaign by more than 30%, and against changing it more often than every two days.",
        ],
      },
      {
        id: "reserved",
        heading: "Reserved formats from NewFronts 2026",
        paragraphs: [
          "On 24 March 2026 TikTok announced three high-impact products. Logo Takeover brands the moment the app opens. Prime Time serves up to three sequential ads from one advertiser to the same person inside a 15-minute window. TopReach bundles TopView, the first thing you see on open, with TopFeed, the first in-feed ad, as one buy aimed at a single day’s reach.",
          "The newsroom post is about the US-facing NewFronts audience. It does not publish a country list or a rate card. File specs for these units are not in that post either. Price and availability stay unknown until a rep or a help article states them.",
        ],
      },
      {
        id: "testing",
        heading: "How to test without burning the floor",
        paragraphs: [
          "Put the first test in one country, in one ad group above the $20 floor, inside a campaign above the $50 floor. Three to five hooks on the same offer is a real test. Fifteen ads on three offers is a tie.",
          "Watch hook rate (the early views divided by impressions) before you watch CPA. If people skip in the first second, a lower bid will not save the ad. Replace the open. Keep the product, the caption, and the landing page still so you know what changed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I start TikTok ads at $20 a day?",
        answer:
          "Not quite. TikTok says the ad group daily budget must exceed $20, and the campaign daily budget must exceed $50 if you set a campaign budget. A lifetime budget has to cover the daily minimum across every scheduled day.",
      },
      {
        question: "What aspect ratio should I export?",
        answer:
          "9:16, at least 540 × 960, is the recommended in-feed size. 1080 × 1920 meets that minimum and holds up on a phone. Keep text and logos out of the bottom and right, where the caption and buttons sit. TikTok publishes safe-zone files because the exact margin depends on the caption.",
      },
      {
        question: "Are Logo Takeover and TopView the same thing?",
        answer:
          "No. TopView is the existing first view when someone opens the app. Logo Takeover, announced in March 2026, co-brands that open with TikTok. TopReach is a package of TopView plus TopFeed, not a third video spec.",
      },
      {
        question: "Which countries can I target?",
        answer:
          "Unknown from the help pages cited here. Ads Manager shows the markets on your account. The NewFronts announcement talks about audiences in the US and does not list a global rollout.",
      },
    ],
    relatedUpdateSlugs: ["tiktok-newfronts-high-impact-formats"],
    relatedPlatformSlugs: ["tiktok", "meta", "snap"],
    sources: [
      { label: "TikTok in-feed specifications", url: "https://ads.tiktok.com/help/article/video-ads-specifications?lang=en" },
      { label: "TikTok budgets", url: "https://ads.tiktok.com/help/article/budget?lang=en" },
      { label: "NewFronts 2026 formats", url: "https://newsroom.tiktok.com/newfronts-26-tiktok-unveils-new-high-impact-ad-solutions?lang=en" },
    ],
  },
  {
    slug: "programmatic",
    title: "Programmatic and DSPs: what you can know before you have a seat",
    description:
      "How programmatic buying differs from a social ads manager, what The Trade Desk is, and which specs and minimums are genuinely unpublished.",
    channelSlug: "programmatic-dsp",
    updated: "2026-11-23",
    intro:
      "A demand-side platform buys impressions across other companies’ sites, apps, and streaming services. You do not get a single feed with one aspect ratio. You get a seat, a set of supply paths, and a creative spec that changes with every publisher. That is the whole trick, and it is why a directory page for The Trade Desk has more unknowns than the page for Snap.",
    sections: [
      {
        id: "dsp",
        heading: "What a DSP does",
        paragraphs: [
          "The advertiser, or the agency, bids through the DSP. A supply-side platform or a publisher offers the impression. The bid request describes the slot: size, device, roughly where it is, and whatever identity the two sides are allowed to share. The DSP decides whether to bid and with which ad.",
          "Walled gardens such as Meta and TikTok run this auction inside one app and show you a friendly ads manager. A DSP runs it across many apps. Reporting can be richer. The preview is worse. You will not know exactly which article carried the ad unless the deal was private.",
        ],
      },
      {
        id: "deals",
        heading: "Open auction, private marketplace, guaranteed",
        paragraphs: [
          "Open auction is the default: any eligible buyer can bid on the impression. A private marketplace is an invite-only auction with a floor price, often used when a publisher wants higher quality or a specific advertiser category. Programmatic guaranteed is a reservation: you agree on impressions or spend in advance, and the pipes are still programmatic.",
          "CTV is usually one of those three, sold against a streaming service rather than a website. The file is a video with a publisher spec — duration, codec, loudness — not a universal Trade Desk template. If a plan promises “standard CTV specs,” ask which publisher.",
        ],
      },
      {
        id: "trade-desk",
        heading: "The Trade Desk, specifically",
        paragraphs: [
          "The Trade Desk describes itself as a global, self-serve platform for buyers, with offices in North America, Europe, and Asia Pacific. Kokai is its campaign interface. None of that is a rate card. We did not find a public minimum daily budget, and we did not find a single creative spec that covers every impression the platform can buy. Both are marked unknown on the directory page on purpose.",
          "Use The Trade Desk when you need inventory you cannot buy inside one walled garden: premium video, some CTV, audio, and publishers that will not put their whole catalog into an ads manager. Use a walled garden when the audience and the creative format live inside that app. Many advertisers do both. They should not share one CPA target without saying so.",
        ],
      },
      {
        id: "measurement",
        heading: "Measurement, said plainly",
        paragraphs: [
          "A DSP will report impressions, viewability, clicks, and conversions you send it. Viewability is not a sale. A completed CTV view is not a site visit. Decide the outcome before the deal: a site action you can pixel, a brand lift study, or an offline sale you will match later.",
          "Fees sit on top of media. Platform fees, data fees, and verification fees change the working media in a budget. Ask for the fee stack in writing before you compare a DSP CPM with a Meta CPM. They are not the same purchase.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the minimum budget on The Trade Desk?",
        answer:
          "Unknown. The Trade Desk does not publish a self-serve daily minimum the way TikTok or LinkedIn do. Seats are commercial agreements. Anyone quoting a universal minimum without a contract in front of them is guessing.",
      },
      {
        question: "Can I upload one video and run it everywhere?",
        answer:
          "No. Display sizes, native templates, audio files, and CTV specs are set by the publisher or the exchange. Build a small set — a few display sizes, one 15-second and one 30-second video — and expect to re-export when a publisher rejects the file.",
      },
      {
        question: "Is programmatic the same as Performance Max?",
        answer:
          "No. Performance Max is Google’s automated campaign across Google inventory. A DSP bids on inventory Google does not own. They can complement each other. They do not share a campaign setup.",
      },
      {
        question: "Which countries does The Trade Desk cover?",
        answer:
          "The company calls the platform global and lists offices across North America, Europe, and Asia Pacific. A public country list was not part of the sources we checked, so the directory leaves the market list unknown.",
      },
    ],
    relatedUpdateSlugs: [],
    relatedPlatformSlugs: ["the-trade-desk", "google-ads", "amazon-ads"],
    sources: [
      { label: "The Trade Desk", url: "https://www.thetradedesk.com/" },
      {
        label: "The Trade Desk Q3 2026 results",
        url: "https://investors.thetradedesk.com/news-and-events/news/news-details/2026/The-Trade-Desk-Reports-Third-Quarter-2026-Financial-Results/default.aspx",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
