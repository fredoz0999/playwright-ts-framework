import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";

/**
 * Project fixtures — the Playwright replacement for a Selenium BaseTest /
 * @BeforeEach that new's every page object.
 *
 * Specs import `{ test, expect }` from this file, not from `@playwright/test`,
 * so they receive loginPage / inventoryPage automatically.
 */
type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

export { expect } from "@playwright/test";
