# Diff step 7 → 8

- Step 7 URL: https://www.saucedemo.com/inventory.html
- Step 8 URL: https://www.saucedemo.com/cart.html

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Dropdown / options changes

- # --- All <select> options ---
- # <select> "unnamed":
- - combobox:
- - option "Name (A to Z)"
- - option "Name (Z to A)"
- - option "Price (high to low)"
- - option "Price (low to high)" [selected]
- options:  # native <select> - available without opening UI

## Added

+ - button "Checkout":
+ - button "Continue Shopping":
+ - generic "1" [dup 1/2]:
+ - generic "1" [dup 2/2]:
+ - generic "Description":
+ - generic "Open Menu Swag Labs 2 Your Cart":
+ - generic "QTY":
+ - generic "Your Cart" [dup 1/2]:
+ - generic "Your Cart" [dup 2/2]:
+ - img "Go back"
+ - {by: css, value: "#cart_contents_container > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)", stability: low}
+ - {by: css, value: "#cart_contents_container > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2)", stability: low}
+ - {by: css, value: "#cart_contents_container > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)", stability: low}
+ - {by: css, value: "#cart_contents_container > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)", stability: low}
+ - {by: css, value: "#cart_contents_container > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)", stability: low}
+ - {by: css, value: "#cart_contents_container > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2)", stability: low}
+ - {by: css, value: "#cart_contents_container > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)", stability: low}
+ - {by: css, value: "#cart_contents_container > div:nth-child(1) > div:nth-child(1) > div:nth-child(4)", stability: low}
+ - {by: testid, value: "cart-contents-container", stability: high}
+ - {by: testid, value: "cart-desc-label", stability: high}
+ - {by: testid, value: "cart-list", stability: high}
+ - {by: testid, value: "cart-quantity-label", stability: high}
+ - {by: testid, value: "checkout", stability: high}
+ - {by: testid, value: "continue-shopping", stability: high}

## Removed

- #   - Name (A to Z)
- #   - Name (Z to A)
- #   - Price (high to low)
- #   - Price (low to high) (selected)
- - button "Add to cart" [dup 1/4]:
- - button "Add to cart" [dup 2/4]:
- - button "Add to cart" [dup 3/4]:
- - button "Add to cart" [dup 4/4]:
- - generic "$15.99" [dup 1/2]:
- - generic "$15.99" [dup 2/2]:
- - generic "$49.99":
- - generic "$7.99":
- - generic "Price (low to high)":
- - generic "Products":
- - generic "Sauce Labs Bolt T-Shirt":
- - generic "Sauce Labs Fleece Jacket":
- - generic "Sauce Labs Onesie":
- - generic "Test.allTheThings() T-Shirt (Red)":
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - generic:
- - img "Sauce Labs Backpack"
- - img "Sauce Labs Bike Light"
- - img "Sauce Labs Bolt T-Shirt"
- - img "Sauce Labs Fleece Jacket"
- - img "Sauce Labs Onesie"
- - img "Test.allTheThings() T-Shirt (Red)"
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
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2)", stability: low}
- - {by: css, value: "#contents_wrapper > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6)", stability: low}
- - {by: css, value: "#item_1_title_link > div:nth-child(1)", stability: low}
- - {by: css, value: "#item_2_title_link > div:nth-child(1)", stability: low}
- - {by: css, value: "#item_3_title_link > div:nth-child(1)", stability: low}
- - {by: css, value: "#item_5_title_link > div:nth-child(1)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)", stability: low}
- - {by: css, value: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)", stability: low}
- - {by: testid, value: "active-option", stability: high}
- - {by: testid, value: "add-to-cart-sauce-labs-bolt-t-shirt", stability: high}
