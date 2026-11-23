/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c2430",
        paper: "#f4f1ea",
        navy: "#141a2a",
        coral: "#d7263d",
        magenta: "#ff2f8b",
        violet: "#6d4aff",
        sun: "#ffd23f",
        mint: "#14d6a0",
        sky: "#3ec4ff",
        grape: "#2a1458",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        sticker: "4px 4px 0 #24124d",
        "sticker-lg": "8px 8px 0 #24124d",
      },
    },
  },
  plugins: [],
};
