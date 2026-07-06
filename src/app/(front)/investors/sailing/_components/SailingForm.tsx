import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageOpacity from "@/components/common/ImageOpacity";
import React from "react";

const SailingForm = () => {
  return (
    <MaxWidthWrapper
      className="relative flex min-h-screen max-w-full flex-col overflow-hidden bg-cover bg-center py-8 md:py-12"
      style={{ backgroundImage: `url("/images/sailing/bottom.jpg")` }}
    >
      <ImageOpacity opacity={40} />
      <div className="container relative flex flex-1 flex-col text-center">
        {" "}
        <div>
          {" "}
          <h3 className="text-5xl font-semibold leading-normal text-white">
            How to Join
          </h3>
          <p className="mt-4 px-0 text-center text-lg font-semibold text-white xl:px-36">
            Spaces are limited, and invitations will be extended personally to
            our most trusted investors and clients. If you would like to express
            your interest, please fill in the form below directly.
          </p>
        </div>
        <iframe
          id="sailing-form"
          src="https://forms.monday.com/forms/embed/4a7ca67bfca965e9c951fb3d6e46599d?r=use1"
          className="mt-8 flex-1"
          style={{
            width: "100%",
            minHeight: "500px",
            border: 0,
          }}
          allowFullScreen
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default SailingForm;
