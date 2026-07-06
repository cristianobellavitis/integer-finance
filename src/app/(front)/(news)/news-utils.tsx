import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import type { markDefs } from "./types";
import type { Image as TImage } from "sanity";
import { client } from "@/../sanity/lib/client";
import { urlForImage } from "@/../sanity/lib/image";
import { getImageDimensions } from "@sanity/asset-utils";
import type { SanityImageSource } from "@sanity/asset-utils";

export const getPostPreviews = async () => {
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
  // eslint-disable-next-line
  const posts = await client.fetch(query);
  // eslint-disable-next-line
  return posts;
};
import { type Post } from "@/../sanity.types";
export const getPostConetent = async (slug: string) => {
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

  // eslint-disable-next-line

  const posts = await client.fetch<Post[]>(query);
  if (posts.length > 0) {
    return posts[0];
  }
  return [];
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
      <em className="font-semibold text-gray-600">{children}</em>
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
          className="text-blue-500 underline"
        >
          {children}
        </Link>
      );
    },
  },
};
