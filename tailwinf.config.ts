import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        surface: "#0F172A",
        muted: "#1E293B",
        primary: "#6366F1",
        primarySoft: "#4F46E5",
        borderSubtle: "#1F2937",
        textPrimary: "#F9FAFB",
        textSecondary: "#9CA3AF",
        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 45px rgba(15,23,42,0.65)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
