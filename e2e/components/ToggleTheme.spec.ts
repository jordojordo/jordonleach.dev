import { test, expect } from '@playwright/test';

test.describe('ToggleTheme component', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/');
  });

  test('should toggle theme on button click', async({ page }) => {
    const initialTheme = await page.evaluate(() => localStorage.getItem('theme'));

    const button = page.getByTestId('toggle-theme-button');

    await button.click();

    await page.waitForTimeout(500);

    // Check if the theme has been toggled
    const newTheme = await page.evaluate(() => localStorage.getItem('theme'));

    expect(newTheme).not.toBe(initialTheme);

    const hasDarkClass = await page.evaluate(() => document.documentElement.classList.contains('dark'));

    if ( initialTheme === 'light' ) {
      expect(hasDarkClass).toBe(true);
    } else {
      expect(hasDarkClass).toBe(false);
    }
  });
});
