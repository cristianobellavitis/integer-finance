import React from "react";
import Link from "next/link";
import Image from "next/image";

import type { PostPreview } from "./types";
import { truncateString, formatPostDate } from "@/lib/utils";
import { urlForImage } from "@/../sanity/lib/image";

export const Post = ({ post }: { post: PostPreview }) => {
  const imageUrl = post.mainImage ? urlForImage(post.mainImage) : "/logo.png";
  if (!post.slug) {
    return;
  }

  return (
    <Link
      href={`/news/${post.slug.current}`}
      className="group flex h-full w-full max-w-lg flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md"
    >
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          width={500}
          height={250}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={post.mainImage?.alt ?? "post cover image"}
        />
      </div>

      <div className="flex flex-grow flex-col p-6">
        <p className="text-sm text-muted-foreground">
          {formatPostDate(post._updatedAt)}
        </p>
        <h3 className="mt-1 font-heading text-xl font-semibold text-brand-900">
          {post.title}
        </h3>
        {post.previewText && (
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {truncateString(post.previewText, 150)}
          </p>
        )}
      </div>
    </Link>
  );
};
