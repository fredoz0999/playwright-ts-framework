import type { Locator, Page } from "@playwright/test";

/** Checkout complete. Locators / names from PageSnap session. */
export class CheckoutCompletePage {
  readonly page: Page;
  readonly thankYou: Locator;
  readonly backHome: Locator;

  constructor(page: Page) {
    this.page = page;
    this.thankYou = page.getByRole("heading", { name: "Thank you for your order!" });
    this.backHome = page.getByTestId("back-to-products");
  }
}
