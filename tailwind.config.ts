import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  daisyui: {
    themes: ["light", "dark", "dim", {
      mytheme: {
        "primary": "#0bc0a5",
        "secondary": "#03322d",
        "accent": "#50877f",
        "neutral": "#707070",
        "base-100": "#1a2d29",
        "base-200": "#1a2d29",
        "base-300": "#1a2d29",
        "base-content": "#cecfc9",
        "info": "#007cf2",
        "info-content": "#000514",
        "success": "#00ae7b",
        "success-content": "#000b05",
        "warning": "#ac5d00",
        "warning-content": "#f0ded1",
        "error": "#da0023",
        "error-content": "#ffd7d3",
      },
    }],
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
export default config;
