import type { Locator, Page } from "@playwright/test";

/** Checkout complete. Locators / names from PageSnap YAML. */
export class CheckoutCompletePage {
  readonly page: Page;
  readonly title: Locator;
  readonly thankYou: Locator;
  readonly backHome: Locator;
  readonly openMenu: Locator;
  readonly logout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId("title");
    this.thankYou = page.getByRole("heading", { name: "Thank you for your order!" });
    this.backHome = page.getByTestId("back-to-products");
    this.openMenu = page.locator("#react-burger-menu-btn");
    this.logout = page.getByTestId("logout-sidebar-link");
  }
}
