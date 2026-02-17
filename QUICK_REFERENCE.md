# Orange HRM Testing - Quick Reference Guide

## 📌 Commands at a Glance

### Setup
```bash
npm install                    # Install dependencies one time
```

### Run Tests
```bash
npm test                       # Run all tests
npm test -- --ui              # Run with interactive UI
npm test -- --debug           # Debug mode with inspector
npm test -g "Login"            # Run tests matching "Login"
npm test -- --project=chromium # Run in Chromium only
```

### View Results
```bash
npx playwright show-report     # Open HTML report
npm test -- --reporter=list    # Show test list
npm test -- --reporter=verbose # Detailed output
```

## 🎯 Test Scenarios Overview

### Category 1: Authentication (5 tests)
- ✅ Valid admin login
- ✅ Wrong password error
- ✅ Empty fields validation
- ✅ Non-existent user
- ✅ Logout functionality

### Category 2: Dashboard (4 tests)
- ✅ Dashboard loads
- ✅ Admin menu navigation
- ✅ PIM menu navigation
- ✅ Leave menu navigation

### Category 3: Employees (3 tests)
- ✅ View employee list
- ✅ Search employee
- ✅ View employee details

### Category 4: Leave (1 test)
- ✅ View leave requests

### Category 5: Validation (2 tests)
- ✅ Login field validation
- ✅ Email format validation

### Category 6: Performance (3 tests)
- ✅ Login page load time
- ✅ Dashboard load time
- ✅ Responsive layout

### Category 7: Persistence (1 test)
- ✅ Data survives reload

**Total: 19 tests**

## 🔑 Default Credentials
- **URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- **Username:** Admin
- **Password:** admin123

## 📊 Expected Results

All tests should pass with:
- ✅ 19 passed
- ❌ 0 failed
- ⏭️ 0 skipped

## 🐛 If Tests Fail

1. **Check internet connection**
   - Verify Orange HRM site is accessible
   
2. **Update selectors**
   - Run: `npm test -- --debug`
   - Inspect changed elements
   - Update selectors in test file

3. **Check credentials**
   - Verify Username: Admin
   - Verify Password: admin123

4. **Review logs**
   - Check `playwright-report/` folder
   - View captured screenshots/videos
   - Check console output

## 📁 Key Files

| File | Purpose |
|------|---------|
| `tests/orange-hrm-basic-workflow.spec.ts` | Main test suite |
| `specs/ORANGE_HRM_TEST_PLAN.md` | Detailed test plan |
| `playwright.config.ts` | Test configuration |
| `package.json` | Dependencies & scripts |
| `README.md` | Full documentation |

## ⚡ Quick Test Runs

```bash
# Just authentication tests
npm test -g "Authentication"

# Just employee tests
npm test -g "Employee Management"

# Quick smoke test (disable retries)
npm test -- --retries=0

# Parallel execution (faster)
npm test -- --workers=4

# Sequential execution (safer)
npm test -- --workers=1
```

## 🎬 Interactive Mode (Recommended)

Best for debugging:
```bash
npm run test:ui
```

- Opens visual editor
- Shows live test execution
- Can inspect elements in real-time
- Can run individual tests

## 💾 Test Artifacts

After running tests:
- `playwright-report/` - HTML test report
- `test-results.json` - Machine-readable results
- `junit.xml` - CI/CD compatible format
- `trace.zip` - Detailed execution traces
- Screenshots - On test failure
- Videos - On test failure

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot find element" | Run with `--debug` to inspect UI |
| Timeout errors | Increase in config or check network |
| Login fails | Verify credentials are correct |
| Tests are slow | Reduce workers or remove trace |
| Parallel failures | Run with `--workers=1` |

## 📚 Test Documentation

Detailed test plan with expected results:
→ See `specs/ORANGE_HRM_TEST_PLAN.md`

Implementation details & patterns:
→ See `tests/orange-hrm-basic-workflow.spec.ts`

Full setup guide:
→ See `README.md`

## 🚀 Next Steps

1. **Install:** `npm install`
2. **Run:** `npm test`
3. **View:** `npx playwright show-report`
4. **Debug:** `npm run test:debug`
5. **Customize:** Edit tests as needed

## 📞 Help

- Playwright Docs: https://playwright.dev
- Inspector: Run `npm run test:debug`
- Logs: Check `playwright-report/` folder

---

**Version:** 1.0 | **Updated:** Feb 2026 | **Status:** Ready ✅
