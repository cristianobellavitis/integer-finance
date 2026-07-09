import type { Metadata } from "next";

import { SITE } from "@/constants/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/our-mission". Empty string for the homepage. */
  path: string;
  /** Absolute or root-relative image URL. Defaults to the site logo. */
  image?: string;
  noIndex?: boolean;
}

// Next.js merges page-level `metadata` with the parent layout's shallowly -
// a page that sets `title`/`description` but not `openGraph`/`twitter`
// silently inherits the ROOT layout's generic OG/Twitter object as-is,
// rather than picking up the page's own title/description. Every page
// should build its metadata through this helper so social/AI crawlers see
// the actual per-page title and description, not the homepage's.
export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? "/logo.png";

  return {
    title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
