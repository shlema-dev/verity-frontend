import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.use({
  viewport: { width: 1280, height: 720 },
});

test.describe("Desktop contact form fields required", () => {
  test("First name required", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("Last Name").fill("Lastname");
    await page.getByLabel("Email Address").fill("test@gmail.com");
    await page.getByLabel("Message").fill("testing...");
    await page.getByTestId("submit").click();

    await expect(page.locator('text="* First name required"')).toBeVisible();
  });

  test("Last name required", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("First Name").fill("Firstname");
    await page.getByLabel("Email Address").fill("test@gmail.com");
    await page.getByLabel("Message").fill("testing...");
    await page.getByTestId("submit").click();

    await expect(page.locator('text="* Last name required"')).toBeVisible();
  });

  test("Email required", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("First Name").fill("Firstname");
    await page.getByLabel("Last Name").fill("Lastname");
    await page.getByLabel("Message").fill("testing...");
    await page.getByTestId("submit").click();

    await expect(page.locator('text="* Email required"')).toBeVisible();
  });

  test("Message required", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("First Name").fill("Firstname");
    await page.getByLabel("Last Name").fill("Lastname");
    await page.getByLabel("Email Address").fill("test@gmail.com");
    await page.getByTestId("submit").click();

    await expect(page.locator('text="* Message required"')).toBeVisible();
  });
});
