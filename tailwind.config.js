/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
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
        "dark-black": "#27292C",
        "light-primary": "var(--background-light-primary, #FFF);",
      },
      cursor: {
        'fancy': 'url(/assets/Icons/bi_hand-index.svg), pointer',
      },
      boxShadow: {
        '3xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      typography: () => ({
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
    plugin(function ({ addComponents }) {
      addComponents({
        ".form-card": {
          width: "420px",
          padding: "48px 20px 68px 20px",
          gap: "10px",
        },
      });
    }),
  ],
}
