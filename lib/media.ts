export type LaunchMedia = {
  type: "image" | "video" | "logo";
  src: string;
  alt: string;
  credit: string;
  sourceUrl: string;
  licence: string;
};

export const ARTICLE_TERMS =
  "Official image from the source article, embedded from the publisher and linked. Not copied into this repository.";

export const LOGO_TERMS =
  "Official logo, unmodified, used only to identify the platform. Trademark of the owner. Editorial identification, not an endorsement or a partnership.";

/** Article hero images taken from each post’s own Open Graph image. */
const articleImages: Record<string, string> = {
  "https://blog.google/products/marketingplatform/360/google-marketing-platform-drop-november/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ss_0108-GMP_Drop_November___Design_Frame01_.max-1440x810.png",
  "https://www.aboutamazon.co.uk/news/entertainment/the-2026-amazon-uk-upfront-brings-industry-standard-measurement-to-prime-video-and-local-relevance-to-national-campaigns":
    "https://assets.aboutamazon.com/dims4/default/99ef873/2147483647/strip/true/crop/2000x1000+0+167/resize/1200x600!/quality/90/?url=https%3A%2F%2Fassets.aboutamazon.com%2F0e%2F2b%2F52a6fe224fc79dd5d2413c5f4c6e%2Fphil-christer-uk-managing-director-amazon-ads-4.jpg",
  "https://about.ads.microsoft.com/en/blog/post/november-2026/put-ai-to-work-engaging-customers-in-more-places-whats-new-in-microsoft-advertising-this-november":
    "https://about.ads.microsoft.com/content/dam/sites/msa-about/global/common/content-lib/blogs/blog/2026/11/pub_NewHero_90713_844x315.png",
  "https://openai.com/index/chatgpt-ads-expands-26-new-countries":
    "https://images.ctfassets.net/kftzwdyauwt9/6Fq2uj7xCpKHENjyeojn9c/d3771e7cecdfb77c28c7560de9413de1/chatgpt-ads-expands-26-new-countries-social.png?w=1600&h=900&fit=fill",
  "https://blog.google/products/marketingplatform/360/vertical-video-unification/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/01_Blog_-_Header.max-1440x810.png",
  "https://newsroom.pinterest.com/news/new-pinterest-visual-search-performance-ads/":
    "https://images.ctfassets.net/2pyx8rwuvz6x/4TNhQBd5w1YujE5D87qpYM/99bd74367b9a398c3cf063d7cff9f76b/newsroom-post-Presents-hero-US.jpg?fm=webp&q=85",
  "https://blog.google/products/ads-commerce/new-real-estate-ads-formats/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/bring_homebuyers_and_local_agents_together_.max-1440x810.png",
  "https://blog.google/products-and-platforms/products/youtube/youtube-demand-gen-updates/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GML_Demand_Gen_social.width-1300.png",
  "https://blog.google/products/ads-commerce/google-marketing-live-search-ads/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GML_Search_social.width-1300.png",
  "https://blog.google/products-and-platforms/products/youtube/youtube-brandcast-2026-advertiser-updates/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YT_Brandcast_social.max-1440x810.png",
  "https://openai.com/index/new-ways-to-buy-chatgpt-ads/":
    "https://images.ctfassets.net/kftzwdyauwt9/7BFuH170Tk8pxf9XMjXE48/253f0f50015a47b3a94a42c57c5bd3b9/SEO-ChatGPT-Ads.png?w=1600&h=900&fit=fill",
  "https://blog.google/products/ads-commerce/ai-max-for-shopping/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Shopping_x_AI_Max_Road_to_GML_Master-Header.max-1440x810.png",
  "https://about.ads.microsoft.com/en/blog/post/april-2026/win-across-all-three-eras-of-the-web":
    "https://about.ads.microsoft.com/content/dam/sites/msa-about/global/common/content-lib/blogs/blog/2026/04/blog-84097-hero-844x474_01.png",
  "https://newsroom.tiktok.com/newfronts-26-tiktok-unveils-new-high-impact-ad-solutions?lang=en":
    "https://p16-ttark.tiktokcdn-us.com/tos-useast5-i-1rzkm2vceq-tx/5b6f029403a2c639f8fe124fa48e2e8d.png~tplv-1rzkm2vceq-default:0:0:q75.image",
  "https://blog.google/products/ads-commerce/vrc-non-skip-ads-generally-available/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Brand-NS_1920x1080.max-1440x810.png",
  "https://newsroom.tiktok.com/tiktok-feiert-die-liebe-zum-film-zur-berlinale-2026?lang=de-DE":
    "https://p16-ttark-useast8.tiktokcdn-us.com/tos-useast8-i-zr23xo8qx2-tx2/408a2525d003524161b5163c8b7bd7e6.png~tplv-zr23xo8qx2-default:0:0:q75.image",
  "https://openai.com/index/testing-ads-in-chatgpt/":
    "https://images.ctfassets.net/kftzwdyauwt9/21TdmlEzFwgoo7ZER7SNCV/001b3d542fd4d025a2dcd1a5ab9417fe/OAI_AdsTest_Blog_OpenGraph_1200x630.png?w=1600&h=900&fit=fill",
  "https://redditinc.com/news/now-in-beta-max-campaigns-for-ai-powered-ad-performance-and-unique-audience-insights":
    "https://redditinc.com/hubfs/BlogHeader_Icons_006@2x.jpg",
  "https://newsroom.pinterest.com/en-au/news/pinterest-introduces-top-of-search-ads-and-new-advertising-tools/":
    "https://images.ctfassets.net/2pyx8rwuvz6x/7gha1SzKZT4zlNYqjJQcYn/5be1a3925587ea9333c00bb2fcece459/Hero_Video_Thumb__1_.jpg?fm=webp&q=85",
  "https://newsroom.pinterest.com/news/where-to-buy-links-turn-inspiration-into-action-for-cpg-brands-on-pinterest/":
    "https://images.ctfassets.net/2pyx8rwuvz6x/68N74VPdtFXyo7TYAlKd0z/93fa879680c443336a9728894e9a8a86/WTB_links_-_newsroom.png?fm=webp&q=85",
  "https://newsroom.tiktok.com/tiktok-world-2025?lang=en":
    "https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/3f00e9b518f885c1cfde22c77b38d388.png",
  "https://www.business.reddit.com/blog/dynamic-product-ads-launch":
    "https://cdn.prod.website-files.com/68779613f0480ed104c47c15/68b97250c89b7c4847ba51e5_6661fe6bc11e42cfb125e321_shoppingblog.webp",
  "https://blog.google/products/ads-commerce/google-ai-max-for-search-campaigns/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_AI_Max_in_Search_campaigns_Hero_1080p_.width-1300.png",
  "https://blog.google/products/marketingplatform/360/google-newfront-rethink-ctv-beyond-streaming-with-display-video-360/":
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/newfront_still_copy.width-1300.png",
};

const logos: Record<string, { src: string; page: string }> = {
  "Google Ads": { src: "/logos/google.svg", page: "https://commons.wikimedia.org/wiki/File:Google_2015_logo.svg" },
  YouTube: { src: "/logos/youtube.svg", page: "https://commons.wikimedia.org/wiki/File:YouTube_full-color_icon_(2017).svg" },
  "Display & Video 360": { src: "/logos/google.svg", page: "https://commons.wikimedia.org/wiki/File:Google_2015_logo.svg" },
  Meta: { src: "/logos/meta.svg", page: "https://commons.wikimedia.org/wiki/File:Meta_Platforms_Inc._logo.svg" },
  TikTok: { src: "/logos/tiktok.svg", page: "https://commons.wikimedia.org/wiki/File:TikTok_logo.svg" },
  "Amazon Ads": { src: "/logos/amazon.svg", page: "https://commons.wikimedia.org/wiki/File:Amazon_logo.svg" },
  Pinterest: { src: "/logos/pinterest.svg", page: "https://commons.wikimedia.org/wiki/File:Pinterest_Logo.svg" },
  LinkedIn: { src: "/logos/linkedin.svg", page: "https://commons.wikimedia.org/wiki/File:LinkedIn_logo_initials.png" },
  Reddit: { src: "/logos/reddit.svg", page: "https://commons.wikimedia.org/wiki/File:Reddit_logo.svg" },
  "Microsoft Advertising": { src: "/logos/microsoft.svg", page: "https://commons.wikimedia.org/wiki/File:Microsoft_logo.svg" },
  "ChatGPT Ads": { src: "/logos/openai.svg", page: "https://commons.wikimedia.org/wiki/File:OpenAI_Logo.svg" },
};

export function logoFor(platform: string) {
  return logos[platform] ?? logos["Google Ads"];
}

export function mediaFor(platform: string, title: string, sourceUrl: string, sourceName: string): LaunchMedia {
  const src = articleImages[sourceUrl];
  if (src) {
    return {
      type: "image",
      src,
      alt: title,
      credit: sourceName,
      sourceUrl,
      licence: ARTICLE_TERMS,
    };
  }
  const logo = logoFor(platform);
  return {
    type: "logo",
    src: logo.src,
    alt: `${platform} logo`,
    credit: platform,
    sourceUrl: logo.page,
    licence: LOGO_TERMS,
  };
}
