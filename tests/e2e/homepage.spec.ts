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
const nonEmptyAttributePattern = /.+/;

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

test("enhances the experience links", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: netlifyExperienceHeadingPattern }),
  ).toBeVisible();

  const goodEggsTab = page.getByRole("link", { name: goodEggsTabPattern });
  const goodEggsHeading = page.getByRole("heading", {
    name: goodEggsExperienceHeadingPattern,
  });

  await expect(goodEggsHeading).toBeHidden();

  await goodEggsTab.click();

  await expect(goodEggsHeading).toBeVisible();
});

test("enhances the contact form into a terminal flow", async ({ page }) => {
  await page.route("**/", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }

    await route.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<!doctype html><title>Captured</title><h1>Captured contact submission</h1>",
    });
  });

  await page.goto("/");

  await expect(page.locator("[data-contact-form]")).toHaveAttribute(
    "data-enhanced",
    "true",
  );

  const command = page.locator("[data-contact-command]");

  await expect(command).toHaveAccessibleName("Enter your name:");
  await command.fill("Test User");
  await command.press("Enter");

  await expect(command).toHaveAccessibleName("Enter your email (optional):");
  await command.fill("test@example.com");
  await command.press("Enter");

  await expect(command).toHaveAccessibleName("Enter your message:");
  await command.fill("Hello from Playwright.");

  const [submission] = await Promise.all([
    page.waitForRequest((request) => {
      const url = new URL(request.url());

      return request.method() === "POST" && url.pathname === "/";
    }),
    command.press("Enter"),
  ]);

  await expect(page.getByText("Mail delivered. Thank you.")).toBeVisible();
  expect(new URL(page.url()).pathname).toBe("/");

  const postData = submission.postData() ?? "";
  const params = new URLSearchParams(postData);

  expect(params.get("form-name")).toBe("contact");
  expect(params.get("bot-field")).toBe("");
  expect(params.get("name")).toBe("Test User");
  expect(params.get("email")).toBe("test@example.com");
  expect(params.get("message")).toBe("Hello from Playwright.");
});

test("lets the enhanced contact form retry after a failed submission", async ({
  page,
}) => {
  const submissions: string[] = [];

  await page.route("**/", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }

    submissions.push(route.request().postData() ?? "");
    await route.fulfill({
      status: submissions.length === 1 ? 500 : 200,
      contentType: "text/html",
      body: "<!doctype html><title>Captured</title><h1>Captured contact submission</h1>",
    });
  });

  await page.goto("/");

  const command = page.locator("[data-contact-command]");

  await command.fill("Test User");
  await command.press("Enter");
  await command.fill("test@example.com");
  await command.press("Enter");
  await command.fill("Hello from Playwright.");

  await Promise.all([
    page.waitForRequest((request) => {
      const url = new URL(request.url());

      return request.method() === "POST" && url.pathname === "/";
    }),
    command.press("Enter"),
  ]);

  await expect(
    page.getByText("Delivery failed. Please try again."),
  ).toBeVisible();
  await expect(command).toHaveAccessibleName("Press Enter to retry:");
  expect(new URL(page.url()).pathname).toBe("/");

  await Promise.all([
    page.waitForRequest((request) => {
      const url = new URL(request.url());

      return request.method() === "POST" && url.pathname === "/";
    }),
    command.press("Enter"),
  ]);

  await expect(page.getByText("Mail delivered. Thank you.")).toBeVisible();
  expect(submissions).toHaveLength(2);

  const params = new URLSearchParams(submissions[1]);

  expect(params.get("form-name")).toBe("contact");
  expect(params.get("name")).toBe("Test User");
  expect(params.get("email")).toBe("test@example.com");
  expect(params.get("message")).toBe("Hello from Playwright.");
});

test("keeps the contact form usable without JavaScript", async ({
  browser,
}) => {
  const page = await browser.newPage({ javaScriptEnabled: false });

  await page.goto("/");

  const form = page.locator('form[name="contact"]');

  await expect(form).toHaveAttribute("method", "POST");
  await expect(form).not.toHaveAttribute("action", nonEmptyAttributePattern);
  await expect(form).toHaveAttribute("data-netlify", "true");
  await expect(form.locator('input[name="form-name"]')).toHaveValue("contact");
  const fallbackFields = page.locator("[data-contact-fields]");

  await expect(fallbackFields).toBeVisible();
  await expect(page.locator("[data-contact-terminal]")).toBeHidden();
  await expect(fallbackFields.getByLabel("Enter your name:")).toBeVisible();
  await expect(
    fallbackFields.getByLabel("Enter your email (optional):"),
  ).toBeVisible();
  await expect(fallbackFields.getByLabel("Enter your message:")).toBeVisible();

  await page.close();
});
