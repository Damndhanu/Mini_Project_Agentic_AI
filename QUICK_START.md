# Orange HRM Login Tests - Quick Start

## 🎯 What You Have

**Simple POM-based login test suite with 2 scenarios:**
- ✅ TC_LOGIN_001: Valid login (positive scenario)
- ✅ TC_LOGIN_002: Invalid password (negative/failure scenario)

## 📂 Files Structure

```
pages/
  └── LoginPage.ts          # Page Object Model - handles all login interactions
tests/
  └── login.spec.ts         # Test file - uses LoginPage methods
specs/
  └── LOGIN_TEST_PLAN.md    # Test plan documentation
```

## ⚡ Run Tests

```bash
# Run all login tests
npm test

# Run with interactive UI
npm run test:ui

# Debug the tests
npm run test:debug

# View the test report
npx playwright show-report
```

## 🔐 Login Credentials
- **Username:** Admin
- **Password:** admin123

## 📋 What Each Test Does

### Test 1: Valid Login (Positive)
1. Go to login page
2. Enter: Admin / admin123
3. Click Login
4. ✅ Dashboard should load

### Test 2: Invalid Password (Negative/Failure)
1. Go to login page
2. Enter: Admin / wrongpassword
3. Click Login
4. ✅ Error message should appear
5. ✅ Stay on login page

## 🤖 Using Test Healer Agent

If tests fail:
1. Run: `npm run test:debug`
2. Healer agent will detect failures
3. It will auto-fix selector issues
4. Tests will pass

## 🛠️ Update Locators

If selectors change in the UI:

1. Open `pages/LoginPage.ts`
2. Update the selectors in:
   ```typescript
   private usernameField = 'input[name="username"]';
   private passwordField = 'input[name="password"]';
   private loginButton = 'button[type="submit"]';
   private errorMessage = '.oxd-alert-content, [role="alert"]';
   ```
3. Run tests again: `npm test`

## ✅ Expected Result

```
Running 2 tests

  ✓ TC_LOGIN_001 - Positive: Valid Login with Admin Credentials
  ✓ TC_LOGIN_002 - Negative: Invalid Password Login Failure

2 passed (5s)
```

## 📖 POM Structure Explanation

**LoginPage.ts** contains:
- **Locators** - CSS selectors for page elements
- **Methods** - Actions (type, click, navigate)
- **Assertions** - Verifications (error message, page loaded)

**login.spec.ts** uses these methods:
- Clean, readable test code
- Easy to maintain
- No duplicate selectors
- Simple to extend

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Tests timeout | Check internet, verify site is accessible |
| Selector not found | Run `npm run test:debug`, use inspector |
| Wrong credentials error | Verify: Username = "Admin", Password = "admin123" |
| HTML report won't open | Run: `npx playwright show-report` |

---

**Ready to run!** → `npm test`
