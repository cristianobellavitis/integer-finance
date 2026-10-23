import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hammer, Link as LinkIcon, Shovel } from "lucide-react";

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
  "Residential bridging finance from £50,000 to £350,000 across England and Wales. Rates from 0.89% per month, up to 80% LTV, terms up to 18 months.";

export const metadata: Metadata = buildMetadata({
  title: "Residential Bridging Finance",
  description: PAGE_DESCRIPTION,
  path: "/finance/residential-finance",
});

const financeData = [
  {
    title: "Loan Range",
    content:
      "Our residential bridging finance spans from £50,000 to £350,000, suitable for a wide range of investment properties.",
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
    icon: LinkIcon,
    title: "Standard Bridging",
    desc: "Whether you are an experienced investor or new to the market, we can tailor the perfect package for you. Ideal for projects where the repair and development budget is less than or equal to 10% of the market value.",
  },
  {
    icon: Hammer,
    title: "Light Refurbishment Bridging",
    desc: "Designed for property refurbishments involving minor improvements that do not require planning permission. Our light refurbishment bridging loans are suitable for a variety of residential property types.",
  },
  {
    icon: Shovel,
    title: "Heavy Refurbishment Bridging",
    desc: "Our heavy refurbishment bridging loans are geared towards significant renovation projects that include major structural work, such as converting commercial properties to residential use or projects requiring planning permission.",
  },
];

const Page = () => {
  return (
    <>
      <FinanceServiceJsonLd
        name="Residential Bridging Finance"
        description={PAGE_DESCRIPTION}
        path="/finance/residential-finance"
      />

      <FinanceHero
        title="Residential Bridging Finance"
        description="For real estate investors looking to bridge the gap for a new property or development, our residential bridging finance solutions offer the flexibility and support needed to purchase, refinance, improve properties, or make further investments."
      />

      <SectionWrapper className="pt-0">
        <RevealOnScroll>
          <SectionHeading title="The Right Solution for Short-Term Secured Finance" />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our residential bridging products cater to a range of investment
            properties, offering flexible funding solutions for various
            needs. Whether you require financing for a purchase,
            refinancing, property improvements, or unlocking working capital
            for further investments, we are here to help.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Image
              src="/images/residential-finance/overview.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-xl border border-border"
              alt="Residential property street in the UK"
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
        columns={3}
      />

      <LendingForm />
    </>
  );
};

export default Page;
