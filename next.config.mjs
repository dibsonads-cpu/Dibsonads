/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "assets.aboutamazon.com" },
      { protocol: "https", hostname: "about.ads.microsoft.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "p16-ttark.tiktokcdn-us.com" },
      { protocol: "https", hostname: "p16-ttark-useast8.tiktokcdn-us.com" },
      { protocol: "https", hostname: "p16-va-tiktok.ibyteimg.com" },
      { protocol: "https", hostname: "redditinc.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "about.fb.com" },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
