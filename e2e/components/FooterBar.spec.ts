import { test, expect } from '@playwright/test';

test.describe('FooterBar component', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/');
  });

  test('should render ToggleTheme component', async({ page }) => {
    const toggleThemeButton = page.getByTestId('toggle-theme-button');

    expect(toggleThemeButton).not.toBeNull();
  });

  test('should navigate to GitHub on link click', async({ page }) => {
    // Listen for the new page to open
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'), // Wait for the new tab to open
      page.getByTestId('footer-github-link').click()
    ]);

    // Check if the URL of the new tab contains 'github.com'
    const url = newPage.url();

    expect(url).toContain('github.com');

    // Close the new page if not needed further
    await newPage.close();
  });
});
