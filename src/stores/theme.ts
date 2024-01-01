import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Ref } from 'vue';

/* eslint-disable no-unused-vars */
export enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}
/* eslint-enable no-unused-vars */

export const useThemeStore = defineStore('theme', () => {
  const currentTheme: Ref<THEME> = ref<THEME>(THEME.LIGHT);

  /**
   * Updates the current theme.
   * @param newTheme - The new theme to set, must be of type `THEME`.
   */
  function updateTheme(newTheme: THEME): void {
    currentTheme.value = newTheme;
  }

  return {
    currentTheme,
    updateTheme
  };
});
