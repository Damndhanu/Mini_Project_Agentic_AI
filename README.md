# OrangeHRM Test Automation

A minimal, production-ready Playwright test automation framework for OrangeHRM using Page Object Model (POM).

## 🎯 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Install browsers
npx playwright install

# 3. Run tests with UI
npm run test:ui
```

## 📊 Test Scenarios

**Scenario 1: ✅ Successful Login**
- Login with valid credentials (Admin / admin123)
- Verify dashboard loads

**Scenario 2: ❌ Failed Login**
- Login with invalid credentials
- Verify error message displays

## 🏗️ Project Structure

```
├── tests/
│   └── final.spec.ts           # 2 test scenarios
├── pages/
│   ├── BasePage.ts             # Base page object
│   ├── LoginPage.ts            # Login page object
│   └── DashboardPage.ts        # Dashboard page object
├── support/
│   ├── testData.ts             # Test credentials
│   └── hooks.ts                # Helpers
└── playwright.config.ts        # Configuration
```

## 📋 Commands

```bash
npm run test:ui         # Interactive UI mode
npm test                # Headless mode
npm run test:debug      # Debug mode
```

## 🛠️ Tech Stack

- **Playwright** v1.58.2
- **TypeScript**
- **Node.js** 18+
- **Chromium** browser

## 🔑 Test Credentials

| Type | Username | Password |
|------|----------|----------|
| Valid | Admin | admin123 |
| Invalid | InvalidUser | wrongpassword |

## 📊 Reports

After running tests:
- `playwright-report/index.html` - HTML Report
- `test-results.json` - JSON Results

## 📚 Learn More

- [Playwright Docs](https://playwright.dev/)
- [POM Best Practices](https://playwright.dev/docs/pom)

## 📄 License

MIT

---

**Ready?** Run `npm run test:ui` to get started! 🚀
```bash
npm run test:debug
```

**Run specific test:**
```bash
npx playwright test -g "1.1 Valid Login"
```

**Run tests in specific browser:**
```bash
npx playwright test --project chromium
```

## 📁 Project Structure

```
├── tests/
│   └── orange-hrm-basic-workflow.spec.ts    # Main test suite
├── specs/
│   ├── README.md                             # Specs directory info
│   └── ORANGE_HRM_TEST_PLAN.md              # Detailed test plan
├── playwright.config.ts                      # Playwright configuration
├── package.json                              # Dependencies
└── seed.spec.ts                              # Seed/template test
```

## 📝 Test Plan

The comprehensive test plan is documented in [ORANGE_HRM_TEST_PLAN.md](specs/ORANGE_HRM_TEST_PLAN.md) and includes:

### 1. Authentication Tests
- Valid login with admin credentials
- Invalid password handling
- Empty field validation
- Non-existent user handling
- Session logout

### 2. Dashboard & Navigation
- Dashboard access verification
- Sidebar menu navigation
- Page responsiveness

### 3. Employee Management (PIM)
- View employee list
- Search employees
- View employee details
- Employee data validation

### 4. Leave Management
- View leave requests
- Leave request application
- Leave approval/rejection

### 5. Admin Functions
- User management
- Role-based access control
- System configuration

### 6. Data Validation
- Mandatory field validation
- Data format validation
- Duplicate prevention

### 7. Performance
- Page load times
- Responsive design
- Form submission feedback

## 🔐 Test Environment

**URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

**Default Test Credentials:**
- Username: `Admin`
- Password: `admin123`

## 📊 Test Execution Phases

### Phase 1: Critical Tests (Authentication & Access)
- Ensures user can access the system
- Validates security controls
- Tests logout functionality

### Phase 2: Core Functionality (High Priority)
- Employee management
- Leave management
- Dashboard navigation

### Phase 3: Advanced Features (Medium Priority)
- Reporting
- Admin functions
- System configuration

### Phase 4: Non-Functional (Lower Priority)
- Performance testing
- UI/UX validation
- Data persistence

## 🛠️ Test Execution Commands

```bash
# Run all tests
npm test

# Run with UI
npm run test:ui

# Run with debugging
npm run test:debug

# Run specific test file
npx playwright test tests/orange-hrm-basic-workflow.spec.ts

# Run specific test by name
npx playwright test -g "Valid Login"

# Run in specific browser
npx playwright test --project chromium
npx playwright test --project firefox
npx playwright test --project webkit

# Run with specific reporter
npx playwright test --reporter=html

# Run tests in watch mode
npx playwright test --watch

# Generate trace for debugging
npx playwright test --trace on
```

## 📈 Test Reports

After running tests, reports are generated:

- **HTML Report:** `playwright-report/index.html`
  - Open in browser: `npx playwright show-report`

- **JSON Report:** `test-results.json`
  - Machine-readable test results

- **JUnit Report:** `junit.xml`
  - CI/CD integration compatible

## 🔍 Debugging Tests

### View test traces:
```bash
npx playwright show-trace trace.zip
```

### Debug specific test:
```bash
npx playwright test --debug tests/orange-hrm-basic-workflow.spec.ts
```

### Inspect selectors:
Press Ctrl+Shift+` in Playwright Inspector to pick elements from the page

## 🌐 Supported Browsers

Tests run on:
- ✅ Chromium
- ✅ Firefox  
- ✅ WebKit (Safari)

## ✅ Test Coverage

| Module | Tests | Status |
|--------|-------|--------|
| Authentication | 5 | ✅ Implemented |
| Dashboard & Navigation | 4 | ✅ Implemented |
| Employee Management | 3 | ✅ Implemented |
| Leave Management | 1 | ✅ Implemented |
| Data Validation | 2 | ✅ Implemented |
| Performance | 3 | ✅ Implemented |
| Data Persistence | 1 | ✅ Implemented |
| **Total** | **19** | **✅** |

## 🐛 Common Issues & Solutions

### Issue: Tests fail with "Cannot find element"
**Solution:** 
- The UI selectors may have changed
- Use `npx playwright test --debug` to inspect the current UI
- Update selectors in the test file accordingly

### Issue: Network timeout errors
**Solution:**
- Increase timeout values in `playwright.config.ts`
- Check internet connection
- Verify Orange HRM site is accessible

### Issue: Session expires during tests
**Solution:**
- Add delays between tests
- Re-authenticate in `test.beforeEach()` hook
- Reduce test execution time

### Issue: Duplicate test data
**Solution:**
- Clean up test data between runs
- Use unique identifiers (timestamp, random ID)
- Implement database reset in seed tests

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [Orange HRM Official Site](https://www.orangehrm.com/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Test Selectors Guide](https://playwright.dev/docs/locators)

## 🔄 Continuous Integration

To run tests in CI/CD pipeline, add this to your GitHub Actions:

```yaml
- name: Install dependencies
  run: npm install

- name: Run Playwright tests
  run: npm test

- name: Upload test report
  uses: actions/upload-artifact@v3
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
    retention-days: 30
```

## 📝 Adding New Tests

1. Open `tests/orange-hrm-basic-workflow.spec.ts`
2. Add a new `test()` block in the appropriate `test.describe()` section
3. Follow the naming convention: `TEST_NUMBER. Test Description`
4. Run: `npm test -g "your new test"`

## 🤝 Contributing

When adding new tests:
- Follow existing code patterns
- Use meaningful test names
- Add proper error assertions
- Include comments for complex logic
- Test both success and failure paths
- Ensure tests are independent and can run in any order

## ⚙️ Configuration

### Timeouts
- Default: 30 seconds
- Navigation: 30 seconds
- Action: 10 seconds

Modify in `test.setTimeout()` or `playwright.config.ts`

### Parallalization
- `fullyParallel: true` enables parallel test execution
- `workers: undefined` uses default number of workers
- Adjust `workers` value to control concurrency

### Screenshots & Videos
- Screenshots: `only-on-failure`
- Videos: `retain-on-failure`
- Traces: `on-first-retry`

## 📞 Support

For issues or questions:
1. Check test logs: `npm run test:debug`
2. Review test plan: [ORANGE_HRM_TEST_PLAN.md](specs/ORANGE_HRM_TEST_PLAN.md)
3. Check Playwright docs: https://playwright.dev

## 📄 License

This test suite is for educational and automation purposes.

---

**Last Updated:** February 2026
**Playwright Version:** 1.58.2+
**Test Status:** Ready for execution
