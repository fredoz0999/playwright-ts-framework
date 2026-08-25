import type { Locator, Page } from "@playwright/test";

/** Inventory / products page shown after a successful Sauce Demo login. */
export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly inventoryList: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator("[data-test=inventory-container]");
    this.inventoryList = page.locator(".inventory_list");
    this.title = page.locator("[data-test=title]");
  }
}
