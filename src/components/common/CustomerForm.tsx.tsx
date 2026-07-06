import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface Props {
  title: string;
  formUrl: string;
}

const CustomerForm = ({ title, formUrl }: Props) => {
  return (
    <MaxWidthWrapper className="my-8">
      <div className="text-center">
        <h3 className="text-3xl font-semibold leading-normal text-primary">
          {title}
        </h3>
        <div
          className="my-12"
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingBottom: "100.25%",
            overflow: "hidden",
          }}
        >
          <iframe
            src={formUrl}
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
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomerForm;
