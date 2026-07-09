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
  "HMO conversion finance from £50,000 to £250,000. Rates between 0.75% and 1.1% per month, up to 85% LTV, terms of 4 to 12 months.";

export const metadata: Metadata = buildMetadata({
  title: "HMO Conversion Finance",
  description: PAGE_DESCRIPTION,
  path: "/finance/hmo-finance",
});

const financeData = [
  {
    title: "Loan Range",
    content:
      "Our HMO conversion finance spans from £50,000 to £250,000, suitable for various conversion projects.",
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
    content: "A fee of 2% to 2.5% of the loan amount. No other hidden fees.",
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
    desc: "Designed for significant renovation projects, our construction conversion loans provide the capital necessary to add rooms, restructure properties, and make substantial alterations. These loans are ideal for developers looking to transform properties into high-yielding HMOs.",
  },
  {
    icon: FileText,
    title: "Legal Conversion Loans",
    desc: "Our legal conversion loans offer funding to cover the costs associated with obtaining the necessary legal permits and approvals for your HMO projects. This includes planning permissions, regulatory compliance, and other legal requirements, ensuring your conversion project meets all necessary standards.",
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
          <SectionHeading
            align="center"
            title="The Right Solution for HMO Conversion Finance"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
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
