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
          highlight: "#594a4e",
        },
        dark: {
          background: "#16161a",
          foreground: "#fffffe",
          main: "#fffffe",
          secondary: "#94a1b2",
          tertiary: "#2cb67d",
          highlight: "#8965F6",
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
    boxShadow: {
      DEFAULT: "13px 11px var(--color-ui-foreground)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
