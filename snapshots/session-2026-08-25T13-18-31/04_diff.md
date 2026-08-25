# Diff step 3 → 4

- Step 3 URL: https://www.saucedemo.com/inventory.html
- Step 4 URL: https://www.saucedemo.com/cart.html

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Dropdown / options changes

- # --- All <select> options ---
- # <select> "unnamed":
- - combobox:
- - option "Name (A to Z)" [selected]
- - option "Name (Z to A)"
- - option "Price (high to low)"
- - option "Price (low to high)"
- options:  # native <select> - available without opening UI

## Added

+ - button "Checkout":
+ - button "Continue Shopping":
+ - img "Go back"
+ - {by: testid, value: "checkout", stability: high}
+ - {by: testid, value: "continue-shopping", stability: high}

## Removed

- #   - Name (A to Z) (selected)
- #   - Name (Z to A)
- #   - Price (high to low)
- #   - Price (low to high)
- - button "Add to cart" [dup 1/5]:
- - button "Add to cart" [dup 2/5]:
- - button "Add to cart" [dup 3/5]:
- - button "Add to cart" [dup 4/5]:
- - button "Add to cart" [dup 5/5]:
- - img "Sauce Labs Backpack"
- - img "Sauce Labs Bike Light"
- - img "Sauce Labs Bolt T-Shirt"
- - img "Sauce Labs Fleece Jacket"
- - img "Sauce Labs Onesie"
- - img "Test.allTheThings() T-Shirt (Red)"
- - link "Sauce Labs Bike Light":
- - link "Sauce Labs Bolt T-Shirt":
- - link "Sauce Labs Fleece Jacket":
- - link "Sauce Labs Onesie":
- - link "Test.allTheThings() T-Shirt (Red)":
- - link:
- - link:
- - link:
- - link:
- - link:
- - link:
- - {by: testid, value: "add-to-cart-sauce-labs-bike-light", stability: high}
- - {by: testid, value: "add-to-cart-sauce-labs-bolt-t-shirt", stability: high}
- - {by: testid, value: "add-to-cart-sauce-labs-fleece-jacket", stability: high}
- - {by: testid, value: "add-to-cart-sauce-labs-onesie", stability: high}
- - {by: testid, value: "add-to-cart-test.allthethings()-t-shirt-(red)", stability: high}
- - {by: testid, value: "item-0-img-link", stability: high}
- - {by: testid, value: "item-0-title-link", stability: high}
- - {by: testid, value: "item-1-img-link", stability: high}
- - {by: testid, value: "item-1-title-link", stability: high}
- - {by: testid, value: "item-2-img-link", stability: high}
- - {by: testid, value: "item-2-title-link", stability: high}
- - {by: testid, value: "item-3-img-link", stability: high}
- - {by: testid, value: "item-3-title-link", stability: high}
- - {by: testid, value: "item-4-img-link", stability: high}
- - {by: testid, value: "item-5-img-link", stability: high}
- - {by: testid, value: "item-5-title-link", stability: high}
- - {by: testid, value: "product-sort-container", stability: high}
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
- value: "az"
