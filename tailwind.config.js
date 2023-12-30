/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primario: "#7DA870",
      primario_transparet: "#90b687",
      secundario: "#E9A763",
      terciario: "#343A3F",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617"
      },
      whiteTransparent: "#d2ddc1",
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,

    },
    fontFamily: {
      Red_Hat: ["Red Hat Display"]
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}

