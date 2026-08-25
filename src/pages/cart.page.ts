import type { Locator, Page } from "@playwright/test";

/** Cart page (https://www.saucedemo.com/cart.html). Locators from PageSnap session. */
export class CartPage {
  readonly page: Page;
  readonly backpackTitle: Locator;
  readonly removeBackpack: Locator;
  readonly continueShopping: Locator;
  readonly checkout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackTitle = page.getByTestId("item-4-title-link");
    this.removeBackpack = page.getByTestId("remove-sauce-labs-backpack");
    this.continueShopping = page.getByTestId("continue-shopping");
    this.checkout = page.getByTestId("checkout");
  }
}
