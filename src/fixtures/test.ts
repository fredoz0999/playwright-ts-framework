import { test as base, type Page, type TestInfo } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";
import { CartPage } from "../pages/cart.page";
import { CheckoutInfoPage } from "../pages/checkout-info.page";
import { CheckoutOverviewPage } from "../pages/checkout-overview.page";
import { CheckoutCompletePage } from "../pages/checkout-complete.page";
import { attachPageSnapshot, stepShotsEnabled, withStepScreenshots } from "./evidence";

/**
 * Project fixtures — the Playwright replacement for a Selenium BaseTest /
 * @BeforeEach that new's every page object.
 *
 * Specs import `{ test, expect }` from this file, not from `@playwright/test`,
 * so they receive page objects automatically.
 */
type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutInfoPage: CheckoutInfoPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
  /** Runs for every test: page snapshot on failure, step screenshots when STEP_SHOTS=1. */
  evidence: void;
};

const pages = new WeakMap<TestInfo, Page>();

export const test = base.extend<Fixtures>({
  evidence: [
    async ({ page }, use, testInfo) => {
      pages.set(testInfo, page);
      await use();
      if (testInfo.status !== testInfo.expectedStatus) await attachPageSnapshot(page, testInfo);
    },
    { auto: true },
  ],
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutInfoPage: async ({ page }, use) => {
    await use(new CheckoutInfoPage(page));
  },
  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});

if (stepShotsEnabled) withStepScreenshots(test, (info) => pages.get(info));

export { expect } from "@playwright/test";
