/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      teal: "#00EAD3",
      "teal-600": "#0d9488",
      "teal-400": "#2dd4bf",
      blue: "#2E60AC",
      "blue-300": "rgb(147 197 253)",
      "blue-500": "rgb(59 130 246);",
      "blue-deep": "rgb(30 58 138)",
      "pine-green": "#00695E",
      "regal-blue": "#004069",
      "light-primary": "var(--background-light-primary, #FFF);",
    },
    fontFamily: {
      satoshi: ["Quicksand", "Pacifico"],
      pacifico: ["Pacifico", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },},
  },
  plugins: [],
}

