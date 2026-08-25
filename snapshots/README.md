# Snapshots (PageSnap session packs)

This folder is where **captured sessions** land so an LLM can generate tests.

Capture happens in the sibling tool, not in this repo:

https://github.com/fredoz0999/pagesnap-playwright

PageSnap writes `pageSnapshots/session-<timestamp>/` with YAML page trees, `flow.md`, and `PROMPT.md`. **This repo is where those tests live and run.**

## Drop a session here

1. In `pagesnap-playwright`, walk the app and capture (`Ctrl+M` / toolbar). End the session (`Ctrl+Q`).
2. Copy the folder into this directory:

```bash
cp -R ../pagesnap-playwright/pageSnapshots/session-YYYYMMDD-HHMMSS \
      snapshots/session-YYYYMMDD-HHMMSS
```

3. Open `snapshots/session-*/PROMPT.md` (and `Reading-Snapshots.md`, `flow.md`, the YAML files).
4. Prompt an LLM with that folder. Ask it to generate:
   - specs under `tests/`
   - page objects under `src/pages/`
   - wire new pages into `src/fixtures/test.ts`

Do not invent locators. Honor `action:` / `assert:` / `data:` notes in `flow.md`. Prefer YAML `by` stability: high. Web-first `expect()`, never `page.waitForTimeout`.

## Secrets

PageSnap may copy `cookies.json` / `storageState.json` into a session folder. They are gitignored here. Never commit them. Never paste cookie files into a prompt.
