import type { Locator, Page } from "@playwright/test";

/** Inventory / products page shown after a successful Sauce Demo login. */
export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly inventoryList: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.getByTestId("inventory-container");
    this.inventoryList = page.getByTestId("inventory-list");
    this.title = page.getByTestId("title");
  }
}
