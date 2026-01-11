import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Philippe Serhal/);
  });

  test("should have main navigation", async ({ page }) => {
    await page.goto("/");
    
    // Check for header navigation elements
    const header = page.locator("header");
    await expect(header).toBeVisible();
  });

  test("should have main sections", async ({ page }) => {
    await page.goto("/");
    
    // Check that main content is present
    const main = page.locator("main");
    await expect(main).toBeVisible();
  });
});
