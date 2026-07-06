import Link from "next/link";
import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageOpacity from "@/components/common/ImageOpacity";
import ContactForm from "./_component/ContactFormLoader";

export default function Page() {
  return (
    <MaxWidthWrapper
      className="relative max-w-full overflow-hidden bg-cover bg-center md:py-12"
      style={{ backgroundImage: `url("/images/contact/bg.png")` }}
    >
      <ImageOpacity opacity={55} />

      <div className="relative flex h-full flex-col items-center justify-center px-4 py-8 md:py-20">
        <h1 className="mb-8 text-3xl font-semibold text-white md:text-6xl">
          Contact us
        </h1>

        <div className="mb-8 text-center text-white">
          <div className="mb-6">
            <p className="mb-2 text-base">
              Get in touch with Integer Investments for inquiries or support.
              Our team is here to assist you with all your financial needs. Fill
              out our contact form or call us directly for immediate assistance.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Brokers</h2>
            <p className="mb-2 text-base">
              If you would like to join our panel or are looking to finance a
              development for your client, please use the contact form on our{" "}
              <Link href="/lending-brokers" className="text-blue-500 underline">
                Lending Brokers
              </Link>{" "}
              page.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Developers</h2>
            <div className="text-base">
              <p>
                If you are looking to finance your own development, please use
                the contact form on our {" "}
                <Link
                  href="/lending-customers"
                  className="text-blue-500 underline"
                >
                  Lending Customers
                </Link>{" "}
                page.
              </p>
              <p className="mt-1">
                If your query relates to anything else, please complete the form
                below.
              </p>
            </div>{" "}
          </div>
        </div>

        <ContactForm />
      </div>
    </MaxWidthWrapper>
  );
}
