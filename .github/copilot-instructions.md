# Repo rules for AI assistants

Playwright + TypeScript UI tests. Node 20+, ESM. Keep this file short: it is sent with every request.

- Specs live in `tests/*.spec.ts` and import `{ test, expect }` from `src/fixtures/test`, never from `@playwright/test`.
- Page objects live in `src/pages/<name>.page.ts`. Register each new one as a fixture in `src/fixtures/test.ts`.
- Test data lives in `src/data/`. No literals for accounts or form data inside specs.
- Locators come from the PageSnap YAML in `snapshots/` or from an existing page object. Never invent one. If you cannot ground a locator, add `// TODO-LOCATOR: verify` on that line and say so.
- The test id attribute here is `data-test`; `getByTestId("x")` already maps to it.
- Web-first assertions only. Never `waitForTimeout`, never a sleep, never `try/catch` around an assertion.
- Do not weaken, loosen, or delete an assertion to make a test pass. If the app looks wrong, stop and report it as a possible product bug.
- Never read, print, or commit `auth.json`, `cookies.json`, or `storageState.json`.
- After a change run `npm run typecheck`, then the affected spec: `npx playwright test tests/<file>`.
- Make the smallest change that does the job. Do not reformat or rename things you were not asked to touch.
