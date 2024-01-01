import { test, expect } from '@playwright/test';

test.describe('ProjectsList component tests', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/projects');
  });

  test('should render the projects list', async({ page }) => {
    const projectsSection = page.getByTestId('projects-section');

    await expect(projectsSection).toBeVisible();
  });

  test('should display the correct heading', async({ page }) => {
    const heading = page.getByTestId('projects-heading');

    await expect(heading).toContainText('Projects');
  });

  test('should render all project items correctly', async({ page }) => {
    const projectItems = page.getByTestId('project-id');

    await expect(projectItems).toHaveCount(6);
  });

  test('should display correct project titles', async({ page }) => {
    const projectTitles = page.getByTestId('project-title');

    for (let i = 0; i < await projectTitles.count(); i++) {
      await expect(projectTitles.nth(i)).toHaveText(/.+/);
    }
  });

  test('should have clickable project links', async({ page }) => {
    const projectLinks = page.getByTestId('project-link');

    for (let i = 0; i < await projectLinks.count(); i++) {
      await expect(projectLinks.nth(i)).toHaveAttribute('href', /https:\/\/.*/);
    }
  });

  test('should display dates in correct format', async({ page }) => {
    const projectDates = page.getByTestId('project-date');

    // Generate a regex pattern for "Month YYYY"
    const months = [...Array(12).keys()].map((i) => new Date(0, i).toLocaleString('en', { month: 'long' }));
    const monthYearRegex = new RegExp(`^(${ months.join('|') })\\s\\d{4}$`);

    for (let i = 0; i < await projectDates.count(); i++) {
      await expect(projectDates.nth(i)).toHaveText(monthYearRegex); // Checks for date format "Month YYYY"
    }
  });
});
