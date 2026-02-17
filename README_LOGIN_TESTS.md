# Orange HRM - Login Test Suite (POM Structure)

## 🎯 Overview
Minimal, maintainable test suite using Page Object Model (POM) pattern for Orange HRM login functionality.

**Tests Included:**
- ✅ TC_LOGIN_001: Valid login with admin credentials
- ✅ TC_LOGIN_002: Invalid password error handling

## 📁 Project Structure

```
├── pages/
│   └── LoginPage.ts              # Page Object Model for login
├── tests/
│   └── login.spec.ts             # Login test scenarios
├── specs/
│   └── LOGIN_TEST_PLAN.md        # Test plan documentation
├── playwright.config.ts          # Test configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
npm test                          # Run all tests
npm run test:ui                   # Run with UI (interactive)
npm run test:debug                # Debug mode
npx playwright test login.spec.ts # Run specific test file
```

### View Results
```bash
npx playwright show-report        # Open HTML report
```

## 🔐 Test Credentials
- **URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- **Username:** Admin
- **Password:** admin123

## 📋 Test Details

### TC_LOGIN_001: Valid Login 
**What it tests:** Successful login with correct credentials

**Steps:**
1. Navigate to login page
2. Enter username: "Admin"
3. Enter password: "admin123"
4. Click Login
5. Verify dashboard loads

**Expected Result:** Dashboard displays, user authenticated

### TC_LOGIN_002: Invalid Password
**What it tests:** Error handling for wrong password

**Steps:**
1. Navigate to login page
2. Enter username: "Admin"
3. Enter password: "wrongpassword"
4. Click Login
5. Verify error message

**Expected Result:** Error message displays, user stays on login page

## 📖 Page Object Model (POM)

**File:** `pages/LoginPage.ts`

Methods available:
- `goto()` - Navigate to login page
- `enterUsername(username)` - Enter username
- `enterPassword(password)` - Enter password
- `clickLogin()` - Click login button
- `login(username, password)` - Complete login flow
- `verifyDashboardLoaded()` - Assert dashboard visible
- `verifyErrorMessage(text)` - Assert error message
- `verifyStillOnLoginPage()` - Assert on login page

## 🧪 Test File

**File:** `tests/login.spec.ts`

Uses POM methods for clean, readable tests. Each test follows AAA pattern:
- **Arrange:** Set up test data
- **Act:** Perform the action
- **Assert:** Verify results

## 🔍 Using Playwright Test Healer Agent

When tests fail, the healer agent will:
1. Detect failing tests
2. Capture page snapshots
3. Analyze error messages
4. Suggest selector updates
5. Auto-fix the issues

To debug manually:
```bash
npm run test:debug
```

Then in the Playwright Inspector:
- Press `Ctrl+Shift+'` to pick page elements
- Step through test execution
- View console logs and network activity

## 🛠️ Commands Reference

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run with UI mode (best for debugging)
npm run test:ui

# Debug specific test
npm run test:debug

# Run specific test file
npx playwright test tests/login.spec.ts

# Run test by name
npx playwright test -g "TC_LOGIN_001"

# Show HTML report
npx playwright show-report

# Run in specific browser
npx playwright test --project chromium
npx playwright test --project firefox
npx playwright test --project webkit
```

## ✅ Expected Test Results

```
Running 2 tests using 1 worker

  ✓ TC_LOGIN_001 - Positive: Valid Login with Admin Credentials
  ✓ TC_LOGIN_002 - Negative: Invalid Password Login Failure

2 passed (5s)
```

## 📊 Test Configuration

**File:** `playwright.config.ts`

- **Timeout:** 30 seconds
- **Retries:** 0 (2 in CI)
- **Workers:** Parallel execution
- **Browsers:** Chromium, Firefox, WebKit
- **Screenshots:** On failure
- **Videos:** On failure

## 🐛 If Tests Fail

1. **"Cannot find element"**
   - UI selectors may have changed
   - Run `npm run test:debug` to inspect live
   - Update selectors in `LoginPage.ts`

2. **"Invalid credentials error"**
   - Verify username: "Admin"
   - Verify password: "admin123"
   - Check if Orange HRM is accessible

3. **"Timeout waiting for dashboard"**
   - Check internet connection
   - Verify Orange HRM site is accessible
   - Increase timeout in `playwright.config.ts`

## 💡 Extending Tests

To add new tests:

1. Add methods to `LoginPage.ts` (e.g., `enterEmail()`)
2. Create new test in `tests/login.spec.ts`
3. Run: `npm test`

Example:
```typescript
test('TC_LOGIN_003 - Empty fields validation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.clickLogin();
  // Add assertions
});
```

## 📞 Resources

- [Playwright Documentation](https://playwright.dev)
- [Page Object Model Guide](https://playwright.dev/docs/pom)
- [Test Best Practices](https://playwright.dev/docs/best-practices)

## 📝 Notes

- POM structure keeps tests clean and maintainable
- Locators centralized in page class
- Easy to update selectors if UI changes
- Ready for use with Playwright Test Healer agent
- Simple, focused test suite (2 scenarios only)

---

**Status:** ✅ Ready to use  
**Version:** 1.0  
**Updated:** Feb 2026
