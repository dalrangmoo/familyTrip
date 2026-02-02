/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#136dec",
        "background-light": "#f6f7f8",
        "background-dark": "#101822",
        "winter-blue": "#f0f7ff",
        "success": "#10b981",
        "warning": "#f59e0b"
      },
      fontFamily: {
        "display": ["Noto Sans KR", "Plus Jakarta Sans", "sans-serif"],
        "sans": ["Noto Sans KR", "Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
