<template>
  <button
    @click.prevent="toggleTheme"
    aria-label="Toggle Theme"
    title="Toggle Theme"
    class="focus:outline-none outline-none text-ui-typo"
  >
    {{ theme === "dark" ? "dark" : "light" }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      theme: "",
    };
  },
  mounted() {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = prefersDark ? "dark" : "light";
    const theme = localStorage.theme || defaultTheme;
    this.setTheme(theme);
  },
  methods: {
    setTheme(t) {
      this.theme = t;
      if (this.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.theme = t;
    },
    toggleTheme() {
      const t = this.theme === "light" ? "dark" : "light";
      this.setTheme(t);
    },
  },
};
</script>
