import React from "react";
import type { Metadata } from "next";
import { Posts } from "../posts";
import { ReFetch } from "@/components/re-fetch";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "News",
  description:
    "The latest updates from Integer Finance - initiatives, success stories, and insights into property development and finance.",
  path: "/news",
});

const Page = async () => {
  return (
    <>
      <ReFetch ms={900000} />

      <SectionWrapper>
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionHeading align="center" as="h1" title="News" />
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Stay informed with the latest updates from Integer Finance. Read
            about our latest initiatives, success stories, and insights into
            the property development and finance sectors. Our case studies
            highlight how we support regional growth and community
            regeneration.
          </p>
        </RevealOnScroll>
      </SectionWrapper>

      <Posts />
    </>
  );
};

export default Page;
