import React from "react";
import Image from "next/image";

import { founderData } from "./founder-data";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

function ProfileBullets({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="mb-6">
          <div className="mb-3 flex items-start">
            <div className="me-3 mt-1.5 flex-shrink-0">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>
            <p className="max-w-xl text-base text-muted-foreground">{item}</p>
          </div>
          {index < items.length - 1 && <hr className="my-6 border-border" />}
        </div>
      ))}
    </>
  );
}

export default function TeamFounder() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/team/founder.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Cristiano Bellavitis"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading title="Our Founder" size="lg" />
          <p className="mb-4 mt-2 text-xl font-semibold text-brand-900">
            Cristiano Bellavitis
          </p>
          <ProfileBullets items={founderData.cristiano} />
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:order-2 md:col-span-5">
          <Image
            src="/images/team/luke.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "60%", height: "auto" }}
            className="mx-auto rounded-xl border border-border"
            alt="Luke Higgins"
          />
        </div>

        <div className="md:order-1 md:col-span-7">
          <SectionHeading title="Head of Business Development" size="lg" />
          <p className="mb-4 mt-2 text-xl font-semibold text-brand-900">
            Luke Higgins
          </p>
          <ProfileBullets items={founderData.luke} />
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
