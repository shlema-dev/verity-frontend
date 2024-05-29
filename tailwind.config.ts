import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: getColorScale("violet"),
        gray: getColorScale("mauve"),
        success: getColorScale("grass"),
        warning: getColorScale("amber"),
        error: getColorScale("red"),
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

function getColorScale(name: string) {
  let scale: any = {};
  for (let i = 1; i <= 12; i++) {
    scale[i] = `var(--${name}-${i})`;
  }

  return scale;
}
