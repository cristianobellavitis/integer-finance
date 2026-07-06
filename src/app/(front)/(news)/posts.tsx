import React from "react";

import { Post } from "./post";
import type { PostPreview } from "./types";
import { getPostPreviews } from "./news-utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

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
    <MaxWidthWrapper className="my-12">
      {/* <div className="grid grid-cols-1 place-items-center gap-x-3 gap-y-6 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-36"> */}
      <div className="grid grid-cols-1 place-items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-16 xl:px-24">
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
