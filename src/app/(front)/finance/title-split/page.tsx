import React from "react";
import Image from "next/image";
import Link from "next/link";

// import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import LendingForm from "@/components/forms/LendingForm";
import FinanceHero from "../_components/FinanceHero";
import FinanceSolutionsGrid from "../_components/FinanceSolutionsGrid";

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
        <Link href="/contact" className="text-blue-400 underline">
          here
        </Link>
        .
      </>
    ),
  },
];

import { Construction, BrickWall } from "lucide-react";

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
      {/* 1 start */}
      <FinanceHero
        coverImage="/images/title-split/cover.png"
        title="Property Development Loans"
        description="Targeted at real estate investors, our property development loans offer the financial backing needed to undertake new developments or refurbish existing properties. We provide flexible funding options to help you bring your property visions to life."
      />
      {/* 1 end */}

      {/* 2 start */}
      <MaxWidthWrapper className="mt-4">
        {/* <div className="text-center"> */}
        {/*   <h3 className="text-5xl font-semibold leading-normal text-primary"> */}
        {/*     ?? */}
        {/*   </h3> */}
        {/*   <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36"> */}
        {/*     ??? */}
        {/*   </p> */}
        {/* </div> */}

        <div className="mb-2 mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="relative col-span-6 flex flex-col gap-6">
            <div className="mx-auto w-full max-w-lg">
              <Image
                src="/images/title-split/overview.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg"
                alt=""
              />
            </div>
          </div>

          <div className="col-span-6 m-6">
            <Accordion type="single" collapsible>
              {financeData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-bold text-primary">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg font-semibold text-gray-500">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* 2 end */}

      {/* 3 start */}
      <FinanceSolutionsGrid
        heading="Comprehensive Development Finance Solutions"
        items={bridgingData}
        columns={2}
      />
      {/* 3 end */}

      <LendingForm />
    </>
  );
};

export default Page;
