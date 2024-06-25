import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/"

test('should allow the user to sign in', async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Login" }).click();
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  // await page.getBy
  await page.locator("[name=email]").fill("1@1.com")
  await page.locator("[name=password]").fill("123456789")
  await page.getByRole("button", { name: "Logar" }).click()
  await expect(page.getByText("Login sucessfull!")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sair" })).toBeVisible();
});

test('should allow user to register', async ({ page }) => {

  await page.goto(UI_URL);
  const testEmail = `test_register_${Math.floor(Math.random() * 90000) + 10000}@test.com `
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("link", { name: " Create Account here" }).click();
  await expect(page.getByRole("heading", { name: "Create Account" })).toBeVisible();

  await page.locator("[name=firstName]").fill("test_firstName")
  await page.locator("[name=lastName]").fill("test_lastName")
  await page.locator("[name=email]").fill(testEmail)
  await page.locator("[name=password]").fill("password123")
  await page.locator("[name=confirmPassword]").fill("password123")

  await page.getByRole("button", { name: "Create Account" }).click();

  await expect(page.getByText("Registration was sucessfull!")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sair" })).toBeVisible();
});
