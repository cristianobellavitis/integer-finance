import "@/styles/clerk.css";
import { SignUp } from "@clerk/nextjs";

// https://clerk.com/docs/components/customization/variables
export default function Page() {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/brokers/futures.png)" }}
    >
      <SignUp
        appearance={{
          layout: {
            logoImageUrl: "/logo.png",
          },
          variables: {
            // References the same CSS custom properties as the rest of the
            // design system (see globals.css) rather than duplicating hex
            // values here.
            colorPrimary: "hsl(var(--primary))",
            colorText: "hsl(var(--primary))",
            colorTextSecondary: "hsl(var(--muted-foreground))",
            fontSize: "0.9rem",
            fontWeight: { normal: 600, medium: 700, bold: 800 },
          },
        }}
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
}
