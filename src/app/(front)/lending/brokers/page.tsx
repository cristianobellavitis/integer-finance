import React from "react";

import BrokersCover from "./brokers-cover";
import BrokersPartnership from "./brokers-partnership";
import FinanceSolutions from "@/components/pages/finance-solutions";
import BrokersFinancing from "./brokers-financing";
import BetterFutures from "@/components/pages/better-futures";

const page = () => {
  return (
    <>
      <BrokersCover />

      <BrokersPartnership />

      <FinanceSolutions />

      <BrokersFinancing />

      <BetterFutures />
    </>
  );
};

export default page;
