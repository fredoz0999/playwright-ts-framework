import type { Locator, Page } from "@playwright/test";

/** Inventory / products page. Locators from PageSnap YAML (testid / id). */
export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly inventoryList: Locator;
  readonly title: Locator;
  readonly sort: Locator;
  readonly activeOption: Locator;
  readonly backpackTitle: Locator;
  readonly addBackpack: Locator;
  readonly removeBackpack: Locator;
  readonly addBikeLight: Locator;
  readonly removeBikeLight: Locator;
  readonly shoppingCart: Locator;
  readonly cartBadge: Locator;
  readonly openMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.getByTestId("inventory-container");
    this.inventoryList = page.getByTestId("inventory-list");
    this.title = page.getByTestId("title");
    this.sort = page.getByTestId("product-sort-container");
    this.activeOption = page.getByTestId("active-option");
    this.backpackTitle = page.getByTestId("item-4-title-link");
    this.addBackpack = page.getByTestId("add-to-cart-sauce-labs-backpack");
    this.removeBackpack = page.getByTestId("remove-sauce-labs-backpack");
    this.addBikeLight = page.getByTestId("add-to-cart-sauce-labs-bike-light");
    this.removeBikeLight = page.getByTestId("remove-sauce-labs-bike-light");
    this.shoppingCart = page.getByTestId("shopping-cart-link");
    this.cartBadge = page.getByTestId("shopping-cart-badge");
    this.openMenu = page.locator("#react-burger-menu-btn");
  }
}
