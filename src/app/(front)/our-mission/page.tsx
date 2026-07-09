import React from "react";
import type { Metadata } from "next";

import MissionCover from "./mission-cover";
import MissionCarousel from "./mission-carousel";
import MissionCommitment from "./mission-commitment";
import MissionGoal from "./mission-goal";
import MissionPromise from "./mission-promise";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Mission",
  description:
    "Integer Finance is dedicated to creating better futures for communities across the UK, supporting real estate developers with the power to dream.",
  path: "/our-mission",
});

const Page = () => {
  return (
    <>
      <MissionCover />

      <MissionCarousel />

      <MissionCommitment />

      <MissionGoal />

      <MissionPromise />
    </>
  );
};

export default Page;
