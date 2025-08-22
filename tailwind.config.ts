import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
        ttHoves: ['"TT Hoves"'],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #F08B32 37.44%, #FFF 106.26%)",
      },
      letterSpacing: {
        negative: "-0.36px", // Custom letter-spacing value
      },
    },
  },
  plugins: [],
} satisfies Config;
