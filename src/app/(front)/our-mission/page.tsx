import React from "react";

import MissionCover from "./mission-cover";
import MissionCarousel from "./mission-carousel";
import MissionCommitment from "./mission-commitment";
import MissionGoal from "./mission-goal";
import MissionPromise from "./mission-promise";
// import MissionFutures from "./mission-futures";

const Page = () => {
  return (
    <>
      <MissionCover />

      <MissionCarousel />

      {/* <MissionFutures /> */}

      <MissionCommitment />

      <MissionGoal />

      <MissionPromise />
    </>
  );
};

export default Page;
