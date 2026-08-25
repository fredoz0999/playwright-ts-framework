import { test, expect } from "../src/fixtures/test";
import { users } from "../src/data/users";
import { checkoutInfo } from "../src/data/checkout";

test.describe("Sauce Demo checkout", () => {
  test("login, add backpack to cart, checkout", async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutInfoPage,
    checkoutOverviewPage,
    checkoutCompletePage,
  }) => {
    await loginPage.goto();
    await expect(loginPage.username).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/\/inventory\.html/);
    await expect(inventoryPage.backpackTitle).toBeVisible();
    await expect(inventoryPage.addBackpack).toBeVisible();

    await inventoryPage.addBackpack.click();
    await expect(inventoryPage.removeBackpack).toBeVisible();

    await inventoryPage.shoppingCart.click();
    await expect(page).toHaveURL(/\/cart\.html/);
    await expect(cartPage.backpackTitle).toBeVisible();
    await expect(cartPage.checkout).toBeVisible();

    await cartPage.checkout.click();
    await expect(page).toHaveURL(/\/checkout-step-one\.html/);
    await expect(checkoutInfoPage.firstName).toBeVisible();
    await checkoutInfoPage.fill(
      checkoutInfo.firstName,
      checkoutInfo.lastName,
      checkoutInfo.postalCode,
    );
    await checkoutInfoPage.continueButton.click();

    await expect(page).toHaveURL(/\/checkout-step-two\.html/);
    await expect(checkoutOverviewPage.backpackTitle).toBeVisible();
    await expect(checkoutOverviewPage.finish).toBeVisible();

    await checkoutOverviewPage.finish.click();
    await expect(page).toHaveURL(/\/checkout-complete\.html/);
    await expect(checkoutCompletePage.thankYou).toBeVisible();
  });
});
