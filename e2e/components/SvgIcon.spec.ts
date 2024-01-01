import { test, expect } from '@playwright/test';

test.describe('SvgIcon component', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/projects');
  });

  test('should render the correct SVG icon', async({ page }) => {
    const svg = page.getByTestId('svg-icon-component');

    expect(svg).not.toBeNull();
  });
});
