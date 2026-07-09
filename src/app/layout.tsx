import "@/styles/globals.css";
import { Fragment } from "react";
import type { Metadata } from "next";
import { Inter as FontSans, Archivo } from "next/font/google";

import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import TailwindIndicator from "@/components/TailwindIndicator";
import { SITE } from "@/constants/site";

// TEMP: local preview without real Clerk keys — skips ClerkProvider (and thus
// ClerkJS loading in the browser) when only the placeholder key from
// .env.local is present. Revert by removing this block and always using
// ClerkProvider below.
const isPlaceholderClerkKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ===
  "pk_test_ZXhhbXBsZS5jbGVyay5hY2NvdW50cy5kZXYk";
const AuthProvider = isPlaceholderClerkKey ? Fragment : ClerkProvider;

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontArchivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Bridging Finance for Property Developers`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | Bridging Finance for Property Developers`,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Bridging Finance for Property Developers`,
    description: SITE.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  description: SITE.description,
  email: SITE.contact.email,
  telephone: SITE.contact.phone,
  areaServed: "GB",
  address: [
    { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    { "@type": "PostalAddress", addressLocality: "New York", addressCountry: "US" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TRPCReactProvider>
        <AuthProvider>
          <body
            className={cn(
              "font-sans relative h-full antialiased",
              fontSans.variable,
              fontArchivo.variable,
            )}
          >
            <main>{children}</main>
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-N14E35Y12M"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N14E35Y12M');
          `}
            </Script>
            <TailwindIndicator />
          </body>
        </AuthProvider>
      </TRPCReactProvider>
    </html>
  );
}
