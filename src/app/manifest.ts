import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NexoLive",
    short_name: "NexoLive",
    description:
      "NexoLive — Stream, connect, and go live with a modern, smooth, and fast experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#171717",
    orientation: "portrait",
    scope: "/",
    lang: "en",
    icons: [
      {
        src: "/twitch-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/twitch.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    categories: ["entertainment", "video", "social", "utilities"],

    prefer_related_applications: false,
  };
}
