import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  
  // Locators
  private usernameField = 'input[name="username"]';
  private passwordField = 'input[name="password"]';
  private loginButton = 'button[type="submit"]';
  private errorMessage = '.oxd-alert-content, [role="alert"]';
  private dashboardTitle = 'h6, h1';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to Orange HRM login page
   */
  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Enter username in the username field
   */
  async enterUsername(username: string) {
    await this.page.fill(this.usernameField, username);
  }

  /**
   * Enter password in the password field
   */
  async enterPassword(password: string) {
    await this.page.fill(this.passwordField, password);
  }

  /**
   * Click the login button
   */
  async clickLogin() {
    await this.page.click(this.loginButton);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Perform login with given credentials
   */
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  /**
   * Verify user is logged in (dashboard is visible)
   */
  async verifyDashboardLoaded() {
    await expect(this.page).toHaveURL(/.*dashboard/);
    await expect(this.page.locator(this.dashboardTitle)).toBeVisible();
  }

  /**
   * Verify error message is displayed
   */
  async verifyErrorMessage(expectedText: string | RegExp) {
    const errorElement = this.page.locator(this.errorMessage);
    await expect(errorElement).toBeVisible();
    await expect(errorElement).toContainText(expectedText);
  }

  /**
   * Verify user is still on login page
   */
  async verifyStillOnLoginPage() {
    await expect(this.page).toHaveURL(/.*auth\/login/);
    await expect(this.page.locator(this.usernameField)).toBeVisible();
  }
}
