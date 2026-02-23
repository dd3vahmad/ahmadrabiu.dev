import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeistMono", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
      rotate: {
        45: "45deg",
        135: "135deg",
        225: "225deg",
        315: "315deg",
      },
      colors: {
        // text: "#f4f4f4",a9b1d6
        text: "#a9b1d6",
        // background: "#1c1d26",
        background: "#0f1019",
        // tiny: "#ff1974",
        tiny: "#bb9af7",
        // big: "#6d7cff",
        big: "#7aa2f7",
        bluey: "#89deff",
        grey: "#565f89",
        greeny: "#9ece6a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
