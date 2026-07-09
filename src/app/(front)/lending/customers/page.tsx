import React from "react";

import CustomersCover from "./customers-cover";
import CustomersFoundations from "./customers-foundations";
import CustomersExpertise from "./customers-expertise";

import BetterFutures from "@/components/pages/better-futures";
import FinanceSolutions from "@/components/pages/finance-solutions";

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
