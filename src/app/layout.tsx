import "@/styles/globals.css";
import { Fragment } from "react";
import { Inter as FontSans, Archivo } from "next/font/google";

import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import TailwindIndicator from "@/components/TailwindIndicator";

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

export const metadata = {
  title: "Integer Finance",
  description: "Bridging finance",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
