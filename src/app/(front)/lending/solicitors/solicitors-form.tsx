import React from "react";
import Link from "next/link";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function SolicitorsForm() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          size="lg"
          title="Integer Finance has a panel of solicitors who are approved to act
          in the provision of bridge lending. If you're not already an active
          member of the panel and you are looking to apply, please fill in
          the application below."
        />
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Before applying, please take a look at the{" "}
          <Link
            href="/files/Integer Investments Terms and Conditions of Panel Appointment.pdf"
            className="text-primary underline"
          >
            attached file
          </Link>{" "}
          as this represents the undertakings we require.
        </p>
      </RevealOnScroll>

      <div
        className="mt-10"
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
    </SectionWrapper>
  );
}
