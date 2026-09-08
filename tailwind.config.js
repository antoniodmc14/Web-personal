/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./es/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        helvetica: [
          '"Helvetica Neue LT Pro"',
          "-apple-system",
          "BlinkMacSystemFont",
          "Arial",
          "sans-serif",
        ],
        "helvetica-md": [
          '"Helvetica Neue LT Pro"',
          "-apple-system",
          "BlinkMacSystemFont",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
