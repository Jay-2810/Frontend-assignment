import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pageBg: "#E9F7FF",
        frameBorder: "#4FAEFF",
        frameInner: "#F4FBFF",
        questionBg: "#DDF1FF",
        optionBg: "#F4FBFF",
        optionHover: "#E0F3FF",
        accent: "#155E75",
        accentSoft: "#5AB5FF",
        progressBar: "#111827",
        progressTrack: "#E5E7EB",
        buttonBg: "#E4F4FF",
        buttonHover: "#D4ECFF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      boxShadow: {
        frame: "0 24px 60px rgba(15, 23, 42, 0.18)",
        soft: "0 10px 25px rgba(15, 23, 42, 0.10)",
      },
      borderRadius: {
        frame: "40px",
        card: "18px",
      },
    },
  },
  plugins: [],
};

export default config;
