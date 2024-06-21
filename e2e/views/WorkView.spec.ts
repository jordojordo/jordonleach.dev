import { test, expect } from '@playwright/test';

test.describe('WorkView Component', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/work');
  });

  test('should display work experience list', async({ page }) => {
    await expect(page.getByTestId('work-section')).toBeVisible();

    const heading = page.getByTestId('work-heading');

    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Work Experience');
  });

  test('should allow PDF download', async({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.click('data-testid=work-pdf-link')
    ]);

    // Check if the download has started and the filename is correct
    expect(download.suggestedFilename()).toBe('Jordon_Leach_Senior_Frontend_Engineer.pdf');

    const path = await download.path();

    expect(path).not.toBe(null);
  });
});