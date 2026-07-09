import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Fees",
  description:
    "A summary of the fees that may apply during the term of an Integer Finance loan.",
  path: "/fees",
});

function Page() {
  return (
    <SectionWrapper>
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <SectionHeading align="center" as="h1" title="Our Fees" />
        <div className="mt-6 space-y-4 text-left text-lg leading-relaxed text-muted-foreground">
          <p>Dear Customer,</p>
          <p>
            Thank you again for working with us. This document sets out the
            fees that you may have to pay during the term of your mortgage.
            These fees may change in the future in line with your mortgage
            terms and conditions.
          </p>
          <p>
            We will let you know well in advance if we need to make changes
            to our fees. We strive to make our fees and charges easy for you
            to understand. Our fees fully reflects the initiative&rsquo;s
            good practice principles.
          </p>
          <p>
            This same document is being used across the industry to help
            customers compare mortgages. Your main fees, for example your
            acceptance fee, are listed in your Pre-credit terms. The below
            fees are charged under extraordinary circumstances, such as when
            you miss your loan payments. If you have any questions, please
            do not hesitate to{" "}
            <Link
              href={`mailto:${SITE.contact.email}`}
              className="text-primary underline"
            >
              contact us
            </Link>
            .
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/files/integer-fees.pdf"
            className={buttonVariants({ size: "lg" })}
          >
            Download
          </Link>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

export default Page;
