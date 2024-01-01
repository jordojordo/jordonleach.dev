<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import { THEME, useThemeStore } from '@/stores/theme';

export default defineComponent({
  setup() {
    const themeStore = useThemeStore();

    const setTheme = (t: string) => {
      themeStore.updateTheme(t as THEME);

      if ( t === THEME.DARK ) {
        document.documentElement.classList.add(THEME.DARK);
      } else {
        document.documentElement.classList.remove(THEME.DARK);
      }

      localStorage.theme = t;
    };

    const toggleTheme = () => {
      const newTheme = themeStore.currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

      setTheme(newTheme);
    };

    onMounted(() => {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = prefersDark ? THEME.DARK : THEME.LIGHT;
      const theme = localStorage.getItem('theme') || defaultTheme;

      setTheme(theme);
    });

    return {
      THEME,
      themeStore,
      toggleTheme
    };
  }
});
</script>

<template>
  <button
    aria-label="Toggle Theme"
    title="Toggle Theme"
    class="toggle text-button text-bold text-large"
    data-testid="toggle-theme-button"
    @click.prevent="toggleTheme"
  >
    {{ themeStore.currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK }}
  </button>
</template>

<style>
.toggle, .toggle:focus {
  outline: none;
  border: none;
}

.toggle {
  background-color: var(--background-primary);
  padding: 0;
}

.toggle:hover {
  cursor: pointer;
}
</style>