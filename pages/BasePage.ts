import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Common methods for all pages
  async goto(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async fill(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async isVisible(selector: string) {
    return await this.page.isVisible(selector);
  }

  async getText(selector: string) {
    return await this.page.textContent(selector);
  }

  async getURL() {
    return this.page.url();
  }
}
