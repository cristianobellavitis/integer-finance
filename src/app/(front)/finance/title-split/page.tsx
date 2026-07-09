import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Construction, BrickWall } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import LendingForm from "@/components/forms/LendingForm";
import FinanceHero from "../_components/FinanceHero";
import FinanceSolutionsGrid from "../_components/FinanceSolutionsGrid";
import FinanceServiceJsonLd from "../_components/FinanceServiceJsonLd";

const PAGE_DESCRIPTION =
  "Property development and title-splitting loans from £50,000 to £250,000. Rates between 0.75% and 1.1% per month, terms of 4 to 12 months.";

export const metadata: Metadata = {
  title: "Property Development & Title-Split Loans",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/finance/title-split" },
};

const financeData = [
  {
    title: "Loan Range",
    content:
      "Our property development finance spans from £50,000 to £250,000, suitable for various development projects.",
  },
  {
    title: "Terms",
    content: "Available with terms ranging from 4 to 12 months.",
  },
  {
    title: "Interest Rate",
    content: "Competitive rates between 0.75% and 1.1% per month.",
  },
  {
    title: "Financing Options",
    content:
      "Up to 85% LTV (Loan to Value) of the purchase price and renovations, or up to 80% of the market value or GDV (Gross Development Value).",
  },
  {
    title: "Loan Fees",
    content: "A fee of 2% to 2.5% of the loan amount. No Other Hidden Fees.",
  },
  {
    title: "Additional Costs",
    content: "Legal and inspection fees are charged at cost.",
  },
  {
    title: "Security",
    content: "First charge on the property and a personal guarantee.",
  },
  {
    title: "We welcome both experienced and non-experienced borrowers",
    content: (
      <>
        Contact us{" "}
        <Link href="/contact" className="text-primary underline">
          here
        </Link>
        .
      </>
    ),
  },
];

const bridgingData = [
  {
    icon: Construction,
    title: "Construction Conversion Loans",
    desc: "Designed for significant renovation projects, our construction conversion loans provide the capital necessary to add rooms, restructure properties, and make substantial alterations. These loans are ideal for developers looking to transform properties into high-yielding investments.",
  },
  {
    icon: BrickWall,
    title: "New Development Loans",
    desc: "Our new development loans offer the financial backing needed for ground-up construction projects. Whether you’re building residential units, commercial spaces, or mixed-use developments, we provide the flexible funding options necessary to turn your blueprints into reality.",
  },
];

const Page = () => {
  return (
    <>
      <FinanceServiceJsonLd
        name="Property Development Loans"
        description={PAGE_DESCRIPTION}
        path="/finance/title-split"
      />

      <FinanceHero
        title="Property Development Loans"
        description="Targeted at real estate investors, our property development loans offer the financial backing needed to undertake new developments or refurbish existing properties. We provide flexible funding options to help you bring your property visions to life."
      />

      <SectionWrapper className="pt-0">
        <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Image
              src="/images/title-split/overview.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-xl border border-border"
              alt="Property development site plan"
            />
          </div>

          <div className="md:col-span-7">
            <Accordion type="single" collapsible>
              {financeData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-heading text-lg font-semibold text-brand-900 hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      <FinanceSolutionsGrid
        heading="Comprehensive Development Finance Solutions"
        items={bridgingData}
        columns={2}
      />

      <LendingForm />
    </>
  );
};

export default Page;
