import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function BrokersPartnership() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/brokers/simplify.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Property development site"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading title="Simplifying Property Lending" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We believe in the power of collaboration. Our local experts work
            seamlessly with professional advisers to form dedicated deal
            teams. By partnering with you and your client, our Relationship
            Managers and Credit Partners personally visit development sites,
            ensuring we fulfil our commitments and create a smooth and
            efficient lending experience.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:order-1 md:col-span-7">
          <SectionHeading title="Regional Expertise and Commitment" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Our passion for the regions we serve is evident in our team. Our
            Credit team, actively involved in local communities, visits
            customers and their development sites alongside our Relationship
            Managers. This local decision-making process ensures quick
            turnaround times and reliable delivery on our promises.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We customize finance solutions to meet your clients&apos;
            specific needs. With a team of RICS-qualified experts, we have
            the knowledge and experience to make accessing the right finance
            straightforward and beneficial.
          </p>
        </div>
        <div className="md:order-2 md:col-span-5">
          <Image
            src="/images/brokers/expertise.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Street signage in a regional UK town"
          />
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/brokers/rewarding.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Team collaborating around a table"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading title="Rewarding Collaboration" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            At Integer Finance, we value our partnerships with brokers and
            third-party introducers. We offer generous commissions to reward
            your efforts and commitment. By working closely together, we
            ensure the best lending solutions for clients and build strong,
            lasting relationships. Our dedicated team supports you every
            step of the way, fostering success for all involved.
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
