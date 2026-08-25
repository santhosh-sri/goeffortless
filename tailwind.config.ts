import type { Config } from "tailwindcss";

/**
 * Every colour, shadow and radius below resolves to a CSS custom property
 * declared in `src/styles/tokens.css`, so a single `data-theme` swap on <html>
 * re-themes the whole app. Do not add literal colour values to this file.
 *
 * Breakpoints are Tailwind's defaults and are deliberately unchanged — 890
 * existing `md:` utilities depend on md === 768px. New components should read:
 *   base  → mobile   (<768)
 *   md:   → tablet   (768–1023)
 *   lg:   → desktop  (>=1024)
 */
const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // `lib` renders markup too — cmsHtml.tsx maps CMS spans onto utilities.
    // Without this, a class used only there is never generated.
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: {
          DEFAULT: withOpacity("--color-bg"),
          subtle: withOpacity("--color-bg-subtle"),
          inset: withOpacity("--color-bg-inset"),
        },
        // Surfaces
        surface: {
          DEFAULT: withOpacity("--color-surface"),
          raised: withOpacity("--color-surface-raised"),
          hover: withOpacity("--color-surface-hover"),
          muted: withOpacity("--color-surface-muted"),
        },
        // Text — `content` so classes read `text-content`, `text-content-muted`
        content: {
          DEFAULT: withOpacity("--color-text"),
          muted: withOpacity("--color-text-muted"),
          subtle: withOpacity("--color-text-subtle"),
          "on-accent": withOpacity("--color-text-on-accent"),
        },
        // Borders
        line: {
          DEFAULT: withOpacity("--color-border"),
          subtle:
            "rgb(var(--color-border-subtle) / var(--color-border-subtle-alpha))",
          strong: withOpacity("--color-border-strong"),
        },
        // Brand
        accent: {
          DEFAULT: withOpacity("--color-accent"),
          hover: withOpacity("--color-accent-hover"),
          subtle: withOpacity("--color-accent-subtle"),
          surface: withOpacity("--color-accent-surface"),
        },
        // Square behind a card/feature icon — carries its own alpha because
        // the dark theme changes hue (orange@15% → white@10%), not just alpha.
        "icon-tile":
          "rgb(var(--color-icon-tile) / var(--color-icon-tile-alpha))",
        // Secondary button: `bg-btn-secondary`, `border-btn-secondary-line`,
        // `text-btn-secondary-ink`. Fill and stroke diverge per theme.
        "btn-secondary": {
          DEFAULT: withOpacity("--color-btn-secondary"),
          line: withOpacity("--color-btn-secondary-line"),
          ink: withOpacity("--color-btn-secondary-ink"),
        },
        // Status
        success: withOpacity("--color-success"),
        danger: withOpacity("--color-danger"),
        info: withOpacity("--color-info"),
        focus: withOpacity("--color-focus"),
        // Palette accents (Figma "White/Black Pallet" Blue / Purple). Namespaced
        // so they don't shadow Tailwind's own `blue-*` / `purple-*` scales.
        palette: {
          blue: withOpacity("--color-blue"),
          purple: withOpacity("--color-purple"),
          mint: withOpacity("--color-mint"),
        },

        // Legacy aliases — kept so the pre-redesign pages keep compiling.
        // Remove once every page has been migrated.
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        card: "var(--shadow-card)",
        "card-raised": "var(--shadow-card-raised)",
        raised: "var(--shadow-raised)",
        lift: "var(--shadow-lift)",
        overlay: "var(--shadow-overlay)",
        menu: "var(--shadow-menu)",
        media: "var(--shadow-media)",
      },

      // For transparent artwork, where a box-shadow would outline the element
      // box rather than the image itself.
      dropShadow: {
        media: "var(--drop-shadow-media)",
      },

      borderRadius: {
        // Figma: buttons 4, inputs 6, cards 18, pills 16/42
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        card: "18px",
        pill: "9999px",
      },

      fontFamily: {
        lexend: ["var(--font-lexend)", "system-ui", "sans-serif"],
        sans: ["var(--font-lexend)", "system-ui", "sans-serif"],
      },

      // Type scale lifted from the Figma home page. Line-height and tracking
      // travel with the size so components never restate them.
      fontSize: {
        caption: ["12px", { lineHeight: "16px" }],
        label: ["14px", { lineHeight: "16px" }],
        body: ["16px", { lineHeight: "20px" }],
        "body-lg": ["20px", { lineHeight: "28px" }],
        "heading-sm": ["24px", { lineHeight: "30px" }],
        "heading-md": ["32px", { lineHeight: "40px", letterSpacing: "-0.32px" }],
        "heading-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.8px" }],
        display: ["64px", { lineHeight: "72px", letterSpacing: "-1.28px" }],
      },

      maxWidth: {
        // Figma home frame is 1440 wide with 64px gutters.
        frame: "1440px", // outer wrapper, gutters included
        content: "1312px", // inner content width
      },

      spacing: {
        gutter: "64px",
        "section-y": "60px",
        "section-y-lg": "80px",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #F08B32 37.44%, #FFF 106.26%)",
      },

      letterSpacing: {
        negative: "-0.36px",
      },

      transitionDuration: {
        theme: "200ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
