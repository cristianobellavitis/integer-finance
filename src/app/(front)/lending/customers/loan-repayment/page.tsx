import React from "react";
import type { Metadata } from "next";
import CustomerForm from "@/components/common/CustomerForm";
import { FORM_URLS } from "@/constants/form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Loan Repayment",
  description:
    "Existing Integer Finance borrowers: fill in this form to arrange repayment of your loan.",
  path: "/lending/customers/loan-repayment",
});

function page() {
  return (
    <CustomerForm
      title="If you already have a loan and want to repay it. Fill the form below."
      formUrl={FORM_URLS.loanRepayment}
    />
  );
}

export default page;
