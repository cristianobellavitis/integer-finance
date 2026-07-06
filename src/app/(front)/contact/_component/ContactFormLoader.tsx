"use client";

import dynamic from "next/dynamic";

// ContactForm (react-hook-form + zodResolver, called without defaultValues)
// crashes during Next.js's server-side pre-render of "use client" components
// in production builds only — dev and the browser are unaffected, and
// bisection confirmed removing zodResolver alone fixes it, but the exact
// vendor-code line is obscured by minification. Loading it client-only
// (ssr: false) sidesteps the server pre-render entirely, which is the
// standard fix for this class of issue. `next/dynamic` with `ssr: false`
// isn't allowed directly inside a Server Component, hence this wrapper.
const ContactForm = dynamic(() => import("./contactForm"), { ssr: false });

export default ContactForm;
