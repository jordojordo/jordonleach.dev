import { test, expect } from '@playwright/test';

test.describe('ProjectsView Component', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/projects');
  });

  test('should display projects list', async({ page }) => {
    await expect(page.getByTestId('projects-section')).toBeVisible();

    const heading = page.getByTestId('projects-heading');

    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Projects');
  });
});