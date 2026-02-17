# 🏗️ OrangeHRM Test Framework - POM Architecture

## 📁 Framework Structure

```
mini-projects/
├── pages/                          # Page Object Models
│   ├── BasePage.ts                # Base class with common methods
│   ├── LoginPage.ts               # Login page interactions
│   └── DashboardPage.ts           # Dashboard page interactions
│
├── support/                        # Support utilities
│   ├── hooks.ts                   # Test hooks (screenshots, metrics)
│   └── testData.ts                # Test data and constants
│
├── tests/                          # Test files
│   ├── scenarios.spec.ts          # BDD-style scenarios (MAIN TEST)
│   ├── login.spec.ts              # Original login tests
│   └── orange-hrm-basic-workflow.spec.ts
│
├── scripts/                        # Utility scripts
│   └── generate-cucumber-report.js
│
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Dependencies
└── README.md
```

## 🎯 POM Structure Explanation

### 1. **BasePage.ts** - Foundation Class
- Common methods used across all pages
- Navigation, clicking, filling, visibility checks
- URL retrieval and selector waiting

### 2. **LoginPage.ts** - Login Page Object
- Inherits from BasePage
- Login-specific methods: `login()`, `enterUsername()`, `enterPassword()`
- Verification methods: `verifyDashboardLoaded()`, `verifyErrorMessage()`

### 3. **DashboardPage.ts** - Dashboard Page Object
- Inherits from BasePage
- Dashboard verification methods
- Menu item validation
- User profile visibility checks

## ✨ Test Scenarios

### Scenario 1: ✅ Successful Login
- Navigate to OrangeHRM
- Enter valid credentials (Admin / admin123)
- Click Login
- Verify dashboard loads
- Verify menu items are visible

### Scenario 2: ❌ Failed Login
- Navigate to OrangeHRM
- Enter invalid credentials
- Click Login
- Verify error message appears
- Verify user remains on login page

## 🚀 How to Run

### Run Tests in Terminal
```bash
npm test
```

### Run Tests with UI (Interactive)
```bash
npm run test:ui
```

### Debug Tests
```bash
npm run test:debug
```

### Generate Cucumber Report
```bash
npm run test:report
```

### Open Report
```bash
npm run report:open
```

## 📊 Test Results Location
- **HTML Report**: `./playwright-report/index.html`
- **JSON Results**: `./test-results.json`
- **Screenshots**: `./test-results/screenshots/`
- **Cucumber Report**: `./cucumber-html-report/index.html`

## 🔍 Key Features

✅ **Page Object Model (POM)** - Clean separation of concerns
✅ **BDD-Style Reporting** - Console logs for each step
✅ **Multiple Reporters** - HTML, JSON, and Cucumber
✅ **Screenshot Capture** - On failure
✅ **Network Idle Wait** - Ensures page load completion
✅ **Test Data Centralization** - Easy to maintain credentials
✅ **Reusable Support Functions** - Hooks and utilities

## 📝 Test Data

Located in `support/testData.ts`:
```typescript
validUser: { username: 'Admin', password: 'admin123' }
invalidUser: { username: 'InvalidUser', password: 'wrongpassword' }
```

## 🛠️ Technologies Used

- **Playwright**: Browser automation
- **TypeScript**: Type-safe test code
- **Cucumber HTML Reporter**: Report generation
- **Page Object Model**: Design pattern for maintainability

---

**Ready to run? Execute:** `npm run test:ui`
