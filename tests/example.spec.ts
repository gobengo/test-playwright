import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }, testOptions) => {
  await page.goto('/');
});

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    expect(page.locator('.foo')).toContain('bar');
  });
});
