import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import formsPlugin from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.stone,
      },
    },
  },
  plugins: [formsPlugin],
};
