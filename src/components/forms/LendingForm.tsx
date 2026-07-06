"use client";

import React from "react";
import { FORM_URLS } from "@/constants/form";

function LendingForm() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingBottom: "100.25%",
        overflow: "hidden",
      }}
    >
      <iframe
        src={FORM_URLS.loanApplication}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
          // boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)",
        }}
        allowFullScreen
      />
    </div>
  );
}

export default LendingForm;
