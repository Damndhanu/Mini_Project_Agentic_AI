import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  private dashboardTitle = 'h6, span[class*="title"]';
  private menuItems = '.oxd-navbar-item';
  private userProfile = '[class*="profile"]';

  constructor(page: Page) {
    super(page);
  }

  async verifyDashboardLoaded() {
    await expect(this.page).toHaveURL(/.*dashboard/);
    await this.page.waitForSelector(this.dashboardTitle);
  }

  async verifyMenuItemsVisible() {
    const menuCount = await this.page.locator(this.menuItems).count();
    expect(menuCount).toBeGreaterThan(0);
  }

  async verifyUserProfileVisible() {
    await expect(this.page.locator(this.userProfile)).toBeVisible();
  }

  async getDashboardTitle() {
    return await this.getText(this.dashboardTitle);
  }
}
