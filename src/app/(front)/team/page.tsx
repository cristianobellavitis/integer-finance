import React from "react";

import TeamCover from "./team-cover";
import TeamFuture from "./team-future";

import BetterFutures from "@/components/pages/better-futures";
import TeamCommunity from "./team-community";
import TeamFounder from "./team-founder";

function Page() {
  return (
    <>
      <TeamCover />

      <TeamFuture />

      <TeamFounder />

      <TeamCommunity />

      <BetterFutures />
    </>
  );
}

export default Page;
