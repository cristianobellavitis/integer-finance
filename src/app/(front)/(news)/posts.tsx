import React from "react";

import { Post } from "./post";
import type { PostPreview } from "./types";
import { getPostPreviews } from "./news-utils";
import SectionWrapper from "@/components/common/SectionWrapper";

import { unstable_cache } from "next/cache";

const getCachedPosts = unstable_cache(
  async () => (await getPostPreviews()) as PostPreview[],
  ["all-posts"],
  {
    tags: ["all-posts"],
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
