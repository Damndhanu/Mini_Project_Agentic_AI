import { Page } from '@playwright/test';

export class TestHooks {
  static async captureScreenshot(page: Page, testName: string) {
    const screenshotPath = `./test-results/screenshots/${testName}-${Date.now()}.png`;
    await page.screenshot({ path: screenshotPath });
    return screenshotPath;
  }

  static async captureLogs(page: Page) {
    const logs: string[] = [];
    page.on('console', msg => logs.push(msg.text()));
    return logs;
  }

  static async getPageMetrics(page: Page) {
    return await page.evaluate(() => ({
      title: document.title,
      url: window.location.href,
      pageLoadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
    }));
  }
}
