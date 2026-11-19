import { test, expect } from "../src/fixtures/test";
import { users } from "../src/data/users";

// Starting point for the Playwright planner and generator agents: signed in, on the inventory page.
// The agents run this to set up the browser and copy its imports and style into the tests they write.
test.describe("seed", () => {
  test("seed", async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(inventoryPage.inventoryContainer).toBeVisible();
    // generate code here.
  });
});
