import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-09-03"),
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date("2026-09-03"),
    },
    {
      url: `${siteUrl}/thank-you`,
      lastModified: new Date("2026-09-03"),
    },
  ];
}
