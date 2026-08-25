# Test generation prompt

Generated: 2026-08-25T17:49:03Z
Start URL: https://www.saucedemo.com
Framework: playwright
Style: pageobject
Waits: web-first
Goal: Login, sort price low-high, add backpack and bike light, assert cart badge, remove bike light, checkout, logout
Snapshot mode: lean (one locator per control)

## Task

Using the YAML page snapshots and `flow.md` in this folder, generate **@playwright/test** TypeScript tests. Do not invent steps or elements. Do not emit extra spec files this tool did not ask for.

## Locators
- Prefer YAML `by` in this order: testid -> getByTestId, role -> getByRole, label -> getByLabel, id -> locator("#id").
- Then name -> locator("[name=...]"), placeholder -> getByPlaceholder.
- `generic` nodes are testid-only (no ARIA role). Use getByTestId, never getByRole("generic"). Do not goto a URL to skip a control that is in the YAML.
- Never use stability: low unless nothing else exists. Never page.waitForTimeout.
- Web-first expect(); native <select> -> selectOption; frames -> frameLocator.

## Walkthrough
- Follow each step in `flow.md` and honor step notes as intended actions/assertions.
- `action:` = intended act; `assert:` = assertion; `data:` = typed values. Honor those prefixes in notes.
- YAML snapshots are page states: assert visible text, URL, enabled/visible. Wait for enabled/visible, never sleep.
- Independent test when possible; reuse storageState/cookies if this session loaded them.
- Native select: one snapshot (`options:`). Custom dropdown: closed then open; read NN_diff.md.
- Do not invent UI. Structure: pageobject.

User goal: Login, sort price low-high, add backpack and bike light, assert cart badge, remove bike light, checkout, logout
