/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#6DCAE1",
        "secondary-color": "#72B948",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
