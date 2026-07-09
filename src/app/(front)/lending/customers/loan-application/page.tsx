import React from "react";
import type { Metadata } from "next";
import CustomerForm from "@/components/common/CustomerForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Apply for a Loan",
  description:
    "Apply for property development finance from Integer Finance. Fill in the form to get started.",
  path: "/lending/customers/loan-application",
});

function page() {
  return (
    <CustomerForm
      title="Looking to finance your real estate development? Fill the form below."
      formUrl="https://dashboard.integerinvestments.com/external/loan-application"
    />
  );
}

export default page;
