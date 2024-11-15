import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "button-inner": "inset 0px 7.4px 18.5px rgba(255,255,255,0.11)",
      },
    },
  },
  plugins: [],
} satisfies Config;
