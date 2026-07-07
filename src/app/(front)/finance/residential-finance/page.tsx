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
      "Our residential bridging finance spans from £50,000 to £250,000, suitable for diverse development projects.",
  },
  {
    title: "Terms",
    content: "Available with terms ranging from 4 to 18 months.",
  },
  {
    title: "Interest Rate",
    content: "Competitive rates starting at 0.75% per month.",
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
        <Link href="/contact" className="text-blue-400 underline">
          here
        </Link>
        .
      </>
    ),
  },
];

import { Hammer, Link as LinkIcon, Shovel } from "lucide-react";

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
      {/* 1 start */}
      <FinanceHero
        coverImage="/images/residential-finance/cover.png"
        title="Residential Bridging Finance"
        description="For real estate investors looking to bridge the gap for a new property or development, our residential bridging finance solutions offer the flexibility and support needed to purchase, refinance, improve properties, or make further investments."
      />
      {/* 1 end */}

      {/* 2 start */}
      <MaxWidthWrapper className="mt-4">
        <div className="text-center">
          <h3 className="text-5xl font-semibold leading-normal text-primary">
            The Right Solution for Short-Term Secured Finance
          </h3>
          {/* <h3 className="mb-2 text-2xl font-semibold leading-normal text-gray-400">
        Building Better Futures
      </h3> */}
          <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
            Our residential bridging products cater to a range of investment
            properties, offering flexible funding solutions for various needs.
            Whether you require financing for a purchase, refinancing, property
            improvements, or unlocking working capital for further investments,
            we are here to help.
          </p>
        </div>

        <div className="mb-2 mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="relative col-span-6 flex flex-col gap-6">
            <div className="mx-auto w-full max-w-lg">
              <Image
                src="/images/residential-finance/overview.png"
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
        heading="FINANCE SOLUTIONS"
        items={bridgingData}
        columns={3}
      />
      {/* 3 end */}

      <LendingForm />
    </>
  );
};

export default Page;
