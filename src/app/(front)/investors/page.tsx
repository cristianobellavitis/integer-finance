import React from "react";

import BetterFutures from "@/components/pages/better-futures";
import InvestorsCommitment from "./_components/investors-commitment";
import InvestorsCover from "./_components/investors-cover";
import InvestorsExecellence from "./_components/investors-excellence";
import InvestorsGovernance from "./_components/investors-governance";
import InvestorsSailing from "./_components/investors-sailing";

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
