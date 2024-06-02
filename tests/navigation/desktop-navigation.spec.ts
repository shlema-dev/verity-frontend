import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.use({
  viewport: { width: 1280, height: 720 },
});

test.describe("desktop navigation", () => {
  // Light mode logo navigation test
  test("Logo should navigate to home page (light mode)", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/mission");

    await page.locator('img[alt="Verity logo"]:visible').click();

    await expect(page).toHaveURL("http://localhost:3000/");
  });

  // Dark mode logo navigation test
  test("Logo should navigate to home page (dark mode)", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/mission");

    await page.locator('img[alt="Verity logo"]:visible').click();

    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test("should navigate to home page", async ({ page }) => {
    await page.goto("/mission");

    await page.click("text=Home");

    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test("should navigate to mission page", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Mission");

    await expect(page).toHaveURL("http://localhost:3000/mission");
  });

  test("should navigate to election brief page", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Election Brief");

    await expect(page).toHaveURL("http://localhost:3000/electionbrief");
  });

  test("should navigate to contact page", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Contact");

    await expect(page).toHaveURL("http://localhost:3000/contact");
  });
});
