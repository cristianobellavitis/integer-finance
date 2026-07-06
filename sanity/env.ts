export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-27'

// PREVIEW-SAFE FALLBACK: when real Sanity credentials aren't configured
// (e.g. this preview deployment), fall back to harmless placeholder values
// instead of throwing at module-load time. Throwing here used to break
// static generation for every page whose bundle touches this module (News,
// News/[slug], and Contact via a shared webpack chunk) even on pages that
// don't render Sanity content. `isSanityConfigured` lets callers (see
// news-utils.tsx) skip the actual network fetch and return an empty/graceful
// result instead. Once real NEXT_PUBLIC_SANITY_PROJECT_ID/DATASET are set,
// this behaves exactly as before — safe to leave in place either way.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET,
)

export const useCdn = false
