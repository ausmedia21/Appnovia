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
        primary: "#4caf4f",
        secondary: "#263238",
        accent: "#4d4d4d",
        neutral2: "#18191f",
        neutral3: "#717171",
        neutral4: "#F5F7Fa",
        neutral5: "#89939E",
        neutral6: "#D9DBE1",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
