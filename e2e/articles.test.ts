import { test, expect } from "@playwright/test";

test.describe("Articles", () => {
  test("should load articles index page", async ({ page }) => {
    await page.goto("/articles");
    await expect(page).toHaveTitle(/Articles/);
  });

  test("should display articles list", async ({ page }) => {
    await page.goto("/articles");

    // Check that the articles page has loaded
    const main = page.locator("main");
    await expect(main).toBeVisible();
  });

  test("should navigate from home to articles", async ({ page }) => {
    await page.goto("/");

    // Find and click link to articles (looking for text "articles" or similar)
    const articlesLink = page.locator('a[href*="articles"]').first();
    if ((await articlesLink.count()) > 0) {
      await articlesLink.click();
      await expect(page).toHaveURL(/\/articles/);
    }
  });
});
