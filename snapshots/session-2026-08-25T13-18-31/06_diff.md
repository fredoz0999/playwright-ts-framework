# Diff step 5 → 6

- Step 5 URL: https://www.saucedemo.com/cart.html
- Step 6 URL: https://www.saucedemo.com/checkout-step-one.html

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Added

+ - button "Cancel":
+ - button "continue":
+ - form:
+ - textbox "First Name":
+ - textbox "Last Name":
+ - textbox "Zip/Postal Code":
+ - {by: css, value: "#checkout_info_container > div:nth-child(1) > form:nth-child(1)", stability: low}
+ - {by: testid, value: "cancel", stability: high}
+ - {by: testid, value: "continue", stability: high}
+ - {by: testid, value: "firstName", stability: high}
+ - {by: testid, value: "lastName", stability: high}
+ - {by: testid, value: "postalCode", stability: high}
+ locators:
+ locators:
+ value: ""
+ value: ""
+ value: ""
+ value: "Continue"

## Removed

- - button "Checkout":
- - button "Continue Shopping":
- - button "Remove":
- - link "Sauce Labs Backpack":
- - {by: testid, value: "checkout", stability: high}
- - {by: testid, value: "continue-shopping", stability: high}
- - {by: testid, value: "item-4-title-link", stability: high}
- - {by: testid, value: "remove-sauce-labs-backpack", stability: high}
