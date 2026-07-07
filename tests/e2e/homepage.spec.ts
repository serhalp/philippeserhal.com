import { expect, test } from "@playwright/test";

const siteTitlePattern = /Philippe Serhal/;
const writingHeadingPattern = /Publications & Writing/;
const ossHeadingPattern = /OSS/;
const projectsHeadingPattern = /Projects/;
const contactHeadingPattern = /Get In Touch/;
const netlifyExperienceHeadingPattern = /Staff Software Engineer @ Netlify/;
const goodEggsTabPattern = /Good Eggs 2021/;
const goodEggsExperienceHeadingPattern =
  /Staff Software Engineer, Developer Experience @ Good Eggs/;

test("renders the homepage and primary navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(siteTitlePattern);
  await expect(
    page.getByRole("heading", { level: 1, name: "Philippe Serhal" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: writingHeadingPattern }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: ossHeadingPattern }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: projectsHeadingPattern }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: contactHeadingPattern }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "[1] ~/articles" }),
  ).toHaveAttribute("href", "/articles");
});

test("hydrates the experience tabs", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: netlifyExperienceHeadingPattern }),
  ).toBeVisible();

  await page.getByRole("button", { name: goodEggsTabPattern }).click();

  await expect(
    page.getByRole("heading", {
      name: goodEggsExperienceHeadingPattern,
    }),
  ).toBeVisible();
});
