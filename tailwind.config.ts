import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Circular",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        bnb: {
          white: "#ffffff",
          ink: "#222222",
          muted: "#6a6a6a",
          surface: "#f2f2f2",
          border: "#c1c1c1",
          rausch: "#ff385c",
          rauschDeep: "#e00b41",
          error: "#c13515",
          legal: "#428bff",
        },
      },
      boxShadow: {
        "airbnb-card":
          "rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px",
        "airbnb-hover": "rgba(0,0,0,0.08) 0px 4px 12px",
      },
      borderRadius: {
        "bnb-btn": "8px",
        "bnb-badge": "14px",
        "bnb-card": "20px",
        "bnb-lg": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
