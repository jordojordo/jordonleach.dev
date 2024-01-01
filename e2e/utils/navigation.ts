import { expect, Page } from '@playwright/test';

/**
 * Navigates to a specific element on the page identified by a test ID and expects the URL to be a certain value.
 *
 * @param page The Playwright Page object representing the browser page.
 * @param id The test ID of the element to click for navigation.
 * @param expectedUrl The URL expected after navigation.
 * @returns A promise that resolves when the navigation and URL check are complete.
 */
export async function navigateAndExpect(page: Page, id: string, expectedUrl: string): Promise<void> {
  await page.getByTestId(id).click();
  await expect(page).toHaveURL(expectedUrl);
}
