"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

function Page() {
  return (
    <MaxWidthWrapper>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          paddingBottom: "200.25%",
          overflow: "hidden",
          display: "block",
        }}
      >
        <iframe
          src="https://ii-dashboard-dev.up.railway.app/external/renovations-drawdown"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            bottom: 0,
            boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)",
          }}
          allowFullScreen={true}
        />
      </div>
    </MaxWidthWrapper>
  );
}

export default Page;
