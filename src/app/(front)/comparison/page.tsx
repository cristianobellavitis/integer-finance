import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import FinanceCalculator from "./_components/finance-calculator";

function page() {
  return (
    <MaxWidthWrapper>
      <FinanceCalculator />
      <div className="my-2 text-center">
        <h3 className="text-3xl font-semibold leading-normal text-primary">
          Looking to finance your real estate development? Click{" "}
          <Link
            href="/lending/customers/loan-application"
            className="underline"
          >
            here
          </Link>{" "}
          to apply for a bridge loan with Integer Investments.
        </h3>
      </div>
    </MaxWidthWrapper>
  );
}

export default page;
