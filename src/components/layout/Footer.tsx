import Link from "next/link";

import Logo from "../common/Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { SITE } from "@/constants/site";

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-white">
      <MaxWidthWrapper className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo variant="inverted" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-400">
              Short-term development finance for regional property investors
              and construction companies.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-400">
              <li>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="hover:text-white"
                >
                  {SITE.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.contact.phone}`}
                  className="hover:text-white"
                >
                  {SITE.contact.phone}
                </a>
              </li>
              <li>WhatsApp: {SITE.contact.whatsapp}</li>
              <li>{SITE.locations}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-brand-700 pt-6">
          <p className="text-xs leading-relaxed text-brand-400">
            {SITE.name} provides unregulated lending to companies. Our
            products are not regulated by the Financial Conduct Authority and
            are not available to consumers.
          </p>
          <p className="text-xs text-brand-400">
            &copy; {new Date().getFullYear()} {SITE.name}. All Rights
            Reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
