import { test } from '@playwright/test';
import { navigateAndExpect } from '@/utils/navigation';

test.describe('NavBar Component', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/');
  });

  test.describe('NavBar Component', () => {
    test('should navigate to home', async({ page }) => {
      await navigateAndExpect(page, 'nav-home', '/');
    });

    test('should navigate to work', async({ page }) => {
      await navigateAndExpect(page, 'nav-work', '/work');
    });

    test('should navigate to projects', async({ page }) => {
      await navigateAndExpect(page, 'nav-projects', '/projects');
    });
  });
});
