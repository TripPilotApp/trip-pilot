/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      teal: "#00EAD3",
      "teal-600": "#0d9488",
      "teal-400": "#2dd4bf",
      blue: "#2E60AC",
      "blue-300": "rgb(147 197 253)",
      "blue-500": "rgb(59 130 246)",
      "blue-deep": "rgb(30 58 138)",
      "pine-green": "#00695E",
      "regal-blue": "#004069",
      "light-primary": "var(--background-light-primary, #FFF);",
    },
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    typography: (theme) => ({
      default: {
        css: {
          fontFamily: {
            sora: "sora, sans-serif",
          },
          fontFeatureSettings: {
            sora: "'clig' off, 'liga' off",
          },
        },
      },
    }),
  },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({
        ".form-card": {
          width: "420px",
          padding: "48px 64px 68px 64px",
          gap: "10px",
        },
      });
    }),
  ],
}

