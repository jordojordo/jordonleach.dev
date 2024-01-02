import { test, expect } from '@playwright/test';

test.describe('ErrorView component tests', () => {
  test('should display ErrorView for unknown routes', async({ page }) => {
    await page.goto('/some-unknown-route');

    await expect(page.getByTestId('error-heading')).toHaveText('Route "/some-unknown-route" not found.');
  });
});
