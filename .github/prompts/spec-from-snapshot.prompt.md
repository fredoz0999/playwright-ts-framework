---
description: Generate a spec and page objects from a PageSnap session folder
---
Generate Playwright tests from one PageSnap session.

Session folder: ${input:session:snapshots/session-...}

1. Read `PROMPT.md`, `Reading-Snapshots.md` and `flow.md` in that folder, then only the YAML files `flow.md` refers to. Do not open the other session folders.
2. Reuse existing page objects in `src/pages/` where the page is already covered. Add fields to them instead of creating duplicates.
3. Create any missing page objects, register them in `src/fixtures/test.ts`, and put test data in `src/data/`.
4. Write one spec in `tests/` that follows the flow, using `test.step` per stage.
5. Run `npm run typecheck` and the new spec. Fix test mistakes. Do not weaken assertions.
6. Finish with a short list: files changed, any `TODO-LOCATOR` lines, anything in the flow you could not automate and why.
