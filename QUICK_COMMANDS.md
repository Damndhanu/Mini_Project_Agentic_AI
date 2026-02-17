# ⚡ Quick Command Reference

## 🚀 Essential Commands

### Run Tests with UI Display (BEST FOR WATCHING)
```bash
npm run test:ui
```
✨ **Best Option:** Interactive UI shows browser running tests in real-time

---

### Run All Tests (Headless)
```bash
npm test
```
⚡ Fast execution, no UI, results in terminal

---

### Debug Tests (Step-by-Step)
```bash
npm run test:debug
```
🔍 Stop at breakpoints, inspect state

---

### Run Specific Test File
```bash
npx playwright test tests/login-scenarios.spec.ts
```

---

### Run Specific Test Scenario
```bash
npx playwright test -g "Successful Login"
```

---

## 📊 Report Viewing

### View HTML Report
```bash
npm run report:open
```
📈 Opens the detailed HTML report in your browser

### Generate Cucumber Report
```bash
npm run test:report
```

---

## 🛠️ Setup & Installation

### Install Dependencies
```bash
npm install
```

### Install Playwright Browsers
```bash
npx playwright install
```

### Install Only Chromium
```bash
npx playwright install chromium
```

---

## 🔧 Troubleshooting Commands

### Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

### Update Playwright
```bash
npm install @playwright/test@latest
npx playwright install
```

### Check Playwright Version
```bash
npx playwright --version
```

### List All Tests
```bash
npx playwright test --list
```

### Run Tests with Verbose Output
```bash
npx playwright test --reporter=list
```

---

## 📁 Project File Structure

```
tests/
├── login-scenarios.spec.ts      ← MAIN TEST FILE (2 scenarios)
├── login.spec.ts               ← Original tests
└── orange-hrm-basic-workflow.spec.ts

pages/
├── BasePage.ts                 ← Base class
├── LoginPage.ts                ← Login POM
└── DashboardPage.ts            ← Dashboard POM

support/
├── testData.ts                 ← Test data & credentials
└── hooks.ts                    ← Helper functions

scripts/
└── generate-cucumber-report.js
```

---

## 📊 Report Files After Running Tests

```
playwright-report/
└── index.html              ← 📊 Main HTML Report

test-results.json          ← 📄 JSON Results

test-results/
├── screenshots/
└── videos/
```

---

## 🎯 Typical Workflow

```bash
# 1. Install dependencies
npm install

# 2. Install browsers
npx playwright install

# 3. Run tests in UI mode
npm run test:ui

# 4. Watch tests execute live in browser
# (Browser window opens automatically)

# 5. After tests complete, view report
npm run report:open
```

---

## 🔍 Test Output Parsing

When you run tests, you'll see:

```
Platform: win32-x64
Node: v18.x.x
Playwright: 1.58.2
Status: ✓

2 tests passed
Execution time: ~30-45 seconds
```

---

## 📝 Console Output Sample

```
🔐 Running: Scenario 1: Successful Login
  ✓ Navigate to login page
  ✓ Enter credentials
  ✓ Click login
  ✓ Verify dashboard
  ✓ Verify elements
  ✅ PASSED

🔐 Running: Scenario 2: Failed Login  
  ✓ Navigate to login page
  ✓ Enter invalid credentials
  ✓ Click login
  ✓ Verify error message
  ✓ Verify login page
  ✅ PASSED
```

---

## 🆘 Common Issues & Solutions

### Issue: "Browsers not found"
```bash
npx playwright install
```

### Issue: "test() called in config"
```bash
npm install
npx playwright install
```

### Issue: "Timeout"
```bash
# Increase timeout in playwright.config.ts
timeout: 60 * 1000  // Increase to 60 seconds
```

### Issue: "Element not found"
```bash
npm run test:debug  // Step through and inspect
```

---

## 🎬 Running Tests with Different Options

### Run with Screenshots on Failure
```bash
npx playwright test --screenshot=only-on-failure
```

### Run with Video Recording
```bash
npx playwright test --video=retain-on-failure
```

### Run with Trace (for debugging)
```bash
npx playwright test --trace=on-first-retry
```

### Run with Full Browser Visibility
```bash
npx playwright test --headed
```

---

## 📈 Performance Metrics

**Expected Test Execution Times:**
- Scenario 1 (Successful Login): ~10-15 seconds
- Scenario 2 (Failed Login): ~8-12 seconds
- **Total: ~20-30 seconds**

---

## 🎓 Learning Resources

- **Playwright Docs:** https://playwright.dev/
- **POM Guide:** https://playwright.dev/docs/pom
- **Best Practices:** https://playwright.dev/docs/best-practices

---

## ✨ Next Steps

1. ✅ Run: `npm run test:ui`
2. 👀 Watch both scenarios execute
3. 📊 View the generated reports
4. 🎉 Celebrate your first successful test run!

---

**Pro Tip:** Use `npm run test:ui` to watch tests in a browser window!
Provides the best visual feedback while learning and debugging.
