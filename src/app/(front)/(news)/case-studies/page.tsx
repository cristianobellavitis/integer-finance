import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

// Placeholder content only (fake titles/dates, no real links yet) - keep out
// of search results until this is populated with real case studies.
export const metadata: Metadata = {
  title: "Case Studies",
  robots: { index: false, follow: false },
};

const caseStudiesData = [
  {
    image: "/images/home/lending.png",
    title: "case study title 1",
    desc: "description 1",
    date: "date1",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 2",
    desc: "description 2",
    date: "date2",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 3",
    desc: "description 3",
    date: "date3",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 4",
    desc: "description 4",
    date: "date4",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 5",
    desc: "description 5",
    date: "date5",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 6",
    desc: "description 6",
    date: "date6",
  },
];

const Page = () => {
  return (
    <>
      <SectionWrapper>
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionHeading align="center" as="h1" title="Case Studies" />
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Stay informed with the latest updates from Integer Finance. Read
            about our latest initiatives, success stories, and insights into
            the property development and finance sectors. Our case studies
            highlight how we support regional growth and community
            regeneration.
          </p>
        </RevealOnScroll>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudiesData.map((item, index) => (
            <RevealOnScroll key={index} delayMs={index * 60}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md">
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                    alt={item.title}
                  />
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-grow text-base leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                  <Link
                    href=""
                    className="mt-4 self-start text-sm font-semibold text-primary hover:underline"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Page;
