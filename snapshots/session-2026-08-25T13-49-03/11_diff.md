# Diff step 10 → 11

- Step 10 URL: https://www.saucedemo.com/checkout-step-one.html
- Step 11 URL: https://www.saucedemo.com/checkout-step-two.html

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Added

+ - button "Finish":
+ - generic "$29.99":
+ - generic "1" [dup 1/2]:
+ - generic "1" [dup 2/2]:
+ - generic "Checkout: Overview" [dup 1/2]:
+ - generic "Checkout: Overview" [dup 2/2]:
+ - generic "Description":
+ - generic "Free Pony Express Delivery!":
+ - generic "Item total: $29.99":
+ - generic "Open Menu Swag Labs 1 Checkout: Overview":
+ - generic "Payment Information:":
+ - generic "Price Total":
+ - generic "QTY":
+ - generic "Sauce Labs Backpack":
+ - generic "SauceCard #31337":
+ - generic "Shipping Information:":
+ - generic "Tax: $2.40":
+ - generic "Total: $32.39":
+ - generic:
+ - generic:
+ - generic:
+ - generic:
+ - link "Sauce Labs Backpack":
+ - {by: testid, value: "cart-desc-label", stability: high}
+ - {by: testid, value: "cart-list", stability: high}
+ - {by: testid, value: "cart-quantity-label", stability: high}
+ - {by: testid, value: "checkout-summary-container", stability: high}
+ - {by: testid, value: "finish", stability: high}
+ - {by: testid, value: "inventory-item", stability: high}
+ - {by: testid, value: "inventory-item-desc", stability: high}
+ - {by: testid, value: "inventory-item-name", stability: high}
+ - {by: testid, value: "inventory-item-price", stability: high}
+ - {by: testid, value: "item-4-title-link", stability: high}
+ - {by: testid, value: "item-quantity", stability: high}
+ - {by: testid, value: "payment-info-label", stability: high}
+ - {by: testid, value: "payment-info-value", stability: high}
+ - {by: testid, value: "shipping-info-label", stability: high}
+ - {by: testid, value: "shipping-info-value", stability: high}
+ - {by: testid, value: "subtotal-label", stability: high}
+ - {by: testid, value: "tax-label", stability: high}
+ - {by: testid, value: "total-info-label", stability: high}
+ - {by: testid, value: "total-label", stability: high}
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:

## Removed

- - button "continue":
- - form:
- - generic "1":
- - generic "Cancel":
- - generic "Checkout: Your Information" [dup 1/2]:
- - generic "Checkout: Your Information" [dup 2/2]:
- - generic "Open Menu Swag Labs 1 Checkout: Your Information":
- - textbox "First Name":
- - textbox "Last Name":
- - textbox "Zip/Postal Code":
- - {by: css, value: "#checkout_info_container > div:nth-child(1) > form:nth-child(1)", stability: low}
- - {by: testid, value: "checkout-info-container", stability: high}
- - {by: testid, value: "continue", stability: high}
- - {by: testid, value: "firstName", stability: high}
- - {by: testid, value: "lastName", stability: high}
- - {by: testid, value: "postalCode", stability: high}
- value: ""
- value: ""
- value: ""
- value: "Continue"
