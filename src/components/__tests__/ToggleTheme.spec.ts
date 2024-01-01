import type { ComponentPublicInstance } from 'vue';
import {
  describe, it, expect, beforeEach, vi, afterEach
} from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import ToggleTheme from '@/components/ToggleTheme.vue';
import { THEME } from '@/stores/theme';


interface ThemeComponentInstance extends ComponentPublicInstance {
  themeStore: {
    currentTheme: string;
    updateTheme: (theme: string) => void; // eslint-disable-line no-unused-vars
  };
  toggleTheme: () => void;
}

describe('ToggleTheme Component', () => {
  let wrapper: VueWrapper<ThemeComponentInstance>;

  beforeEach(() => {
    wrapper = mount(ToggleTheme) as VueWrapper<ThemeComponentInstance>;
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toContain('Toggle Theme');
  });

  it('toggles theme on button click', async() => {
    const button = wrapper.find('button');

    await button.trigger('click');

    // Check if the updateTheme function was called with the correct argument
    expect(wrapper.vm.themeStore.updateTheme).toHaveBeenCalledWith(THEME.DARK);

    await button.trigger('click');
    expect(wrapper.vm.themeStore.updateTheme).toHaveBeenCalledWith(THEME.LIGHT);
  });

  it('sets the initial theme based on localStorage or user preference', () => {
    // Mock localStorage and user preference
    const localStorageMock = (function() {
      let store: { [key: string]: string } = {}; // Define the store as an indexable type

      return {
        getItem(key: string) {
          return store[key] || null;
        },
        setItem(key: string, value: string) {
          store[key] = value.toString();
        },
        clear() {
          store = {};
        }
      };
    })();

    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    // Mock and test user preference for dark theme
    window.matchMedia = vi.fn().mockImplementation((query) => {
      return {
        matches:        query === '(prefers-color-scheme: dark)',
        addListener:    vi.fn(),
        removeListener: vi.fn()
      } as unknown as MediaQueryList;
    });

    expect(wrapper.vm.themeStore.updateTheme).toHaveBeenCalledWith(THEME.DARK);
  });
});
