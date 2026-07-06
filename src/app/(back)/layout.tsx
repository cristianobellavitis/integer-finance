import "@/styles/globals.css";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
    // className="flex-1 flex-grow"
    >
      <SignedIn>
        <UserButton />
      </SignedIn>
      {children}
    </div>
  );
}
