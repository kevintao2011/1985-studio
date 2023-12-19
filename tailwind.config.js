/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "theme-gray":"#2b2b2b",
        "light-blue":"#f1f4f7",
        "apple-gray":"#f5f5f7",
        "light-orange":"#EEF8EC"
      }
    },
  },
  plugins: [],
}