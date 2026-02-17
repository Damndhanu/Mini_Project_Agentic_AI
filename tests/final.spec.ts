import { test, expect } from '@playwright/test';

test('Scenario 1: Successful Login', async ({ page }) => {
  console.log('\n✅ SCENARIO 1: Successful Login\n');
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForLoadState('networkidle');
  console.log('✓ Step 1: Login page loaded');
  
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  console.log('✓ Step 2: Credentials entered');
  
  await page.click('button[type="submit"]');
  await page.waitForLoadState('networkidle');
  console.log('✓ Step 3: Login clicked');
  
  await expect(page).toHaveURL(/.*dashboard/);
  console.log('✓ Step 4: Dashboard URL verified');
  
  await page.waitForSelector('.oxd-navbar, h1, h6', { timeout: 10000 });
  console.log('✓ Step 5: Dashboard elements loaded');
  
  console.log('\n✅ TEST 1 PASSED!\n');
});

test('Scenario 2: Failed Login with Invalid Credentials', async ({ page }) => {
  console.log('\n❌ SCENARIO 2: Failed Login\n');
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForLoadState('networkidle');
  console.log('✓ Step 1: Login page loaded');
  
  await page.fill('input[name="username"]', 'InvalidUser');
  await page.fill('input[name="password"]', 'wrongpassword');
  console.log('✓ Step 2: Invalid credentials entered');
  
  await page.click('button[type="submit"]');
  await page.waitForLoadState('networkidle');
  console.log('✓ Step 3: Login clicked');
  
  await expect(page.locator('[role="alert"]')).toBeVisible({ timeout: 10000 });
  console.log('✓ Step 4: Error message displayed');
  
  await expect(page).toHaveURL(/.*auth\/login/);
  console.log('✓ Step 5: Still on login page');
  
  console.log('\n✅ TEST 2 PASSED!\n');
});
