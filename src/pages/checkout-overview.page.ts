import type { Locator, Page } from "@playwright/test";

/** Checkout step two — overview. Locators from PageSnap session. */
export class CheckoutOverviewPage {
  readonly page: Page;
  readonly backpackTitle: Locator;
  readonly cancel: Locator;
  readonly finish: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackTitle = page.getByTestId("item-4-title-link");
    this.cancel = page.getByTestId("cancel");
    this.finish = page.getByTestId("finish");
  }
}
