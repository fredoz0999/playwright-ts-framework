import type { Locator, Page } from "@playwright/test";

/**
 * Sauce Demo login page (https://www.saucedemo.com).
 *
 * Selenium analog: a class with @FindBy fields + methods.
 * Locators are lazy — they resolve on click / fill / expect, not in the constructor.
 *
 * Sauce Demo uses data-test (not data-testid). playwright.config.ts sets
 * testIdAttribute: "data-test", so getByTestId maps to that attribute.
 */
export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByTestId("username");
    this.password = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
    this.error = page.getByTestId("error");
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async login(user: string, pass: string): Promise<void> {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}
