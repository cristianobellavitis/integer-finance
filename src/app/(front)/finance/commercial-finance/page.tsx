import React from "react";
import Image from "next/image";

// import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

import ImageOpacity from "@/components/common/ImageOpacity";
import LendingForm from "@/components/forms/LendingForm";

// const financeData = [
//   {
//     title: "Loan Range",
//     content:
//       "Our property development finance spans from £50,000 to £250,000, suitable for various development projects.",
//   },
//   {
//     title: "Terms",
//     content: "Available with terms ranging from 4 to 12 months.",
//   },
//   {
//     title: "Interest Rate",
//     content: "Competitive rates between 0.9% and 1.1% per month.",
//   },
//   {
//     title: "Financing Options",
//     content:
//       "Up to 90% LTV (Loan to Value) of the purchase price and renovations, or up to 80% of the market value or GDV (Gross Development Value).",
//   },
//   {
//     title: "Loan Fees",
//     content: "A fee of 2% to 2.5% of the loan amount. No Other Hidden Fees.",
//   },
//   {
//     title: "Additional Costs",
//     content: "Legal and inspection fees are charged at cost.",
//   },
//   {
//     title: "Security",
//     content: "First charge on the property and a personal guarantee.",
//   },
//   {
//     title: "We welcome both experienced and non-experienced borrowers",
//     content: (
//       <>
//         Contact us{" "}
//         <Link href="/contact" className="text-blue-400 underline">
//           here
//         </Link>
//         .
//       </>
//     ),
//   },
// ];

const bullets = [
  "Available for semi-commercial investment properties, our finance solutions cover a range of projects and developments",
  "With terms up to 24 months",
  "Rates from 11% above BoE base rate",
  "Both experienced and non-experienced borrowers welcome",
  "Ranging from £150,000 to £250,000, our commercial development solutions are available for a variety of properties",
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
      <MaxWidthWrapper
        className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
        style={{
          backgroundImage: `url("/images/commercial-finance/cover.png")`,
        }}
      >
        <ImageOpacity opacity={50} />
        <div className="container relative mt-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
                Commercial Development Finance
              </h1>
              <p className="max-w-xl text-lg font-medium tracking-tight text-white">
                Integer Investments offers short-term commercial development
                finance solutions tailored for real estate investors and
                developers. Our lending products support the redevelopment, or
                renovation of commercial properties, addressing the demand for
                high-quality commercial spaces in key communities.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* 1 end */}

      {/* 2 start */}
      {/* <MaxWidthWrapper className="mt-4"> */}
      {/*   <div className="text-center"> */}
      {/*   <div className="mb-2 mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-12"> */}
      {/*     <div className="relative col-span-6 flex flex-col gap-6"> */}
      {/*       <div className="mx-auto w-full max-w-lg"> */}
      {/*         <Image */}
      {/*           src="/images/commercial-finance/overview.png" */}
      {/*           width={0} */}
      {/*           height={0} */}
      {/*           sizes="100vw" */}
      {/*           style={{ width: "100%", height: "auto" }} */}
      {/*           className="rounded-lg" */}
      {/*           alt="" */}
      {/*         /> */}
      {/*       </div> */}
      {/*     </div> */}
      {/**/}
      {/*     <div className="col-span-6 m-6"> */}
      {/*       <Accordion type="single" collapsible> */}
      {/*         {financeData.map((item, index) => ( */}
      {/*           <AccordionItem key={index} value={`item-${index}`}> */}
      {/*             <AccordionTrigger className="font-bold text-primary"> */}
      {/*               {item.title} */}
      {/*             </AccordionTrigger> */}
      {/*             <AccordionContent className="text-lg font-semibold text-gray-500"> */}
      {/*               {item.content} */}
      {/*             </AccordionContent> */}
      {/*           </AccordionItem> */}
      {/*         ))} */}
      {/*       </Accordion> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </MaxWidthWrapper> */}

      <MaxWidthWrapper>
        <div className="mb-2 mt-2 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="relative col-span-6 flex flex-col gap-6">
            <div className="mx-auto w-full max-w-lg">
              <Image
                src="/images/commercial-finance/overview.png"
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
            <h6 className="mb-8 text-3xl font-semibold uppercase tracking-tight text-primary">
              Find the right funding for your commercial project
            </h6>

            {bullets.map((bullet, index) => (
              <div key={index} className="mb-6">
                <div className="mb-3 flex items-start">
                  <div className="me-3 mt-1.5 flex-shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                  </div>
                  <div className="max-w-xl text-gray-400">
                    <p className="block text-lg font-semibold tracking-tight">
                      {bullet}
                    </p>
                  </div>
                </div>
                {index < bullets.length - 1 && <hr className="my-6" />}
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      {/* 2 end */}

      {/* 3 start */}
      <MaxWidthWrapper className="my-12">
        <div className="grid grid-cols-1 pb-6 text-center">
          <div className="text-center">
            <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
              Comprehensive Development Finance Solutions
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
