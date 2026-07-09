import React from "react";
import type { Metadata } from "next";
import CustomerForm from "@/components/common/CustomerForm";
import { FORM_URLS } from "@/constants/form";

export const metadata: Metadata = {
  title: "Renovations Drawdown Request",
  description:
    "Existing Integer Finance borrowers: request a renovations drawdown on your loan.",
  alternates: { canonical: "/lending/customers/renovations-drawdown" },
};

function page() {
  return (
    <CustomerForm
      title="If you already have a loan and want to request a renovations' drawdown. Fill the form, below."
      formUrl={FORM_URLS.renovationsDrawdown}
    />
  );
}

export default page;
