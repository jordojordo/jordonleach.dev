import { vi } from 'vitest';

// Mock the entire theme store module
vi.mock('@/stores/theme', () => ({
  THEME:         {
    DARK:  'dark',
    LIGHT: 'light'
  },
  useThemeStore: () => ({
    currentTheme: 'light',
    updateTheme:  vi.fn()
  })
}));