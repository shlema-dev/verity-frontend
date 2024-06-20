import test, { expect } from "@playwright/test";

test.describe("Sign in form fields required", () => {
  const testEmail = process.env.TEST_EMAIL as string;
  const testPassword = process.env.TEST_PASSWORD as string;

  test("Email required", async ({ page }) => {
    await page.goto("/signin");

    await page.getByLabel("Email Address").fill("");
    await page.getByLabel("Password").fill(testPassword);

    await page.getByTestId("submit").click();
    await expect(page.locator('text="* Email required"')).toBeVisible();
  });

  test("Password required", async ({ page }) => {
    await page.goto("/signin");

    await page.getByLabel("Email Address").fill(testEmail);

    await page.getByTestId("submit").click();
    await expect(page.locator('text="* Password required"')).toBeVisible();
  });
});

test.describe("Sign up form fields required", () => {
  const testEmail = process.env.TEST_EMAIL as string;
  const testPassword = process.env.TEST_PASSWORD as string;

  test("Email required", async ({ page }) => {
    await page.goto("/signup");

    await page.getByLabel("Email Address").fill("");
    await page.locator("[name='password']").fill(testPassword);
    await page.locator("[name='confirmPassword']").fill(testPassword);

    await page.getByTestId("submit").click();
    await expect(page.locator('text="* Email required"')).toBeVisible();
  });

  test("Password required", async ({ page }) => {
    await page.goto("/signup");

    await page.getByLabel("Email Address").fill(testEmail);

    await page.getByTestId("submit").click();
    await expect(
      page.locator(
        'text="* Password must be at least 8 characters with Upper/Lowercase, special, and number"'
      )
    ).toBeVisible();
  });

  test("Correct format password required", async ({ page }) => {
    await page.goto("/signup");

    await page.getByLabel("Email Address").fill(testEmail);
    await page.locator("[name='password']").fill("apassword");
    await page.locator("[name='confirmPassword']").fill("apassword");

    await page.getByTestId("submit").click();
    await expect(
      page.locator(
        'text="* Password must be at least 8 characters with Upper/Lowercase, special, and number"'
      )
    ).toBeVisible();
  });

  test("Passwords do not match", async ({ page }) => {
    await page.goto("/signup");

    await page.getByLabel("Email Address").fill(testEmail);
    await page.locator("[name='password']").fill(testPassword);
    await page.locator("[name='confirmPassword']").fill("1WrongPassword!");

    await page.getByTestId("submit").click();
    await expect(page.locator('text="Passwords must match"')).toBeVisible();
  });
});

test.describe("Forgot password form fields required", () => {
  test("Email required", async ({ page }) => {
    await page.goto("/forgotpassword");

    await page.getByLabel("Email Address").fill("");
    await page.getByTestId("submit").click();

    await expect(page.locator('text="* Email required"')).toBeVisible();
  });
});

test.describe("Middleware redirect with unauthenticated", () => {
  test("Nav to sign in when visiting election brief", async ({ page }) => {
    await page.goto("/electionbrief");
    await page.waitForURL(
      "http://localhost:3000/signin?message=Sign+In+or+Sign+Up+to+view+Electionbrief"
    );

    await expect(
      page.locator('text="Sign In or Sign Up to view Electionbrief"')
    ).toBeVisible();
  });
});
