import type {
  Slug,
  Post,
  BlockContent,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/../sanity.types";

export type { Post };

export type PostPreview = {
  _id: string;
  _updatedAt: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    };
    alt?: string;
  };
  // imageUrl?: string;
  categories?: Array<{
    _ref: string;
    _key: string;
  }>;
  previewText?: string;
};

export interface PostContent {
  _id: string;
  _updatedAt: string;
  title?: string;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    };
    alt?: string;
  };
  body?: BlockContent;
  authorName: string;
  tags?: Array<{
    title: string;
  }>;
}

export interface imageBlock {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}

export interface markDefs {
  href?: string;
  _type: "link";
  _key: string;
}
