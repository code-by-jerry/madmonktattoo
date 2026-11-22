import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0A0A0A",
          surface: "#121212",
          elevated: "#181818",
          card: "#151515",
          border: "#262626",
          muted: "#1F1F1F",
        },
        ink: {
          black: "#0A0A0A",
          paper: "#EDE8DF",
          muted: "#9E9A90",
          dim: "#6B6760",
          faint: "rgba(237, 232, 223, 0.08)",
        },
        blood: {
          DEFAULT: "#B3122D",
          hover: "#C91836",
          dark: "#7A0A1D",
          light: "#E22D4B",
          glow: "rgba(179, 18, 45, 0.35)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Cinzel", "serif"],
        sans: ["var(--font-body)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "noise": "radial-gradient(circle at 50% 50%, rgba(237, 232, 223, 0.02) 0%, transparent 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
