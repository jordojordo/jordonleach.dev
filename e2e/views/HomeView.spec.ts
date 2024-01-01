import { test, expect } from '@playwright/test';

test.describe('HomeView Component', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/');
  });

  test('should display welcome message', async({ page }) => {
    await expect(page.getByTestId('home-h1')).toHaveText('Welcome to my world.');
  });
});