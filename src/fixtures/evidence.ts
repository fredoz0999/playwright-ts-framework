import fs from "node:fs";
import type { Page, TestInfo } from "@playwright/test";

/**
 * Evidence helpers used by the fixtures in ./test.
 *
 * - On failure: attach a text snapshot of the page (test ids + ARIA tree). It tells a person, or an
 *   AI assistant, whether a locator simply stopped matching or the element is really gone.
 * - With STEP_SHOTS=1: attach a screenshot when each test.step() completes.
 */

/** Small enough to paste into a prompt: at most 150 test ids, plus the ARIA tree. */
export async function attachPageSnapshot(page: Page, testInfo: TestInfo): Promise<void> {
  try {
    const attr = testInfo.project.use.testIdAttribute ?? "data-testid";
    const ids = await page.evaluate<string[]>(
      `Array.from(document.querySelectorAll('[${attr}]')).slice(0, 150).map((e) =>
         e.getAttribute('${attr}') + ' <' + e.tagName.toLowerCase() + '> ' +
         (e.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 40))`,
    );
    const aria = await page.locator("body").ariaSnapshot({ timeout: 3_000 });
    const file = testInfo.outputPath("page-snapshot.txt");
    fs.writeFileSync(file, `URL: ${page.url()}\n\n# ${attr} values\n${ids.join("\n")}\n\n# ARIA tree\n${aria}\n`);
    await testInfo.attach("page-snapshot", { path: file, contentType: "text/plain" });
  } catch {
    // The page is closed or mid-navigation: no snapshot.
  }
}

export const stepShotsEnabled = process.env.STEP_SHOTS === "1";

/** Wraps test.step so each completed step attaches a screenshot. `pageFor` maps the running test to its page. */
export function withStepScreenshots<T extends { step: unknown; info(): TestInfo }>(
  test: T,
  pageFor: (info: TestInfo) => Page | undefined,
): void {
  const baseStep = test.step as any;
  const counters = new WeakMap<TestInfo, number>();
  const wrapped: any = (title: string, body: (...args: unknown[]) => unknown, options?: unknown) =>
    baseStep.call(
      test,
      title,
      async (...args: unknown[]) => {
        const result = await body(...args);
        const info = test.info();
        const page = pageFor(info);
        if (page) {
          const n = (counters.get(info) ?? 0) + 1;
          counters.set(info, n);
          const file = info.outputPath(`step-${String(n).padStart(2, "0")}.png`);
          try {
            await page.screenshot({ path: file });
            await info.attach(`step ${n}: ${title}`, { path: file, contentType: "image/png" });
          } catch {
            // No screenshot for this step.
          }
        }
        return result;
      },
      options,
    );
  wrapped.skip = baseStep.skip;
  (test as any).step = wrapped;
}
