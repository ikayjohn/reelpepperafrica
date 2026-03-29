import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "var(--rp-cream)",
          dark: "var(--rp-cream-dark)"
        },
        green: {
          50: "var(--rp-green-50)",
          100: "var(--rp-green-100)",
          600: "var(--rp-green-600)",
          700: "var(--rp-green-700)",
          800: "var(--rp-green-800)",
          900: "var(--rp-green-900)"
        },
        gold: {
          100: "var(--rp-gold-100)",
          300: "var(--rp-gold-300)",
          400: "var(--rp-gold-400)",
          500: "var(--rp-gold-500)",
          900: "var(--rp-gold-900)"
        },
        red: {
          100: "var(--rp-red-100)",
          400: "var(--rp-red-400)",
          500: "var(--rp-red-500)",
          900: "var(--rp-red-900)"
        },
        warm: {
          100: "var(--rp-warm-gray-100)",
          300: "var(--rp-warm-gray-300)",
          600: "var(--rp-warm-gray-600)",
          900: "var(--rp-warm-gray-900)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "General Sans", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "General Sans", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"]
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", fontWeight: "600" }],
        "page-title": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", fontWeight: "600" }],
        "section-title": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", fontWeight: "500" }],
        "card-title": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.7", fontWeight: "400" }],
        "small": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "label": ["0.75rem", { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.08em" }]
      },
      borderRadius: {
        "card": "12px",
        "btn": "8px",
        "input": "8px"
      },
      maxWidth: {
        "container": "1280px"
      },
      spacing: {
        "section": "var(--section-py)"
      },
      boxShadow: {
        "card": "0 1px 3px rgba(26, 24, 22, 0.06), 0 4px 12px rgba(26, 24, 22, 0.04)",
        "card-hover": "0 4px 12px rgba(26, 24, 22, 0.08), 0 12px 32px rgba(26, 24, 22, 0.06)",
        "nav": "0 1px 3px rgba(26, 24, 22, 0.04), 0 4px 24px rgba(26, 24, 22, 0.06)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s var(--ease-out) forwards",
        "fade-in": "fade-in 0.3s var(--ease-out) forwards"
      }
    }
  },
  plugins: []
};

export default config;
