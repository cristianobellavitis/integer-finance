import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CircleX, Download } from "lucide-react";

import { NOT_FUNDED } from "@/constants/products";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import LendingForm from "@/components/forms/LendingForm";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import FinanceHero from "../finance/_components/FinanceHero";
import GuideMatcher from "./_components/guide-matcher";
import GuideMatrix from "./_components/guide-matrix";
import GuideSectionNav from "./_components/guide-section-nav";
import GuideRanges from "./_components/guide-ranges";
import GuideCore from "./_components/guide-core";
import GuidePlus from "./_components/guide-plus";

const PAGE_DESCRIPTION =
  "Integer Lending's product guide: bridging, refurbishment and commercial loans from £50,000 to £350,000 across England and Wales, with larger loans coming soon.";

export const metadata: Metadata = buildMetadata({
  title: "Product Guide",
  description: PAGE_DESCRIPTION,
  path: "/product-guide",
});

const PDF_PATH = "/files/integer-product-guide.pdf";

// Leaves room for the sticky section menu when jumping to a section.
const SECTION = "scroll-mt-16";

export default function Page() {
  return (
    <>
      <FinanceHero
        title="Product Guide"
        description="Short-term property finance, built around your project. Bridging, refurbishment and commercial loans for property investors and developers across England and Wales."
      />

      <SectionWrapper className="pb-0">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={PDF_PATH}
            download
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            <Download className="h-4 w-4" />
            Download the PDF guide
          </a>
          <Link
            href="/lending/customers/loan-application"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Apply for a loan
          </Link>
        </div>
      </SectionWrapper>

      <GuideSectionNav />

      <section id="find-your-loan" className={SECTION}>
        <GuideMatcher />
      </section>

      <section id="what-we-lend-on" className={SECTION}>
        <GuideMatrix />
      </section>

      <section id="how-it-works" className={SECTION}>
        <GuideRanges />
      </section>

      <section id="core-range" className={SECTION}>
        <GuideCore />
      </section>

      <section id="plus-range" className={SECTION}>
        <GuidePlus />
      </section>

      <section id="not-funded" className={SECTION}>
        <SectionWrapper>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <SectionHeading title="What we don't fund" size="lg" />
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {NOT_FUNDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base text-muted-foreground"
                  >
                    <CircleX className="mt-1 h-4 w-4 flex-shrink-0 text-brand-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-brand-50 p-6 md:col-span-5">
              <p className="font-heading text-xl font-semibold text-brand-900">
                Not sure where your deal fits?
              </p>
              <p className="mt-2 text-base leading-relaxed text-brand-900/80">
                Send us the details and we&apos;ll tell you which range suits
                it, and on what terms.
              </p>
              <Link
                href="/contact"
                className={buttonVariants({ size: "lg", className: "mt-5" })}
              >
                Talk to us
              </Link>
            </div>
          </div>
          <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
            All loans are subject to status, valuation, legal due diligence and
            credit approval. Criteria and pricing are indicative and may change
            without notice. Plus range products are not yet available.
          </p>
        </SectionWrapper>
      </section>

      <LendingForm />
    </>
  );
}
