import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import {
  TwitterButton,
  FacebookButton,
  LinkedinButton,
} from "@/components/social-buttons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import type { Post } from "@/../sanity.types";
import { ReFetch } from "@/components/re-fetch";
import { formatPostDate } from "@/lib/utils";
import { urlForImage } from "@/../sanity/lib/image";
import { getPostConetent, portableComponent } from "../../news-utils";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { unstable_cache } from "next/cache";

async function Page({ params }: { params: { slug: string } }) {
  const getCachedPostContent = unstable_cache(
    async () => (await getPostConetent(params.slug)) as Post,
    ["post", params.slug],
    {
      tags: ["post", params.slug],
      revalidate: 30,
    },
  );
  //
  const post: Post = await getCachedPostContent();
  // const post = (await getPostConetent(params.slug)) as Post;
  if (!post) {
    return;
  }

  const postUrl = `https://integerinvestments.com/news/${params.slug}`;
  // @ts-expect-error bypass sanity types
  const imageUrl = post?.mainImage ? urlForImage(post?.mainImage) : "/logo.png";

  return (
    <MaxWidthWrapper className="my-6">
      <ReFetch ms={900000} />
      <article className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
        <div className="not-prose mb-6 space-y-4">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-brand-900 lg:text-5xl">
            {post?.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/favicon.ico" />
                <AvatarFallback>II</AvatarFallback>
              </Avatar>
              {/* @ts-expect-error bypass sanity types */}
              <span>{post?.author?.name as unknown as string}</span>
            </div>
            <span>•</span>
            <time>
              {post?._updatedAt ? formatPostDate(post?._updatedAt) : ""}
            </time>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="Featured Image"
          width={1200}
          height={600}
          className="mx-auto mb-6 aspect-[2/1] overflow-hidden rounded-lg object-cover"
        />
        {/* post content */}
        <div className="space-y-2">
          {" "}
          <PortableText
            value={post?.body ?? []}
            components={portableComponent as PortableTextComponents}
          />
        </div>
        {/* tags  */}
        <div className="flex flex-wrap items-center gap-2 pt-6">
          {post.categories?.map((cate, index) => (
            <Badge
              variant="outline"
              className="border-primary text-primary"
              key={index}
            >
              {/* @ts-expect-error bypass sanity types */}
              {cate.title}
            </Badge>
          ))}
        </div>
        {/* social buttons */}
        <div className="flex items-center justify-between pt-6">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-primary">Share</span>
            <TwitterButton url={postUrl} title={post?.title ?? ""} />
            <FacebookButton url={postUrl} quote={post?.title ?? ""} />
            <LinkedinButton url={postUrl} />
          </div>
        </div>
      </article>
    </MaxWidthWrapper>
  );
}

export default Page;
