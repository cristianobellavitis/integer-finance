export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-27'

// Hardcoded fallback defaults, not secrets: this is the same public Sanity
// project/dataset the existing site (ii-www.vercel.app/studio) uses -
// vhuwoh98 is visible in the Studio's public JS bundle and in every
// cdn.sanity.io image URL the site already serves, and the "production"
// dataset is public-read (no token needed - confirmed by querying it
// directly with no auth). Env vars still take precedence when present, so
// pointing at a different project/dataset later is just setting them - but
// News no longer silently breaks if Vercel's env vars don't reach a given
// build for whatever reason.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vhuwoh98'

export const isSanityConfigured = Boolean(projectId && dataset)

export const useCdn = false
