import React from "react";
import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ImageOpacity from "@/components/common/ImageOpacity";
import LendingForm from "@/components/forms/LendingForm";

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
        <Link href="/contact" className="text-blue-400 underline">
          here
        </Link>
        .
      </>
    ),
  },
];

import { Construction, FileText } from "lucide-react";

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
      {/* 1 start */}
      <MaxWidthWrapper
        className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
        style={{ backgroundImage: `url("/images/hmo-finance/cover.png")` }}
      >
        <ImageOpacity opacity={50} />
        <div className="container relative mt-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
                The Right Solution for HMO Conversion Finance
              </h1>
              <p className="max-w-xl text-lg font-medium tracking-tight text-white">
                Our HMO conversion loans are designed specifically for real
                estate investors looking to convert properties into Houses in
                Multiple Occupation. These tailored finance solutions provide
                the necessary
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* 1 end */}

      {/* 2 start */}
      <MaxWidthWrapper className="mt-4">
        <div className="text-center">
          <h3 className="text-5xl font-semibold leading-normal text-primary">
            The Right Solution for HMO Conversion Finance
          </h3>
          {/* <h3 className="mb-2 text-2xl font-semibold leading-normal text-gray-400">
        Building Better Futures
      </h3> */}
          <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
            Our HMO conversion loans are designed specifically for real estate
            investors aiming to convert properties into Houses in Multiple
            Occupation. These tailored finance solutions provide the necessary
            funds to successfully complete your conversion projects and maximize
            rental yields.
          </p>
        </div>

        <div className="mb-2 mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="relative col-span-6 flex flex-col gap-6">
            <div className="mx-auto w-full max-w-lg">
              <Image
                src="/images/hmo-finance/conversion.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "120%", height: "auto" }}
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
      <MaxWidthWrapper className="my-12">
        <div className="grid grid-cols-1 pb-6 text-center">
          <div className="text-center">
            <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
              FINANCE SOLUTIONS
            </h3>
          </div>
        </div>

        <div className="mx-2 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:mx-40">
          {bridgingData.map((item, index) => (
            <div
              key={index}
              className="relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-gray-900 dark:shadow-gray-700"
            >
              <item.icon className="mb-1 text-primary" />

              <div className="content z-1 relative mt-2 flex-grow">
                <h6 className="title text-2xl font-semibold text-primary">
                  {item.title}
                </h6>
                <p className="mt-3 text-lg font-semibold tracking-tight text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
      {/* 3 end */}

      <LendingForm />
    </>
  );
};

export default Page;
