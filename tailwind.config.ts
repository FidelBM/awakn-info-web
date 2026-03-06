import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        awakn: {
          red: "#D61F2C",
          pink: "#F0388E",
          blue: "#3F22EC",
          green: "#3BB54A",
          yellow: "#FFD230",
          black: "#060608",
          white: "#F5F7FF"
        }
      },
      boxShadow: {
        neon: "0 0 25px rgba(240,56,142,0.25)"
      },
      backgroundImage: {
        "awakn-grid":
          "linear-gradient(rgba(245,247,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
