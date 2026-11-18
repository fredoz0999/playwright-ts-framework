import { defineConfig } from '@playwright/test';

/**
 * Local: channel 'chrome' uses the Google Chrome already on the machine
 * (no `npx playwright install` required).
 * CI: GitHub Actions sets CI=true, so channel is unset and tests use the
 * Chromium installed by `npx playwright install --with-deps chromium`.
 */
export default defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // The JSON report is what `qa triage` / `qa heal` (qa-agent lite) and other tools read.
  reporter: [['html'], ['list'], ['json', { outputFile: 'test-results/report.json' }]],
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    testIdAttribute: "data-test",
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    channel: process.env.CI ? undefined : 'chrome',
  },
});
