import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-archivo)", ...defaultTheme.fontFamily.sans],
        quote: ["Playfair Display", "serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1rem" }], // 12px
        sm: ["14px", { lineHeight: "1.25rem" }], // 14px
        base: ["18px", { lineHeight: "1.5rem" }], // 18px
        lg: ["20px", { lineHeight: "1.5rem" }], // 20px
        xl: ["24px", { lineHeight: "1.5rem" }], // 24px
        "2xl": ["30px", { lineHeight: "2rem" }], // 30px
        "3xl": ["36px", { lineHeight: "2.25rem" }], // 36px
        "4xl": ["48px", { lineHeight: "2.5rem" }], // 48px
        "5xl": ["60px", { lineHeight: "1" }], // 60px
        "6xl": ["72px", { lineHeight: "1" }], // 72px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Steel-blue scale from the homepage hero mockup. `primary` already
        // matches the mockup's #4C77A8 accent, so this fills in the rest of
        // the scale (lightest to darkest) rather than duplicating it.
        brand: {
          50: "#D6E2F0",
          100: "#C4D3E6",
          200: "#B8CBE0",
          300: "#AFC4DE",
          350: "#A9BEDA",
          400: "#93AFD0",
          500: "#7B9CC6",
          600: "#6E93BD",
          700: "#567FAD",
          900: "#35506E",
        },
        // Pale neutral panel backgrounds used behind BlueprintGraphic and a
        // couple of section backgrounds — distinct from the brand-blue scale
        // above (too light/neutral to read as "brand"), but still shared
        // across multiple files, so centralized the same way.
        surface: {
          100: "#F5F7FA",
          200: "#EEF2F7",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bar-grow": {
          from: { transform: "skewX(-6deg) scaleY(0)" },
          to: { transform: "skewX(-6deg) scaleY(1)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bar-grow": "bar-grow 1s cubic-bezier(0.2,0.8,0.2,1) both",
        "fade-up": "fade-up 0.8s ease both",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
