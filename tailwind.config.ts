import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  daisyui: {
    themes: [
      "dark",
      "dim",
      {
        light: {
          primary: "#0bc0a5",
          secondary: "#03322d",
          accent: "#50877f",
          neutral: "#707070",
          "base-100": "#F6FDFC",
          "base-200": "#BFF2EA",
          "base-300": "#01725C",
          "base-content": "#a5bdea",
          info: "#36398c",
          "info-content": "#000514",
          success: "#00ae7b",
          "success-content": "#000b05",
          warning: "#ac5d00",
          "warning-content": "#f0ded1",
          error: "#da0023",
          "error-content": "#ffd7d3",
        },
      },
    ],
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
export default config;
