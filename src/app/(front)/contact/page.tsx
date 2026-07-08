import Link from "next/link";
import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { SITE } from "@/constants/site";
import ContactForm from "./_component/ContactFormLoader";

export default function Page() {
  return (
    <>
      <div className="bg-brand-900">
        <SectionWrapper>
          <RevealOnScroll>
            <SectionHeading
              as="h1"
              title="Contact us"
              className="text-white"
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-300">
              Get in touch with Integer Finance for inquiries or support. Our
              team is here to assist you with all your financial needs. Fill
              out our contact form or call us directly for immediate
              assistance.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-brand-300">
              <a
                href={`mailto:${SITE.contact.email}`}
                className="hover:text-white"
              >
                {SITE.contact.email}
              </a>
              <a
                href={`tel:${SITE.contact.phone}`}
                className="hover:text-white"
              >
                {SITE.contact.phone}
              </a>
              <span>WhatsApp: {SITE.contact.whatsapp}</span>
            </div>
          </RevealOnScroll>
        </SectionWrapper>
      </div>

      <SectionWrapper className="py-10 md:py-14">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <div className="mb-6">
            <h2 className="font-heading text-xl font-semibold text-brand-900">
              Brokers
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              If you would like to join our panel or are looking to finance a
              development for your client, please use the contact form on our{" "}
              <Link
                href="/lending/brokers"
                className="text-primary underline"
              >
                Lending Brokers
              </Link>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-900">
              Developers
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              If you are looking to finance your own development, please use
              the contact form on our{" "}
              <Link
                href="/lending/customers"
                className="text-primary underline"
              >
                Lending Customers
              </Link>{" "}
              page.
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              If your query relates to anything else, please complete the
              form below.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={150} className="mt-10 flex justify-center">
          <ContactForm />
        </RevealOnScroll>
      </SectionWrapper>
    </>
  );
}
