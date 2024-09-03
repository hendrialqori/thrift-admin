/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006EFF",
        background: "#F4F4F4"
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: "false"
}

