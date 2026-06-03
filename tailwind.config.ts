import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:     "#01994E",
          "green-dark": "#245A51",
          yellow:    "#FAC612",
          bg:        "#FBFBF7",
          text:      "#0E1F1A",
        },
        gray: {
          50:  "#F7F7F4",
          100: "#EDEDEA",
          200: "#D6D6D2",
          300: "#B5B5B0",
          400: "#8E8E88",
          500: "#6B6B65",
          600: "#4E4E49",
          700: "#3A3A36",
          800: "#27271F",
          900: "#0E1F1A",
        },
      },
      fontFamily: {
        display: ["var(--font-recoleta)", "Georgia", "serif"],
        body:    ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm:   "0.5rem",
        md:   "1rem",
        lg:   "1.5rem",
        xl:   "2rem",
        pill: "9999px",
      },
      maxWidth: {
        container: "80rem",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
