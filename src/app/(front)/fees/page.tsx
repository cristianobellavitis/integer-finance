import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/constants/site";

function Page() {
  return (
    <MaxWidthWrapper>
      <div className="my-4 text-center">
        <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
          Our Fees
        </h3>
        <div className="mt-4 space-y-2 px-0 text-justify text-lg font-semibold tracking-tight text-gray-400 xl:px-36">
          <div>Dear Customer,</div>
          <div>
            Thank you again for working with us. This document sets out the fees
            that you may have to pay during the term of your mortgage. These
            fees may change in the future in line with your mortgage terms and
            conditions.
          </div>
          <div>
            We will let you know well in advance if we need to make changes to
            our fees. We strive to make our fees and charges easy for you to
            understand. Our fees fully reflects the initiative’s good practice
            principles.
          </div>
          <div>
            This same document is being used across the industry to help
            customers compare mortgages. Your main fees, for example your
            acceptance fee, are listed in your Pre-credit terms. The below fees
            are charged under extraordinary circumstances, such as when you miss
            your loan payments. If you have any questions, please do not
            hesitate to{" "}
            <Link
              href={`mailto:${SITE.contact.email}`}
              className="text-primary hover:underline"
            >
              contact us
            </Link>
            .
          </div>
          <div className="flex justify-center py-12">
            <Link
              href="/files/integer-fees.pdf"
              className={buttonVariants({
                size: "lg",
                className: "text-lg",
              })}
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Page;
