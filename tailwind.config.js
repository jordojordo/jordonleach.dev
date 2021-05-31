module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#faeee7",
          foreground: "#33272a",
          main: "#fffffe",
          secondary: "#ffc6c7",
          tertiary: "#c3f0ca",
          highlight: "#ff8ba7"
        },
        dark: {
          background: "#16161a",
          foreground: "#fffffe",
          main: "#fffffe",
          secondary: "#94a1b2",
          tertiary: "#2cb67d",
          highlight: "#7f5af0"
        },
        ui: {
          background: "var(--color-ui-background)",
          foreground: "var(--color-ui-foreground)",
          typo: "var(--color-ui-typo)",
          link: "var(--color-ui-link)",
        },
      },
    },
    colors: {
      light: "#f1f2f0",
      lighter: "#f1f2f0",
      dark: "#35342f",
      blue: "#37bbe4",
    },
    container: {
      center: true,
      padding: "1rem",
    },
<<<<<<< HEAD
    boxShadow: {
      DEFAULT: "13px 11px var(--color-ui-foreground)",
    },
=======
>>>>>>> ca1f6fae5ace97f4c25778c9400bf8e3920822d5
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
