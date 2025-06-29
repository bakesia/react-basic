import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [forms({ strategy: "class" })],
};
