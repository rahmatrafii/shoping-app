/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        loading: "loading 1s linear infinite",
      },
      keyframes: {
        loading: {
          "0%,100%": " opacity: 1;",
          "50%": " opacity: 0.5;",
        },
      },
    },
  },
  plugins: [],
};
