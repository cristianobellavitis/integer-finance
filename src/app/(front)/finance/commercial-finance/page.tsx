import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Construction, BrickWall } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import LendingForm from "@/components/forms/LendingForm";
import FinanceHero from "../_components/FinanceHero";
import FinanceSolutionsGrid from "../_components/FinanceSolutionsGrid";
import FinanceServiceJsonLd from "../_components/FinanceServiceJsonLd";
import { buildMetadata } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Commercial and semi-commercial bridging finance from £50,000 to £350,000 across England and Wales. Up to 60% LTV on commercial and 65% on semi-commercial, terms up to 18 months.";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Bridging Finance",
  description: PAGE_DESCRIPTION,
  path: "/finance/commercial-finance",
});

const bullets = [
  "Loans from £50,000 to £350,000 on commercial and semi-commercial property in England and Wales",
  "Up to 65% LTV on semi-commercial (mixed-use) property and up to 60% on commercial property",
  "Commercial refurbishment up to 55% of the GDV, with works funding released in stages",
  "Terms of up to 18 months, with interest retained or serviced",
  "Priced on application. Both experienced and non-experienced borrowers welcome",
];

const bridgingData = [
  {
    icon: Construction,
    title: "Construction Conversion Loans",
    desc: "Designed for significant renovation projects, our construction conversion loans provide the capital necessary to add rooms, restructure properties, and make substantial alterations. These loans are ideal for developers looking to transform properties into high-yielding investments.",
  },
  {
    icon: BrickWall,
    title: "Ground-up Development",
    desc: "Ground-up and new-build schemes are considered on review, as is land with planning permission. Tell us about your project and we will let you know how we can help.",
  },
];

const Page = () => {
  return (
    <>
      <FinanceServiceJsonLd
        name="Commercial Bridging Finance"
        description={PAGE_DESCRIPTION}
        path="/finance/commercial-finance"
      />

      <FinanceHero
        title="Commercial Bridging Finance"
        description="Integer Lending offers short-term commercial and semi-commercial bridging finance tailored for real estate investors and developers. Our lending products support the purchase, refinance and renovation of commercial properties, addressing the demand for high-quality commercial spaces in key communities."
      />

      <SectionWrapper className="pt-0">
        <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Image
              src="/images/commercial-finance/overview.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-xl border border-border"
              alt="Commercial development property"
            />
          </div>

          <div className="md:col-span-7">
            <SectionHeading title="Find the Right Funding for Your Commercial Project" />
            <div className="mt-6 space-y-4">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex items-start">
                  <div className="me-3 mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
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
