# Capture session flow

- Updated: 2026-08-25T18:03:30Z
- Start URL: https://www.saucedemo.com
- Goal: Login, sort price low-high, add backpack and bike light, assert cart badge, remove bike light, checkout, logout
- Steps captured: 16

## Steps

### 1. action: login as standard_user
- File: `01_www.saucedemo.com_root.yaml`
- URL: https://www.saucedemo.com/
- Captured: 2026-08-25T17:49:59Z

### 2. action: sort Price (low to high)action: sort Price (low to high)
- File: `02_www.saucedemo.com_inventory.html.yaml`
- URL: https://www.saucedemo.com/inventory.html
- Captured: 2026-08-25T17:50:54Z
- Diff vs previous: `02_diff.md`

### 3. action: sort Price (low to high)action: sort Price (low to high)
- File: `03_www.saucedemo.com_inventory.html.yaml`
- URL: https://www.saucedemo.com/inventory.html
- Captured: 2026-08-25T17:50:54Z
- Diff vs previous: `03_diff.md`

### 4. action: sort Price (low to high)
- File: `04_www.saucedemo.com_inventory.html.yaml`
- URL: https://www.saucedemo.com/inventory.html
- Captured: 2026-08-25T17:51:41Z
- Diff vs previous: `04_diff.md`

### 5. action: add backpack and bike light
- File: `05_www.saucedemo.com_inventory.html.yaml`
- URL: https://www.saucedemo.com/inventory.html
- Captured: 2026-08-25T17:52:31Z
- Diff vs previous: `05_diff.md`

### 6. action: action: add backpack and bike light
- File: `06_www.saucedemo.com_inventory.html.yaml`
- URL: https://www.saucedemo.com/inventory.html
- Captured: 2026-08-25T17:54:31Z
- Diff vs previous: `06_diff.md`

### 7. assert: cart badge is 2
- File: `07_www.saucedemo.com_inventory.html.yaml`
- URL: https://www.saucedemo.com/inventory.html
- Captured: 2026-08-25T17:55:03Z
- Diff vs previous: `07_diff.md`

### 8. action: remove bike light
- File: `08_www.saucedemo.com_cart.html.yaml`
- URL: https://www.saucedemo.com/cart.html
- Captured: 2026-08-25T17:55:34Z
- Diff vs previous: `08_diff.md`

### 9. action: checkoutaction: checkout
- File: `09_www.saucedemo.com_cart.html.yaml`
- URL: https://www.saucedemo.com/cart.html
- Captured: 2026-08-25T17:56:04Z
- Diff vs previous: `09_diff.md`

### 10. data: firstName=Test lastName=User postalCode=12345
- File: `10_www.saucedemo.com_checkout-step-one.html.yaml`
- URL: https://www.saucedemo.com/checkout-step-one.html
- Captured: 2026-08-25T17:56:34Z
- Diff vs previous: `10_diff.md`

### 11. action: finish checkout
- File: `11_www.saucedemo.com_checkout-step-two.html.yaml`
- URL: https://www.saucedemo.com/checkout-step-two.html
- Captured: 2026-08-25T17:59:21Z
- Diff vs previous: `11_diff.md`

### 12. Capture
- File: `12_www.saucedemo.com_checkout-step-two.html.yaml`
- URL: https://www.saucedemo.com/checkout-step-two.html
- Captured: 2026-08-25T17:59:54Z
- Diff vs previous: `12_diff.md`

### 13. action: open menuaction: open menu
- File: `13_www.saucedemo.com_checkout-complete.html.yaml`
- URL: https://www.saucedemo.com/checkout-complete.html
- Captured: 2026-08-25T18:00:28Z
- Diff vs previous: `13_diff.md`

### 14. open menu
- File: `14_www.saucedemo.com_checkout-complete.html.yaml`
- URL: https://www.saucedemo.com/checkout-complete.html
- Captured: 2026-08-25T18:00:54Z
- Diff vs previous: `14_diff.md`

### 15. action: logout
- File: `15_www.saucedemo.com_checkout-complete.html.yaml`
- URL: https://www.saucedemo.com/checkout-complete.html
- Captured: 2026-08-25T18:01:31Z
- Diff vs previous: `15_diff.md`

### 16. assert: logged outassert: logged out
- File: `16_www.saucedemo.com_root.yaml`
- URL: https://www.saucedemo.com/
- Captured: 2026-08-25T18:02:29Z
- Diff vs previous: `16_diff.md`
