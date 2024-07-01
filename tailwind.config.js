/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBlue:  "rgb(186 230 253)",
         deepBlue:  "#0c4a6e",
      }
    },
  },
  plugins: [],
}

