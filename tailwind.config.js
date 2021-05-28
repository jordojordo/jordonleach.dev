module.exports = {
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
