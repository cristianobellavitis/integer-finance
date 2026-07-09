import React from "react";
import type { Metadata } from "next";

import TeamCover from "./team-cover";
import TeamFuture from "./team-future";

import BetterFutures from "@/components/pages/better-futures";
import TeamCommunity from "./team-community";
import TeamFounder from "./team-founder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the team of dedicated professionals behind Integer Finance, bringing regional knowledge and property finance expertise to every deal.",
  path: "/team",
});

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
