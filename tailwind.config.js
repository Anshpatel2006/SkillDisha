/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /(bg|text|border|shadow)-(emerald|blue|orange|purple|rose|cyan)-(50|100|200|300|600|700)/ },
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: "#2563eb",
          green: "#059669",
          dark: "#0f172a",
        },
      },
    },
  },
  plugins: [],
}
