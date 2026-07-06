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
      className="w-full max-w-lg overflow-hidden rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
    >
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          width={500}
          height={250}
          className="h-64 w-full rounded-t-lg object-cover"
          alt={post.mainImage?.alt ?? "post cover image"}
        />
      </div>

      <div className="flex flex-col rounded-b-lg bg-gray-100 p-8">
        <div className="title text-xl font-semibold text-primary">
          {post.title}
        </div>
        <div className="title text-sm text-gray-500">
          {formatPostDate(post._updatedAt)}
        </div>
        {post.previewText && (
          <div className="title text-base font-semibold text-gray-500">
            {truncateString(post.previewText, 150)}
          </div>
        )}
      </div>
    </Link>
  );
};
