import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Page = () => {
  return (
    <MaxWidthWrapper>
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
          // src="https://forms.monday.com/forms/embed/ba422567a66712c19ea0c411b25a865c?r=use1"
          src="https://forms.monday.com/forms/embed/ba422567a66712c19ea0c411b25a865c?r=use1"
          // width="650"
          // height="500"
          // style="border: 0; box-shadow: 5px 5px 56px 0px rgba(0,0,0,0.25);"
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
    </MaxWidthWrapper>
  );
};

export default Page;
