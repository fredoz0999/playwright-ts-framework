# Diff step 7 → 8

- Step 7 URL: https://www.saucedemo.com/checkout-step-one.html
- Step 8 URL: https://www.saucedemo.com/checkout-step-two.html

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Added

+ - button "Finish":
+ - link "Sauce Labs Backpack":
+ - {by: testid, value: "finish", stability: high}
+ - {by: testid, value: "item-4-title-link", stability: high}

## Removed

- - button "continue":
- - form:
- - textbox "First Name":
- - textbox "Last Name":
- - textbox "Zip/Postal Code":
- - {by: css, value: "#checkout_info_container > div:nth-child(1) > form:nth-child(1)", stability: low}
- - {by: testid, value: "continue", stability: high}
- - {by: testid, value: "firstName", stability: high}
- - {by: testid, value: "lastName", stability: high}
- - {by: testid, value: "postalCode", stability: high}
- locators:
- locators:
- locators:
- value: ""
- value: ""
- value: ""
- value: "Continue"
