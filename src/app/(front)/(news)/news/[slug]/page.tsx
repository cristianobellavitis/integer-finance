import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
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
import { formatPostDate, truncateString } from "@/lib/utils";
import { urlForImage } from "@/../sanity/lib/image";
import { getPostConetent, portableComponent } from "../../news-utils";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { SITE } from "@/constants/site";
import { buildMetadata } from "@/lib/seo";

import { unstable_cache } from "next/cache";

const getCachedPostContent = (slug: string) =>
  unstable_cache(
    async () => (await getPostConetent(slug)) as Post,
    ["post", slug],
    {
      tags: ["post", slug],
      revalidate: 30,
    },
  )();

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post: Post = await getCachedPostContent(params.slug);
  if (!post) return {};

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  const previewText = (post?.body?.[0] as any)?.children?.[0]?.text as
    | string
    | undefined;
  const description = previewText
    ? truncateString(previewText, 160)
    : `Read the latest from ${SITE.name}.`;
  // @ts-expect-error bypass sanity types
  const imageUrl = post?.mainImage ? urlForImage(post.mainImage) : undefined;

  const base = buildMetadata({
    title: post?.title ?? "News",
    description,
    path: `/news/${params.slug}`,
    image: imageUrl,
  });

  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article" },
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const post: Post = await getCachedPostContent(params.slug);
  if (!post) {
    return;
  }

  const postUrl = `https://integerinvestments.com/news/${params.slug}`;
  // @ts-expect-error bypass sanity types
  const imageUrl = post?.mainImage ? urlForImage(post?.mainImage) : "/logo.png";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post?.title,
    image: imageUrl,
    datePublished: post?._createdAt,
    dateModified: post?._updatedAt,
    author: {
      "@type": "Person",
      // @ts-expect-error bypass sanity types
      name: (post?.author?.name as unknown as string) ?? SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
    mainEntityOfPage: `${SITE.url}/news/${params.slug}`,
  };

  return (
    <MaxWidthWrapper className="my-6">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
          alt={post?.title ?? "Featured image"}
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
