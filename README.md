# playwright-ts-framework

Playwright + TypeScript UI tests. **This repo is where tests live and run.**

Capture (YAML session packs) is a sibling tool: [pagesnap-playwright](https://github.com/fredoz0999/pagesnap-playwright).

Written for SDETs coming from **Selenium Java**. Short mapping: [docs/from-selenium.md](docs/from-selenium.md).

## Setup (local Chrome, no browser download)

Node 20+.

1. Clone this repo and change into `playwright-ts-framework`.
2. Install with env `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` so postinstall does not fetch browsers.
3. Run tests. Local config uses `channel: "chrome"` (Google Chrome already on the machine).

A laptop does not need a Playwright browser download. CI downloads Chromium because `CI=true` unsets `channel`.

### Scripts

| script | what it runs |
|--------|----------------|
| test | playwright test |
| test:headed | playwright test --headed |
| test:ui | playwright test --ui |
| report | playwright show-report |
| typecheck | tsc --noEmit |

Default `baseURL` is `https://www.saucedemo.com` (Swag Labs). Override with `BASE_URL` if you point at another host.


## Smoke spec

Sauce Demo login against the public demo. Accounts are printed on the login page (not secrets).

- `standard_user` / `secret_sauce` — inventory list is visible (`data-test=inventory-container` or `.inventory_list`)
- `locked_out_user` / `secret_sauce` — locked-out error banner

Sauce Demo uses **`data-test`**, not `data-testid`. Page objects use `page.locator("[data-test=username]")` and friends. Config also sets `testIdAttribute: "data-test"` so `getByTestId("username")` maps to the same attribute.

Credentials live in `src/data/users.ts`. Page objects: `src/pages/login.page.ts`, `src/pages/inventory.page.ts`.

## Layout

- `playwright.config.ts` — timeouts, baseURL, Chrome vs CI Chromium
- `tests/` — specs (`*.spec.ts`)
- `src/pages/` — page objects (Locator fields)
- `src/fixtures/test.ts` — extend the base test with PO fixtures
- `src/data/` — test data files
- `snapshots/` — drop PageSnap `session-*` folders here
- `docs/from-selenium.md` — Selenium Java cheat sheet

Specs import `{ test, expect }` from `src/fixtures/test`, not from `@playwright/test`, so page objects are injected. That file replaces a Selenium `BaseTest` that constructed every page object in `@BeforeMethod`.

## From a PageSnap capture to a spec

1. In [pagesnap-playwright](https://github.com/fredoz0999/pagesnap-playwright), capture a walkthrough (`Ctrl+M` snapshot, `Ctrl+Shift+M` with a note, `Ctrl+Q` end). Output: `pageSnapshots/session-<ts>/`.
2. Copy `pageSnapshots/session-*` into this repo's `snapshots/` folder.
3. Prompt an LLM with that folder's `PROMPT.md` (plus `Reading-Snapshots.md`, `flow.md`, and the YAML). Ask it to generate specs into `tests/`, page objects into `src/pages/`, and a fixture entry in `src/fixtures/test.ts`.

Honor `action:` / `assert:` / `data:` notes. Do not invent elements. Web-first `expect()`, never `page.waitForTimeout`.

Details: [snapshots/README.md](snapshots/README.md). Cookie / `storageState` files are secrets and gitignored.

## Locators (Selenium to Playwright)

| Selenium Java | Playwright TS |
|---------------|---------------|
| `By.id("user")` | `page.locator("#user")` |
| `By.name("email")` | `page.locator("[name=email]")` |
| `By.cssSelector(".btn")` | `page.locator(".btn")` |
| `By.xpath("//h1")` | `page.locator("xpath=//h1")` |
| `By.linkText("Home")` | `page.getByRole("link", { name: "Home" })` |
| testid | `page.getByTestId("...")` |
| label | `page.getByLabel("Email")` |
| `WebDriverWait` | `expect(locator).toBeVisible()` (auto-wait) |
| `sendKeys("x")` | `locator.fill("x")` |
| `Select.selectByVisibleText("A")` | `locator.selectOption({ label: "A" })` |
| `Thread.sleep` | **Never** |

Full table: [docs/from-selenium.md](docs/from-selenium.md).

## CI

`.github/workflows/test.yml` runs on push and pull request: Node 20, package install, Chromium with OS dependencies, then the test runner.

GitHub Actions sets `CI=true`, which **unsets** `channel` so tests use bundled Chromium — not `channel: chrome`.
