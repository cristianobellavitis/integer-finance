// Force dynamic rendering: ISR (revalidate = 30) was observed stuck on
// production - the live /news kept serving an empty x-vercel-cache: STALE
// snapshot with monotonically increasing age (never resolving to fresh),
// even on a deployment confirmed to include working Sanity config and a
// bumped unstable_cache key. Rendering per-request instead of freezing a
// static/ISR snapshot means a bad or stale build can never get permanently
// stuck - every request re-executes the page fresh (the unstable_cache
// calls in posts.tsx/[slug]/page.tsx still provide a light 30s data-layer
// cache on top of this, just without the fragile route-level ISR freeze).
export const dynamic = "force-dynamic";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
