---
applyTo: "tests/**/*.ts,src/pages/**/*.ts,src/fixtures/**/*.ts"
---
# Writing specs and page objects in this repo

## Specs
- One behaviour per test, with a title that states the expected outcome. Group related tests with `test.describe`.
- Tests are independent and can run in parallel (`fullyParallel` is on): each one starts from `goto()` and does its own login.
- Take page objects from fixtures (`async ({ loginPage, inventoryPage }) => ...`). Do not `new` them in a spec.
- For flows longer than a few actions, wrap each stage in `await test.step("...", async () => { ... })` with that stage's assertions inside. With `STEP_SHOTS=1` every step gets a screenshot in the report.
- After every navigation or state change, assert something a user can see: `toHaveURL`, `toBeVisible`, `toHaveText`.
- Navigate with relative paths. `baseURL` comes from config or `BASE_URL`.

## Assertions
- Assert content or state, not bare visibility: `toHaveText`, `toHaveValue`, `toHaveCount`, `toBeChecked`. Use `toBeVisible` only when appearing or disappearing is the behaviour under test.
- `toHaveText` for the whole text, `toContainText` for a part of it. `toHaveCount` for how many items a list shows.
- For the structure of a whole component (a menu, a summary panel), one `toMatchAriaSnapshot` beats a dozen single checks.
- Rely on auto-waiting. Do not raise `timeout` on an action or assertion to get a test through; a slow step is something to report.
- A locator must match exactly one element. Narrow it (`filter`, a parent test id) instead of adding `.first()`.

## Page objects
- A class with `readonly page: Page` and `readonly` `Locator` fields assigned in the constructor. Locators are lazy, so there are no waits in constructors.
- Methods only for actions that take more than one step (`login(user, pass)`, `fill(...)`). Single clicks are done on the locator from the spec.
- No assertions inside page objects. Specs assert.
- One short doc comment saying which page it is and where its locators came from.

## Locator order
1. `page.getByTestId("...")` (maps to `data-test`)
2. `page.getByRole("button", { name: "..." })`, `getByLabel`, `getByPlaceholder`
3. `page.locator("#id")` when the snapshot shows a stable id
4. Never XPath, never `nth()` on a generic selector, never text that changes with data

In PageSnap YAML prefer entries marked `stability: high`. Honor the `action:`, `assert:` and `data:` notes in `flow.md`.

## When a test fails
- Read the error and the `page-snapshot` attachment (test ids and ARIA tree at the moment of failure) before changing anything.
- Locator no longer matches but the element is in the snapshot: fix the locator in the page object, one line.
- Element is missing, or the value is wrong: that is a product question. Leave the assertion alone and report it.
