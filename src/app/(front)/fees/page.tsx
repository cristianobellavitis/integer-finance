import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { buildMetadata } from "@/lib/seo";
import { mainFees, otherFees } from "./fees-data";

export const metadata: Metadata = buildMetadata({
  title: "Our Fees",
  description:
    "The fees that may apply during the term of an Integer Lending bridging loan.",
  path: "/fees",
});

function Page() {
  return (
    <SectionWrapper>
      <RevealOnScroll className="mx-auto max-w-3xl">
        <SectionHeading align="center" as="h1" title="Our Fees" />
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            We keep our fees simple. Your main fees are set out in your loan
            terms before you commit. The other fees below only apply in
            particular circumstances, such as when you ask us to do extra work
            or a payment is missed. We will tell you in advance if any of them
            change. If you have any questions, please{" "}
            <Link
              href={`mailto:${SITE.contact.email}`}
              className="text-primary underline"
            >
              contact us
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-10 font-heading text-2xl font-semibold text-brand-900">
          Main fees
        </h2>
        <dl className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {mainFees.map((fee) => (
            <div
              key={fee.label}
              className="flex flex-col-reverse justify-end rounded-[10px] border border-border p-4"
            >
              <dt className="mt-1 text-sm text-muted-foreground">
                {fee.label}
              </dt>
              <dd className="font-heading text-xl font-semibold text-brand-900">
                {fee.value}
              </dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 font-heading text-2xl font-semibold text-brand-900">
          Other fees
        </h2>
        {otherFees.map((group) => (
          <div key={group.group} className="mt-6">
            <h3 className="border-b-2 border-brand-200 pb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              {group.group}
            </h3>
            <ul>
              {group.rows.map((row) => (
                <li
                  key={row.name}
                  className="flex flex-col gap-1 border-b border-border py-3 sm:flex-row sm:justify-between sm:gap-6"
                >
                  <div>
                    <p className="font-medium text-brand-900">{row.name}</p>
                    <p className="text-sm text-muted-foreground">{row.desc}</p>
                  </div>
                  <p className="flex-shrink-0 font-semibold text-brand-900 sm:text-right">
                    {row.cost}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-10 flex justify-center">
          <Link
            href="/files/integer-fees.pdf"
            className={buttonVariants({ size: "lg" })}
          >
            Download the fee tariff
          </Link>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

export default Page;
