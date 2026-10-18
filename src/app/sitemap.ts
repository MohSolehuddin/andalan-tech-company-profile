import type { MetadataRoute } from "next";

const siteUrl = process.env.APP_DOMAIN ?? "https://andalan.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
