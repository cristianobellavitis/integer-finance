"use client";

import Link from "next/link";
import Logo from "../common/Logo";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { SITE } from "@/constants/site";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 bg-opacity-90 bg-gradient-to-br text-primary">
      <MaxWidthWrapper>
        <div className="mb-4 grid grid-cols-1 gap-6 p-4 pt-4 md:grid-cols-2 md:gap-4">
          {/* Left section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">GET IN TOUCH:</h3>
            <ul className="text-md space-y-2">
              {/* <li>Integer Inv US LLC (US)</li> */}
              {/* <li>Integer Investments Europe LTD (UK)</li> */}
              <li>Email: {SITE.contact.email}</li>
              <li>Phone: {SITE.contact.phone}</li>
              <li>Whatsapp: {SITE.contact.whatsapp}</li>
              <li>{SITE.locations}</li>
            </ul>
          </div>

          {/* form start */}
          <div>
            <h3 className="text-lg font-semibold">CONTACT US:</h3>
            <form className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="col-span-1">
                  <label htmlFor="name" className="text-md mb-1 block">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="email" className="text-md mb-1 block">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <div className="relative col-span-1">
                  <label htmlFor="phone" className="text-md mb-1 block">
                    Phone Number *
                  </label>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Include country code"
                    className="w-full rounded-md border border-gray-300 p-2"
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="message" className="text-md mb-1 block">
                    Message
                  </label>
                  <Input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="w-full rounded-md border border-gray-300 p-2"
                  />
                </div>

                <div className="col-span-1 flex items-end justify-end">
                  {/* <Link */}
                  {/*   href="/send-newsletter" */}
                  {/*   className={buttonVariants({ */}
                  {/*     className: "w-full md:w-3/4", */}
                  {/*   })} */}
                  {/* > */}
                  {/*   Send */}
                  {/* </Link> */}
                  <Button className="md:3/4 w-full" disabled>
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* form end */}
        </div>

        <div className="border-t border-gray-500 py-2 text-center md:flex md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div>
            <Logo />
          </div>

          <div className="mt-4 flex items-center justify-center space-x-8 md:mt-0">
            <Link href="#" className="text-sm hover:text-gray-400">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-gray-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
