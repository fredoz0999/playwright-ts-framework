import { test, expect } from "../src/fixtures/test";
import { users } from "../src/data/users";
import { checkoutInfo } from "../src/data/checkout";

test.describe("Sauce Demo sort, cart, checkout, logout", () => {
  test("login, sort lohi, add two items, remove bike light, checkout, logout", async ({
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
    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/\/inventory\.html/);
    await expect(inventoryPage.inventoryList).toBeVisible();
    await inventoryPage.sort.selectOption({ label: "Price (low to high)" });
    await expect(inventoryPage.activeOption).toHaveText("Price (low to high)");

    await inventoryPage.addBackpack.click();
    await inventoryPage.addBikeLight.click();
    await expect(inventoryPage.removeBackpack).toBeVisible();
    await expect(inventoryPage.removeBikeLight).toBeVisible();
    await expect(inventoryPage.cartBadge).toHaveText("2");

    await inventoryPage.shoppingCart.click();
    await expect(page).toHaveURL(/\/cart\.html/);
    await expect(cartPage.backpackTitle).toBeVisible();
    await expect(cartPage.bikeLightTitle).toBeVisible();
    await cartPage.removeBikeLight.click();
    await expect(cartPage.bikeLightTitle).toHaveCount(0);
    await expect(cartPage.backpackTitle).toBeVisible();
    await expect(cartPage.cartBadge).toHaveText("1");

    await cartPage.checkout.click();
    await expect(page).toHaveURL(/\/checkout-step-one\.html/);
    await checkoutInfoPage.fill(
      checkoutInfo.firstName,
      checkoutInfo.lastName,
      checkoutInfo.postalCode,
    );
    await checkoutInfoPage.continueButton.click();

    await expect(page).toHaveURL(/\/checkout-step-two\.html/);
    await expect(checkoutOverviewPage.backpackTitle).toBeVisible();
    await checkoutOverviewPage.finish.click();

    await expect(page).toHaveURL(/\/checkout-complete\.html/);
    await expect(checkoutCompletePage.thankYou).toBeVisible();
    await checkoutCompletePage.openMenu.click();
    await expect(checkoutCompletePage.logout).toBeVisible();
    await checkoutCompletePage.logout.click();

    await expect(loginPage.loginContainer).toBeVisible();
    await expect(loginPage.username).toBeVisible();
  });
});
