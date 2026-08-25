# Diff step 9 → 10

- Step 9 URL: https://www.saucedemo.com/cart.html
- Step 10 URL: https://www.saucedemo.com/checkout-step-one.html

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Added

+ - button "Cancel":
+ - button "continue":
+ - form:
+ - generic "1":
+ - generic "Cancel":
+ - generic "Checkout: Your Information" [dup 1/2]:
+ - generic "Checkout: Your Information" [dup 2/2]:
+ - generic "Open Menu Swag Labs 1 Checkout: Your Information":
+ - textbox "First Name":
+ - textbox "Last Name":
+ - textbox "Zip/Postal Code":
+ - {by: css, value: "#checkout_info_container > div:nth-child(1) > form:nth-child(1)", stability: low}
+ - {by: testid, value: "cancel", stability: high}
+ - {by: testid, value: "checkout-info-container", stability: high}
+ - {by: testid, value: "continue", stability: high}
+ - {by: testid, value: "firstName", stability: high}
+ - {by: testid, value: "lastName", stability: high}
+ - {by: testid, value: "postalCode", stability: high}
+ value: ""
+ value: ""
+ value: ""
+ value: "Continue"

## Removed

- - button "Checkout":
- - button "Continue Shopping":
- - button "Remove":
- - generic "$29.99":
- - generic "1" [dup 1/2]:
- - generic "1" [dup 2/2]:
- - generic "Description":
- - generic "Open Menu Swag Labs 1 Your Cart":
- - generic "QTY":
- - generic "Sauce Labs Backpack":
- - generic "Your Cart" [dup 1/2]:
- - generic "Your Cart" [dup 2/2]:
- - generic:
- - generic:
- - generic:
- - generic:
- - link "Sauce Labs Backpack":
- - {by: testid, value: "cart-contents-container", stability: high}
- - {by: testid, value: "cart-desc-label", stability: high}
- - {by: testid, value: "cart-list", stability: high}
- - {by: testid, value: "cart-quantity-label", stability: high}
- - {by: testid, value: "checkout", stability: high}
- - {by: testid, value: "continue-shopping", stability: high}
- - {by: testid, value: "inventory-item", stability: high}
- - {by: testid, value: "inventory-item-desc", stability: high}
- - {by: testid, value: "inventory-item-name", stability: high}
- - {by: testid, value: "inventory-item-price", stability: high}
- - {by: testid, value: "item-4-title-link", stability: high}
- - {by: testid, value: "item-quantity", stability: high}
- - {by: testid, value: "remove-sauce-labs-backpack", stability: high}
- locators:
- locators:
- locators:
- locators:
- locators:
- locators:
