/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006EFF"
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

