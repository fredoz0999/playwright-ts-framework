# Selenium Java → Playwright TypeScript

Short cheat sheet for SDETs. Playwright auto-waits; drop `WebDriverWait` and `Thread.sleep`.

## Locators

| Selenium Java | Playwright TS |
|---------------|---------------|
| `By.id("user")` | `page.locator("#user")` |
| `By.name("email")` | `page.locator("[name=email]")` |
| `By.cssSelector(".btn")` | `page.locator(".btn")` |
| `By.xpath("//h1")` | `page.locator("xpath=//h1")` |
| `By.linkText("Home")` | `page.getByRole("link", { name: "Home" })` |
| `By.partialLinkText("Home")` | `page.getByRole("link", { name: "Home" })` |
| `By.className("item")` | `page.locator(".item")` |
| `By.tagName("h1")` | `page.getByRole("heading")` |
| `[data-testid=x]` | `page.getByTestId("x")` |
| `[data-test=x]` (Sauce Demo) | `page.locator("[data-test=x]")` — not data-testid; this repo sets `testIdAttribute: "data-test"` so `getByTestId` also works |
| label / `aria-label` | `page.getByLabel("Email")` |
| placeholder | `page.getByPlaceholder("Search")` |
| role + accessible name | `page.getByRole("button", { name: "Submit" })` |

Prefer **role / label / testid** over CSS/XPath. Never use a low-stability locator if the YAML snapshot offered a better one.

## Actions and waits

| Selenium Java | Playwright TS |
|---------------|---------------|
| `driver.get(url)` | `page.goto(url)` |
| `element.click()` | `locator.click()` |
| `element.sendKeys("x")` | `locator.fill("x")` (clears first) |
| `element.clear(); sendKeys` | `locator.fill("x")` |
| `element.getText()` | `expect(locator).toHaveText("…")` |
| `element.isDisplayed()` | `expect(locator).toBeVisible()` |
| `new Select(el).selectByVisibleText("A")` | `locator.selectOption({ label: "A" })` |
| `new WebDriverWait(driver, 10).until(visibilityOf(el))` | `expect(locator).toBeVisible()` (auto-wait) |
| `Thread.sleep(1000)` | **Never.** Use `expect(locator).toBeVisible()` / `toHaveURL` |
| `driver.switchTo().frame("n")` | `page.frameLocator("iframe[name=n]")` |
| `Actions.moveToElement` | `locator.hover()` |
| `JavascriptExecutor` | `page.evaluate` (last resort) |

`timeout` in `playwright.config.ts` is the test budget (30s here). `expect.timeout` (5s) is the auto-wait per assertion — that is your explicit wait.

## Page objects and test structure

| Selenium Java | Playwright TS |
|---------------|---------------|
| `@FindBy(id = "q") WebElement q` | `readonly q: Locator` in the constructor |
| `PageFactory.initElements(driver, this)` | `constructor(page: Page) { this.q = page.locator("#q") }` |
| BaseTest `@BeforeMethod` news POs | `src/fixtures/test.ts` — `test.extend({ myPage: async ({ page }, use) => … })` |
| Specs extend BaseTest | Specs `import { test, expect } from "../src/fixtures/test"` |
| TestNG / JUnit `@Test` | `test("name", async ({ myPage }) => { … })` |
| `@Test(dependsOnMethods=…)` | Independent tests. Use `storageState` for auth, not test order. |
| `TestNG.xml` suites | `test.describe()` + `playwright.config.ts` projects |
| `test-output/` / Allure | `npx playwright show-report` (HTML) + trace viewer |

Locators are **lazy**: creating `page.getByRole("button", { name: "Go" })` does not search the DOM. The search happens on `click()` / `expect()`. That replaces stale-element retries.

## Config and auth

| Selenium Java | Playwright TS |
|---------------|---------------|
| `baseUrl` in properties | `use.baseURL` + `page.goto("/")` |
| ChromeOptions | `use: { channel: "chrome" }` locally; CI installs Chromium |
| Cookie dump / `deserialize` | `storageState` (Playwright JSON). Gitignored here. |
| Implicit wait | Do not use. Web-first `expect()` only. |

## YAML `by` from PageSnap → Playwright

Session packs from [pagesnap-playwright](https://github.com/fredoz0999/pagesnap-playwright) use framework-neutral `by` values:

| YAML `by` | Playwright |
|-----------|------------|
| `testid` | `page.getByTestId("…")` |
| `id` | `page.locator("#id")` |
| `name` | `page.locator("[name=…]")` |
| `role` | `page.getByRole("button", { name: "…" })` |
| `label` | `page.getByLabel("…")` |
| `placeholder` | `page.getByPlaceholder("…")` |
| `linkText` | `page.getByRole("link", { name: "…" })` |
| `css` | `page.locator("…")` |
| `xpath` | `page.locator("xpath=…")` |

See `snapshots/README.md` for how to drop a session folder and generate tests.
