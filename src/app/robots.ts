import type { MetadataRoute } from "next";

import { SITE } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard",
          "/sign-in",
          "/sign-up",
          "/studio",
          "/testing",
          "/form-test",
          "/drawdown",
          // Legacy/duplicate bare iframe embeds - the real, linked-from-nav
          // application pages live under /lending/customers/*.
          "/forms/",
          "/api/",
        ],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
