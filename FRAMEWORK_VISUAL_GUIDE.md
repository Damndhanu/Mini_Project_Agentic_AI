# 🏗️ OrangeHRM Test Framework - Visual Guide

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    TEST EXECUTION LAYER                      │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         tests/login-scenarios.spec.ts               │   │
│  │  • Scenario 1: Successful Login                      │   │
│  │  • Scenario 2: Failed Login                          │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
                     Uses (Imports)
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   PAGE OBJECT LAYER (POM)                   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              BasePage (Abstract Base)               │    │
│  │  ────────────────────────────────────────────────└──┘    │
│  │  • goto(url)                                        │    │
│  │  • click(selector)                                  │    │
│  │  • fill(selector, value)                            │    │
│  │  • wait, getURL, getText, isVisible                 │    │
│  └─────────────────────────────────────────────────────┘    │
│                           ↑                                  │
│                    extends (inherits)                       │
│         ┌───────────────────┴───────────────────┐            │
│         ↓                                         ↓            │
│  ┌──────────────────┐              ┌────────────────────┐   │
│  │ LoginPage.ts     │              │  DashboardPage.ts  │   │
│  ├──────────────────┤              ├────────────────────┤   │
│  │ • goto()         │              │ • verifyLoaded()   │   │
│  │ • login()        │              │ • verifyMenus()    │   │
│  │ • enterUser()    │              │ • verifyProfile()  │   │
│  │ • enterPass()    │              │ • getTitle()       │   │
│  │ • verifyError()  │              │                    │   │
│  └──────────────────┘              └────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
                     Uses (Imports)
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  SUPPORT & DATA LAYER                        │
│                                                              │
│  ┌────────────────────────┐  ┌─────────────────────────┐   │
│  │  support/hooks.ts      │  │ support/testData.ts     │   │
│  ├────────────────────────┤  ├─────────────────────────┤   │
│  │ • captureScreenshot()  │  │ validUser               │   │
│  │ • captureLogs()        │  │ invalidUser             │   │
│  │ • getPageMetrics()     │  │ baseUrl                 │   │
│  └────────────────────────┘  │ loginUrl                │   │
│                               └─────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    Uses (Playwright)
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              PLAYWRIGHT TEST FRAMEWORK                       │
│                 • Browser Automation                         │
│                 • Page Interaction                           │
│                 • Assertions & Waits                         │
│                 • Reporter (HTML, JSON)                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    Controls (Runs Against)
                            ↓
┌─────────────────────────────────────────────────────────────┐
│        OrangeHRM Application (Live Instance)                 │
│     https://opensource-demo.orangehrmlive.com                │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow: How Tests Execute

```
TEST START
    ↓
[login-scenarios.spec.ts]
    ↓
Test 1: "Scenario 1: Successful Login"
    ↓
    ├─→ Create LoginPage instance
    ├─→ loginPage.goto()
    │   ├─→ Navigate to URL
    │   └─→ Wait for page load
    ├─→ page.fill('username', 'Admin')
    ├─→ page.fill('password', 'admin123')
    ├─→ page.click('submit button')
    ├─→ Verify dashboard URL
    ├─→ Verify dashboard elements
    └─→ ✅ PASS
    ↓
Test 2: "Scenario 2: Failed Login"
    ↓
    ├─→ Create LoginPage instance
    ├─→ loginPage.goto()
    ├─→ page.fill('username', 'InvalidUser')
    ├─→ page.fill('password', 'wrongpassword')
    ├─→ page.click('submit button')
    ├─→ Verify error message
    ├─→ Verify still on login page
    └─→ ✅ PASS
    ↓
TEST END
    ↓
Generate Reports:
├─→ playwright-report/index.html (HTML Report)
├─→ test-results.json (JSON Results)
└─→ cucumber-html-report/ (Cucumber Report)
```

## File Relationships

```
tests/login-scenarios.spec.ts
│
├─ imports ──→ pages/LoginPage.ts
│                  │
│                  ├─ extends ──→ pages/BasePage.ts
│                  │
│                  └─ imports ──→ @playwright/test (Page, expect)
│
├─ imports ──→ support/testData.ts
│
├─ imports ──→ support/hooks.ts
│
└─ imports ──→ @playwright/test (test, expect)

Configuration:
playwright.config.ts
├─ testDir: './tests'
├─ testMatch: '**/*.spec.ts'
├─ baseURL: 'https://opensource-demo.orangehrmlive.com'
├─ reporter: ['html', 'json']
└─ use: { browser, timeout, screenshot, video }
```

## Test Execution Flow

```
USER RUNS: npm run test:ui
        ↓
Playwright reads playwright.config.ts
        ↓
Discovers test files in ./tests/ matching **/*.spec.ts
        ↓
Loads tests/login-scenarios.spec.ts
        ↓
Launches Browser (Chromium)
        ↓
Navigates to BaseURL
        ↓
┌─ TEST 1: Scenario 1 ─┐
│  ✓ Step 1 - Navigate │
│  ✓ Step 2 - Fill     │
│  ✓ Step 3 - Click    │
│  ✓ Step 4 - Verify   │
│  ✓ Step 5 - Assert   │
└──────────────────────┘
        ↓
┌─ TEST 2: Scenario 2 ─┐
│  ✓ Step 1 - Navigate │
│  ✓ Step 2 - Fill     │
│  ✓ Step 3 - Click    │
│  ✓ Step 4 - Verify   │
│  ✓ Step 5 - Assert   │
└──────────────────────┘
        ↓
Close Browser
        ↓
Generate Reports
        ↓
Display Results
```

## Console Output During Test Execution

```
$ npm run test:ui

> orange-hrm-tests@1.0.0 test:ui
> playwright test --ui

Running 2 tests using 1 worker

📍 SCENARIO 1: Successful Login
════════════════════════════════════════

Step 1: Navigate to OrangeHRM login page
✓ Login page is displayed

Step 2: Enter valid credentials
  - Username: Admin
  - Password: admin123
✓ Credentials entered

Step 3: Click Login button
✓ Login button clicked

Step 4: Verify Dashboard is loaded
✓ Dashboard is displayed
✓ Current URL: https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index

Step 5: Verify dashboard elements
✓ Dashboard elements verified

✅ TEST PASSED - Login Successful!

...

📍 SCENARIO 2: Failed Login
════════════════════════════════════════

... output continues ...

✅ TEST PASSED - Invalid Login Handled Correctly!

---

 2 passed (2.5s)
```

## Report Locations

```
After Test Execution:

📊 Reports Generated:

1. HTML Report
   └─ ./playwright-report/index.html
   └─ Open in browser to see detailed results with screenshots

2. JSON Results
   └─ ./test-results.json
   └─ Machine-readable format for CI/CD integration

3. Videos (if enabled)
   └─ ./test-results/
   └─ Video recordings of tests

4. Screenshots (on failure)
   └─ ./test-results/
   └─ Screenshots at failure points
```

## POM Benefits Visualized

```
WITHOUT POM:
┌──────────────────────────────────────────────────────┐
│  test('login', () => {                               │
│    page.goto('url');                                 │
│    page.fill('input[name="username"]', 'Admin');    │
│    page.fill('input[name="password"]', 'admin123'); │
│    page.click('button[type="submit"]');             │
│    expect(page.url()).toContain('dashboard');       │
│  });                                                 │
└──────────────────────────────────────────────────────┘
   ❌ Hard to maintain
   ❌ Selectors scattered
   ❌ Not reusable
   ❌ Brittle tests


WITH POM:
┌──────────────────────────────────────────┐
│  loginPage.login('Admin', 'admin123');   │
│  loginPage.verifyDashboard();            │
└──────────────────────────────────────────┘
   ✅ Easy to maintain
   ✅ Centralized selectors
   ✅ Highly reusable
   ✅ Robust tests
   ✅ Self-documenting
```

---

**Key Takeaway:** The framework follows industry best practices with POM,
centralized test data, and comprehensive reporting for professional test automation!
