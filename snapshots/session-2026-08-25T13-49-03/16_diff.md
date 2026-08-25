# Diff step 15 → 16

- Step 15 URL: https://www.saucedemo.com/checkout-complete.html
- Step 16 URL: https://www.saucedemo.com/

_Tip: For custom dropdowns, capture once closed and once open (Ctrl+Shift+M with notes)._

## Added

+ - button "login-button":
+ - form:
+ - generic "Password for all users: secret_sauce":
+ - heading "Accepted usernames are:" [level=4]
+ - heading "Password for all users:" [level=4]
+ - textbox "Password":
+ - textbox "Username":
+ - {by: css, value: "#login_button_container > div:nth-child(1) > form:nth-child(1)", stability: low}
+ - {by: testid, value: "login-button", stability: high}
+ - {by: testid, value: "login-container", stability: high}
+ - {by: testid, value: "login-credentials", stability: high}
+ - {by: testid, value: "login-credentials-container", stability: high}
+ - {by: testid, value: "login-password", stability: high}
+ - {by: testid, value: "password", stability: high}
+ - {by: testid, value: "username", stability: high}
+ value: ""
+ value: "***"
+ value: "Login"

## Removed

- - button "Back Home":
- - button "Close Menu":
- - button "Generate PDF order":
- - button "Open Menu":
- - generic "Checkout: Complete!" [dup 1/2]:
- - generic "Checkout: Complete!" [dup 2/2]:
- - generic:
- - generic:
- - heading "Thank you for your order!" [level=2]
- - img "Close Menu"
- - img "Open Menu"
- - img "Pony Express"
- - link "About":
- - link "All Items":
- - link "Facebook":
- - link "LinkedIn":
- - link "Logout":
- - link "Reset App State":
- - link "Twitter":
- - link:
- - list
- - listitem
- - listitem
- - listitem
- - {by: id, value: "react-burger-cross-btn", stability: high}
- - {by: id, value: "react-burger-menu-btn", stability: high}
- - {by: testid, value: "about-sidebar-link", stability: high}
- - {by: testid, value: "back-to-products", stability: high}
- - {by: testid, value: "checkout-complete-container", stability: high}
- - {by: testid, value: "complete-text", stability: high}
- - {by: testid, value: "footer-copy", stability: high}
- - {by: testid, value: "generate-pdf-order", stability: high}
- - {by: testid, value: "header-container", stability: high}
- - {by: testid, value: "inventory-sidebar-link", stability: high}
- - {by: testid, value: "logout-sidebar-link", stability: high}
- - {by: testid, value: "primary-header", stability: high}
- - {by: testid, value: "reset-sidebar-link", stability: high}
- - {by: testid, value: "secondary-header", stability: high}
- - {by: testid, value: "shopping-cart-link", stability: high}
- - {by: testid, value: "social-facebook", stability: high}
- - {by: testid, value: "social-linkedin", stability: high}
- - {by: testid, value: "social-twitter", stability: high}
- - {by: testid, value: "title", stability: high}
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
