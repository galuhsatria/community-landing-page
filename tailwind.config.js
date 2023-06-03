/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42E26F",
        secondary: "#B9ABF8",
        dark: "#001419",
        darkLight:"#011e25"
      },
    },
  },
  plugins: [],
};
