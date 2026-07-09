import React from "react";
import type { Metadata } from "next";

import BrokersCover from "./brokers-cover";
import BrokersPartnership from "./brokers-partnership";
import FinanceSolutions from "@/components/pages/finance-solutions";
import BrokersFinancing from "./brokers-financing";
import BetterFutures from "@/components/pages/better-futures";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "For Brokers",
  description:
    "Join our panel of brokers and third-party introducers. Local lending decisions, generous commissions, and dedicated support for every deal.",
  path: "/lending/brokers",
});

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
