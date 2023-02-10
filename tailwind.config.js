/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "hsl(212, 45%, 89%);",
        "grayish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },
      boxShadow: {
        card: "hsla(220, 15%, 55%, 0.2)",
      },
      width: {
        "card-minmax": "min(100%, 320px);",
      },
    },
  },
  plugins: [],
};
