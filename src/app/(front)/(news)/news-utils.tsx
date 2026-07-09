import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import type { markDefs } from "./types";
import type { Image as TImage } from "sanity";
import { client } from "@/../sanity/lib/client";
import { urlForImage } from "@/../sanity/lib/image";
import { isSanityConfigured } from "@/../sanity/env";
import { getImageDimensions } from "@sanity/asset-utils";
import type { SanityImageSource } from "@sanity/asset-utils";

export const getPostPreviews = async () => {
  // PREVIEW-SAFE FALLBACK: no real Sanity credentials configured, so skip
  // the network call and render an empty list rather than failing the
  // build. Remove this guard once real Sanity keys are set (see sanity/env.ts).
  if (!isSanityConfigured) return [];

  const query = `*[_type == "post" && !(_id in path("drafts.**"))]{
    _id,
    _updatedAt,
    title,
    slug,
    author,
    mainImage,
    categories,
    "previewText": body[0].children[0].text,
  }`;
  try {
    // eslint-disable-next-line
    const posts = await client.fetch(query);
    // eslint-disable-next-line
    return posts;
  } catch (error) {
    console.error("Failed to fetch post previews from Sanity:", error);
    return [];
  }
};
import { type Post } from "@/../sanity.types";
export const getPostConetent = async (slug: string) => {
  // PREVIEW-SAFE FALLBACK: no real Sanity credentials configured, so skip
  // the network call rather than failing the build. Remove this guard once
  // real Sanity keys are set (see sanity/env.ts).
  if (!isSanityConfigured) return [];

  // const query = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == '${slug}'] {
  //   _id,
  //   _updatedAt,
  //   title,
  //   mainImage,
  //   body,
  //   "authorName": author->.name,
  //   "tags": categories[]-> {
  //       title,
  //   },
  // }`;
  //
  const query = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == '${slug}'] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    mainImage,
    body,
    author->{
      _id,
      name,
      image,
    },
    categories[]->{
      _id,
      title,
    },
  }`;

  try {
    // eslint-disable-next-line
    const posts = await client.fetch<Post[]>(query);
    if (posts.length > 0) {
      return posts[0];
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch post content from Sanity:", error);
    return [];
  }
};

const portableImageComponent = ({
  value,
  isInline,
}: {
  value: TImage;
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(
    value as unknown as SanityImageSource,
  );
  const imageUrl = value ? urlForImage(value) : "/logo.png";

  return (
    <Image
      src={imageUrl}
      alt={(value?.alt as string) || " "}
      width={width}
      height={height}
      style={{
        display: isInline ? "inline-block" : "block",
      }}
    />
  );
};

export const portableComponent = {
  types: {
    image: portableImageComponent,
  },
  list: {
    bullet: ({ children }: { children: ReactNode }) => (
      <ul className="list-disc pl-5">{children}</ul>
    ),
    number: ({ children }: { children: ReactNode }) => (
      <ol className="list-decimal pl-5">{children}</ol>
    ),
    // checkmarks: ({ children }) => (
    //   <ol className="m-auto text-lg">{children}</ol>
    // ),
  },
  marks: {
    em: ({ children }: { children: ReactNode }) => (
      <em className="font-semibold text-brand-900">{children}</em>
    ),
    link: ({ value, children }: { value: markDefs; children: ReactNode }) => {
      const target = (value?.href ?? "").startsWith("http")
        ? "_blank"
        : undefined;
      const rel = target === "_blank" ? "noindex nofollow" : undefined;

      return (
        <Link
          href={value?.href ?? "#"}
          target={target}
          rel={rel}
          className="text-primary underline"
        >
          {children}
        </Link>
      );
    },
  },
};
