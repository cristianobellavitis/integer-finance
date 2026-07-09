import React from "react";
import Image from "next/image";
import { Construction, BrickWall } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import LendingForm from "@/components/forms/LendingForm";
import FinanceHero from "../_components/FinanceHero";
import FinanceSolutionsGrid from "../_components/FinanceSolutionsGrid";

const bullets = [
  "Available for semi-commercial investment properties, our finance solutions cover a range of projects and developments",
  "With terms up to 24 months",
  "Rates from 11% above BoE base rate",
  "Both experienced and non-experienced borrowers welcome",
  "Ranging from £150,000 to £250,000, our commercial development solutions are available for a variety of properties",
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
      <FinanceHero
        title="Commercial Development Finance"
        description="Integer Finance offers short-term commercial development finance solutions tailored for real estate investors and developers. Our lending products support the redevelopment, or renovation of commercial properties, addressing the demand for high-quality commercial spaces in key communities."
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
              alt=""
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
