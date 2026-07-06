import React from "react";

import CustomersCover from "./customers-cover";
import CustomersFoundations from "./customers-foundations";
import CustomersExpertise from "./customers-expertise";
// import CustomersFinancing from "./customers-financing";

import BetterFutures from "@/components/pages/better-futures";
import FinanceSolutions from "@/components/pages/finance-solutions";

const Page = () => {
  return (
    <>
      <CustomersCover />

      <CustomersFoundations />

      <FinanceSolutions />

      <CustomersExpertise />

      {/* <CustomersFinancing /> */}

      <BetterFutures />
    </>
  );
};

export default Page;
