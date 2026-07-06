import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// TODO: auth roles
// https://clerk.com/docs/references/nextjs/clerk-middleware#protect-multiple-groups-of-routes

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

// redirect unauthed users to sign-in route
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  // TEMP: disabled for local preview without Clerk keys — restore the line below before committing/deploying.
  // matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  matcher: [],
};
