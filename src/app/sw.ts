import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import {
  CacheFirst,
  StaleWhileRevalidate,
  ExpirationPlugin,
  Serwist,
} from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}
declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,

  runtimeCaching: [
    {
      matcher: ({ request, url }) =>
        request.destination === "image" || url.hostname.includes("utfs.io"),
      handler: new StaleWhileRevalidate({
        cacheName: "images-cache",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 150,
            maxAgeSeconds: 14 * 24 * 60 * 60,
          }),
        ],
      }),
    },

    {
      matcher: ({ request }) => request.destination === "font",
      handler: new CacheFirst({
        cacheName: "fonts-cache",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 50,
            maxAgeSeconds: 60 * 24 * 60 * 60,
          }),
        ],
      }),
    },

    {
      matcher: ({ request }) =>
        request.destination === "script" || request.destination === "style",
      handler: new StaleWhileRevalidate({
        cacheName: "assets-cache",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: 14 * 24 * 60 * 60,
          }),
        ],
      }),
    },
  ],

  fallbacks: {
    entries: [
      {
        url: "/offline",
        matcher({ request }) {
          return (
            request.destination === "document" && !request.url.includes("/api/")
          );
        },
      },
    ],
  },
});

serwist.addEventListeners();
