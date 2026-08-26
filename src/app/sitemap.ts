import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sunpowerind.com/",
      lastModified: new Date("2026-08-26"),
    },
    {
      url: "https://sunpowerind.com/privacy",
      lastModified: new Date("2026-08-26"),
    },
    {
      url: "https://sunpowerind.com/thank-you",
      lastModified: new Date("2026-08-26"),
    },
  ];
}
