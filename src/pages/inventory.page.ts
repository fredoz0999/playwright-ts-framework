import type { Locator, Page } from "@playwright/test";

/** Inventory / products page shown after a successful Sauce Demo login. */
export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly inventoryList: Locator;
  readonly title: Locator;
  readonly backpackTitle: Locator;
  readonly addBackpack: Locator;
  readonly removeBackpack: Locator;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.getByTestId("inventory-container");
    this.inventoryList = page.getByTestId("inventory-list");
    this.title = page.getByTestId("title");
    this.backpackTitle = page.getByTestId("item-4-title-link");
    this.addBackpack = page.getByTestId("add-to-cart-sauce-labs-backpack");
    this.removeBackpack = page.getByTestId("remove-sauce-labs-backpack");
    this.shoppingCart = page.getByTestId("shopping-cart-link");
  }
}
