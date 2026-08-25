# Diff step 1 → 2

- Step 1 URL: https://www.saucedemo.com/
- Step 2 URL: https://www.saucedemo.com/inventory.html

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Dropdown / options changes

+ # --- All <select> options ---
+ # <select> "unnamed":
+ - combobox:
+ - option "Name (A to Z)" [selected]
+ - option "Name (Z to A)"
+ - option "Price (high to low)"
+ - option "Price (low to high)"
+ options:  # native <select> - available without opening UI

## Added

+ #   - Name (A to Z) (selected)
+ #   - Name (Z to A)
+ #   - Price (high to low)
+ #   - Price (low to high)
+ - button "Add to cart" [dup 1/6]:
+ - button "Add to cart" [dup 2/6]:
+ - button "Add to cart" [dup 3/6]:
+ - button "Add to cart" [dup 4/6]:
+ - button "Add to cart" [dup 5/6]:
+ - button "Add to cart" [dup 6/6]:
+ - button "Open Menu":
+ - img "Open Menu"
+ - img "Sauce Labs Backpack"
+ - img "Sauce Labs Bike Light"
+ - img "Sauce Labs Bolt T-Shirt"
+ - img "Sauce Labs Fleece Jacket"
+ - img "Sauce Labs Onesie"
+ - img "Test.allTheThings() T-Shirt (Red)"
+ - link "Facebook":
+ - link "LinkedIn":
+ - link "Sauce Labs Backpack":
+ - link "Sauce Labs Bike Light":
+ - link "Sauce Labs Bolt T-Shirt":
+ - link "Sauce Labs Fleece Jacket":
+ - link "Sauce Labs Onesie":
+ - link "Test.allTheThings() T-Shirt (Red)":
+ - link "Twitter":
+ - link:
+ - link:
+ - link:
+ - link:
+ - link:
+ - link:
+ - list
+ - listitem
+ - listitem
+ - listitem
+ - {by: id, value: "react-burger-menu-btn", stability: high}
+ - {by: testid, value: "add-to-cart-sauce-labs-backpack", stability: high}
+ - {by: testid, value: "add-to-cart-sauce-labs-bike-light", stability: high}
+ - {by: testid, value: "add-to-cart-sauce-labs-bolt-t-shirt", stability: high}
+ - {by: testid, value: "add-to-cart-sauce-labs-fleece-jacket", stability: high}
+ - {by: testid, value: "add-to-cart-sauce-labs-onesie", stability: high}
+ - {by: testid, value: "add-to-cart-test.allthethings()-t-shirt-(red)", stability: high}
+ - {by: testid, value: "item-0-img-link", stability: high}
+ - {by: testid, value: "item-0-title-link", stability: high}
+ - {by: testid, value: "item-1-img-link", stability: high}
+ - {by: testid, value: "item-1-title-link", stability: high}
+ - {by: testid, value: "item-2-img-link", stability: high}
+ - {by: testid, value: "item-2-title-link", stability: high}
+ - {by: testid, value: "item-3-img-link", stability: high}
+ - {by: testid, value: "item-3-title-link", stability: high}
+ - {by: testid, value: "item-4-img-link", stability: high}
+ - {by: testid, value: "item-4-title-link", stability: high}
+ - {by: testid, value: "item-5-img-link", stability: high}
+ - {by: testid, value: "item-5-title-link", stability: high}
+ - {by: testid, value: "product-sort-container", stability: high}
+ - {by: testid, value: "social-facebook", stability: high}
+ - {by: testid, value: "social-linkedin", stability: high}
+ - {by: testid, value: "social-twitter", stability: high}
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
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ locators:
+ value: "az"

## Removed

- - button "login-button":
- - form:
- - heading "Accepted usernames are:" [level=4]
- - heading "Password for all users:" [level=4]
- - textbox "Password":
- - textbox "Username":
- - {by: css, value: "#login_button_container > div:nth-child(1) > form:nth-child(1)", stability: low}
- - {by: testid, value: "login-button", stability: high}
- - {by: testid, value: "password", stability: high}
- - {by: testid, value: "username", stability: high}
- value: ""
- value: "***"
- value: "Login"
