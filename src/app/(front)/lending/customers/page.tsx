import React from "react";
import type { Metadata } from "next";

import CustomersCover from "./customers-cover";
import CustomersFoundations from "./customers-foundations";
import CustomersExpertise from "./customers-expertise";

import BetterFutures from "@/components/pages/better-futures";
import FinanceSolutions from "@/components/pages/finance-solutions";

export const metadata: Metadata = {
  title: "For Developers",
  description:
    "Accessible, customized property finance solutions for real estate developers. Locally-made lending decisions from £50,000 to £250,000.",
  alternates: { canonical: "/lending/customers" },
};

const Page = () => {
  return (
    <>
      <CustomersCover />

      <CustomersFoundations />

      <FinanceSolutions />

      <CustomersExpertise />

      <BetterFutures />
    </>
  );
};

export default Page;
