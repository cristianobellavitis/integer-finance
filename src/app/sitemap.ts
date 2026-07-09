import type { MetadataRoute } from "next";

import { SITE } from "@/constants/site";
import { getPostPreviews } from "@/app/(front)/(news)/news-utils";
import type { PostPreview } from "@/app/(front)/(news)/types";

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/our-mission", changeFrequency: "monthly", priority: 0.8 },
  { path: "/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/investors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lending/brokers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lending/customers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lending/solicitors", changeFrequency: "monthly", priority: 0.6 },
  { path: "/finance/residential-finance", changeFrequency: "monthly", priority: 0.9 },
  { path: "/finance/hmo-finance", changeFrequency: "monthly", priority: 0.9 },
  { path: "/finance/commercial-finance", changeFrequency: "monthly", priority: 0.9 },
  { path: "/finance/title-split", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/news", changeFrequency: "weekly", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = (await getPostPreviews()) as PostPreview[];
    postEntries = posts
      .filter((post): post is PostPreview & { slug: { current: string } } =>
        Boolean(post.slug?.current),
      )
      .map((post) => ({
        url: `${SITE.url}/news/${post.slug.current}`,
        lastModified: post._updatedAt,
        changeFrequency: "monthly",
        priority: 0.5,
      }));
  } catch {
    // Sanity not configured in this environment - static routes alone are
    // still a valid sitemap.
  }

  return [...staticEntries, ...postEntries];
}
