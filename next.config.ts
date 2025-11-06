import withSerwistInit from "@serwist/next";

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  cacheOnNavigation: true,
  register: true,
  reloadOnOnline: true,
  dontCacheBustURLsMatching:
    /^\/_next\/static\/(?:chunks|css)\/.*\.(?:js|css)$/,
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  disable: process.env.NODE_ENV === "development",
  exclude: [
    /\.map$/,
    /^manifest$/,
    /\.txt$/,
    /\.xml$/,
    /\.json$/,
    /^_next\/static\/chunks\/pages\/_error/,
  ],
  additionalPrecacheEntries: [
    { url: "/", revision },
    { url: "/search", revision },
    { url: "/offline", revision },
    { url: "/manifest.webmanifest", revision },
    { url: "/favicon.ico", revision },
    { url: "/manifest.json", revision },
  ],
});

export default withSerwist({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**",
      },
    ],
  },
});
