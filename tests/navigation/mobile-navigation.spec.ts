import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.use({
  viewport: { width: 375, height: 667 },
});

test.describe("mobile navigation", () => {
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

  // Home page navigation
  test("should navigate to home page", async ({ page }) => {
    await page.goto("/mission");

    // Click the nav button to open mobile menu
    await page.getByTestId("nav-button").click();

    // Click the Home link in the mobile menu
    await page.locator('a:visible:text("Home")').click();

    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test("should navigate to mission page", async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("nav-button").click();
    await page.locator('a:visible:text("Mission")').click();

    await expect(page).toHaveURL("http://localhost:3000/mission");
  });

  test("should navigate to election brief page", async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("nav-button").click();
    await page.locator('a:visible:text("Election Brief")').click();

    await expect(page).toHaveURL("http://localhost:3000/electionbrief");
  });

  test("should navigate to contact page", async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("nav-button").click();
    await page.locator('a:visible:text("Contact")').click();

    await expect(page).toHaveURL("http://localhost:3000/contact");
  });
});
