import React from "react";
import type { Metadata } from "next";

import BetterFutures from "@/components/pages/better-futures";
import InvestorsCommitment from "./_components/investors-commitment";
import InvestorsCover from "./_components/investors-cover";
import InvestorsExecellence from "./_components/investors-excellence";
import InvestorsGovernance from "./_components/investors-governance";
import InvestorsSailing from "./_components/investors-sailing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Investor Relations",
  description:
    "Information for Integer Finance's capital partners and investors, including our governance, regional strategy, and how we're funded.",
  path: "/investors",
});

const Page = () => {
  return (
    <>
      <InvestorsCover />

      <InvestorsCommitment />

      <InvestorsGovernance />

      <InvestorsExecellence />

      <InvestorsSailing />

      <BetterFutures />
    </>
  );
};

export default Page;
