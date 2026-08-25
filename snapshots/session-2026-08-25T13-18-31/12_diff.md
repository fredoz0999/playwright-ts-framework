# Diff step 11 → 12

- Step 11 URL: https://www.saucedemo.com/checkout-step-two.html
- Step 12 URL: https://www.saucedemo.com/checkout-complete.html

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Added

+ - button "Back Home":
+ - button "Generate PDF order":
+ - heading "Thank you for your order!" [level=2]
+ - img "Pony Express"
+ - {by: testid, value: "back-to-products", stability: high}
+ - {by: testid, value: "generate-pdf-order", stability: high}

## Removed

- - button "Cancel":
- - button "Finish":
- - img "Go back"
- - link "Sauce Labs Backpack":
- - {by: testid, value: "cancel", stability: high}
- - {by: testid, value: "finish", stability: high}
- - {by: testid, value: "item-4-title-link", stability: high}
- locators:
