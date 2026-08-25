import { test, expect } from "../src/fixtures/test";
import { users } from "../src/data/users";

test.describe("Sauce Demo login", () => {
  test("standard_user reaches the inventory list", async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(inventoryPage.inventoryContainer).toBeVisible();
    await expect(inventoryPage.inventoryList).toBeVisible();
  });

  test("locked_out_user sees the locked-out error", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await expect(loginPage.error).toBeVisible();
    await expect(loginPage.error).toContainText("locked out");
  });
});
