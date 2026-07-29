import React from "react";

import { Post } from "./post";
import type { PostPreview } from "./types";
import { getPostPreviews } from "./news-utils";
import SectionWrapper from "@/components/common/SectionWrapper";

import { unstable_cache } from "next/cache";

// Cache key/tag bumped to "all-posts-v2": the "all-posts" key was cached with
// an empty result during the first production build (before real Sanity env
// vars existed), and Vercel's Data Cache persists across deployments — a
// redeploy alone doesn't bust it, since the key itself never changed. Bumping
// the key orphans that stale empty entry and forces a fresh fetch.
const getCachedPosts = unstable_cache(
  async () => (await getPostPreviews()) as PostPreview[],
  ["all-posts-v2"],
  {
    tags: ["all-posts-v2"],
    revalidate: 30,
  },
);

export const Posts = async () => {
  // eslint-disable-next-line
  // const posts: PostPreview[] = await getPostPreviews(); //: PostPreview[]
  const posts: PostPreview[] = await getCachedPosts();

  return (
    <SectionWrapper className="pt-0">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};
