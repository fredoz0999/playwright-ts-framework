import type { Locator, Page } from "@playwright/test";

/** Cart page. Locators from PageSnap YAML. */
export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly backpackTitle: Locator;
  readonly bikeLightTitle: Locator;
  readonly removeBackpack: Locator;
  readonly removeBikeLight: Locator;
  readonly continueShopping: Locator;
  readonly checkout: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId("title");
    this.backpackTitle = page.getByTestId("item-4-title-link");
    this.bikeLightTitle = page.getByTestId("item-0-title-link");
    this.removeBackpack = page.getByTestId("remove-sauce-labs-backpack");
    this.removeBikeLight = page.getByTestId("remove-sauce-labs-bike-light");
    this.continueShopping = page.getByTestId("continue-shopping");
    this.checkout = page.getByTestId("checkout");
    this.cartBadge = page.getByTestId("shopping-cart-badge");
  }
}
