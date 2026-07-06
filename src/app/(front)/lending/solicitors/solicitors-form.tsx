import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function SolicitorsForm() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <div className="text-center">
          <h3 className="mb-4 text-3xl font-semibold leading-normal text-primary">
            Integer Investments has a panel of solicitors who are approved to
            act in the provision of bridge lending. If you’re not already an
            active member of the panel and you are looking to apply, please fill
            in the application below.
          </h3>
          <p className="mt-4 px-0 text-center text-xl font-semibold text-gray-400 xl:px-36">
            Before applying, please take a look at the{" "}
            <Link
              href="/files/Integer Investments Terms and Conditions of Panel Appointment.pdf"
              className="text-blue-400 underline"
            >
              {" "}
              attached file
            </Link>{" "}
            as this represents the undertakings we require.
          </p>
        </div>
      </div>

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
          id="solicitors-form"
          src="https://dashboard.integerinvestments.com/external/solicitors-panel"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
        />
      </div>
    </MaxWidthWrapper>
  );
}
