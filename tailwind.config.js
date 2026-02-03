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
        "primary": "#bd0f3b",
        "background-light": "#f8f6f6",
        "background-dark": "#221015",
        "seicomart": "#FF8C00",
        "lawson": "#0066B3",
        "seveneleven": "#EE1C25",
        "familymart": "#00A94F",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Noto Sans KR", "sans-serif"],
        "logo": ["Gaegu", "cursive"],
        "soft": ["Gowun Dodum", "sans-serif"],
        "pretendard": ["Pretendard", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
