import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Construction, FileText } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import LendingForm from "@/components/forms/LendingForm";
import FinanceHero from "../_components/FinanceHero";
import FinanceSolutionsGrid from "../_components/FinanceSolutionsGrid";
import FinanceServiceJsonLd from "../_components/FinanceServiceJsonLd";
import { buildMetadata } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "HMO conversion finance from £50,000 to £350,000 across England and Wales. Rates from 0.89% per month, up to 80% LTV and 70% of GDV, terms up to 18 months.";

export const metadata: Metadata = buildMetadata({
  title: "HMO Conversion Finance",
  description: PAGE_DESCRIPTION,
  path: "/finance/hmo-finance",
});

const financeData = [
  {
    title: "Loan Range",
    content:
      "Our HMO conversion finance spans from £50,000 to £350,000, suitable for various conversion projects.",
  },
  {
    title: "Terms",
    content: "Available with terms of up to 18 months.",
  },
  {
    title: "Interest Rate",
    content: "Competitive rates starting at 0.89% per month. Interest can be retained or serviced.",
  },
  {
    title: "Financing Options",
    content:
      "Up to 80% LTV (Loan to Value), based on the lower of the purchase price and the valuation. On refurbishment projects, up to 70% of the GDV (Gross Development Value), with works funding released in stages.",
  },
  {
    title: "Loan Fees",
    content: "An arrangement fee of 2.25% to 2.35% of the loan, an exit fee of 0.95%, a loan management fee of £695 and a disbursement fee of £295.",
  },
  {
    title: "Additional Costs",
    content: "A legal fee of £500 with dual representation. Valuation and inspection fees are charged at cost.",
  },
  {
    title: "Security",
    content: "First legal charge on the property and a personal guarantee. Property must be in England or Wales.",
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
    desc: "Designed for significant renovation projects, our construction conversion loans provide the capital necessary to add rooms, restructure properties, and make substantial alterations. These loans are ideal for developers looking to transform properties into high-yielding HMOs.",
  },
  {
    icon: FileText,
    title: "Legal Conversion Loans",
    desc: "For HMO projects that need a change of use rather than major building work, our legal conversion loans fund the purchase while the conversion is completed. Planning permission or permitted development rights must be in place where required.",
  },
];

const Page = () => {
  return (
    <>
      <FinanceServiceJsonLd
        name="HMO Conversion Finance"
        description={PAGE_DESCRIPTION}
        path="/finance/hmo-finance"
      />

      <FinanceHero
        title="HMO Conversion Finance"
        description="Our HMO conversion loans are designed specifically for real estate investors looking to convert properties into Houses in Multiple Occupation. These tailored finance solutions provide the necessary funds to succeed."
      />

      <SectionWrapper className="pt-0">
        <RevealOnScroll>
          <SectionHeading title="The Right Solution for HMO Conversion Finance" />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our HMO conversion loans are designed specifically for real
            estate investors aiming to convert properties into Houses in
            Multiple Occupation. These tailored finance solutions provide
            the necessary funds to successfully complete your conversion
            projects and maximize rental yields.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Image
              src="/images/hmo-finance/conversion.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-xl border border-border"
              alt="HMO conversion property"
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
        heading="Finance Solutions"
        items={bridgingData}
        columns={2}
      />

      <LendingForm />
    </>
  );
};

export default Page;
