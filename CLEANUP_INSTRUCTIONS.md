# 🎯 FINAL INSTRUCTIONS - Cleanup & GitHub Setup

## 📋 STEP 1: DELETE UNWANTED TEST FILES

Keep ONLY: `tests/final.spec.ts`

Delete these files from `tests/` folder:
```
❌ app.spec.ts
❌ index.spec.ts
❌ login-scenarios.spec.ts
❌ login.spec.ts
❌ main-tests.spec.ts
❌ orange-hrm-basic-workflow.spec.ts
❌ orangehrm-bdd-login.spec.ts
❌ orangehrm-login.spec.ts
❌ scenarios.spec.ts
❌ setup-orangehrm.spec.ts
❌ simple.spec.ts
❌ test.spec.ts
```

### Option A: Use Cleanup Script
```bash
# Windows
cleanup.bat

# Mac/Linux
chmod +x cleanup.sh
./cleanup.sh
```

### Option B: Delete Manually
1. Open `f:\\Mini Projects\\tests` folder
2. Select all `.spec.ts` files EXCEPT `final.spec.ts`
3. Press Delete
4. Confirm deletion

### Option C: CMD/Terminal
```bash
# Windows - Command Prompt
cd tests
del app.spec.ts index.spec.ts login-scenarios.spec.ts login.spec.ts...

# Mac/Linux - Terminal
cd tests
rm app.spec.ts index.spec.ts login-scenarios.spec.ts login.spec.ts...
```

---

## ✅ VERIFY CLEANUP

After deletion, your tests folder should contain:
```
tests/
└── final.spec.ts              ✅ ONLY FILE
```

---

## 🧪 STEP 2: TEST LOCALLY

```bash
# Make sure you're in project root
cd f:\Mini Projects

# Install if needed
npm install
npx playwright install

# Run tests
npm run test:ui
```

Expected output:
```
✅ SCENARIO 1: Successful Login      PASSED
✅ SCENARIO 2: Failed Login          PASSED
```

---

## 🐙 STEP 3: SETUP GITHUB

### 3.1 Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: OrangeHRM test automation with POM framework"
```

### 3.2 Create GitHub Repository
1. Go to https://github.com/new
2. **Repository name:** `orangehrm-test-automation`
3. **Visibility:** Public
4. Click **Create Repository**
5. Copy the repository URL

### 3.3 Connect & Push
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/orangehrm-test-automation.git
git branch -M main
git push -u origin main
```

### 3.4 Verify on GitHub
- Go to https://github.com/YOUR_USERNAME/orangehrm-test-automation
- You should see all your files ✅

---

## 📁 FINAL PROJECT STRUCTURE

```
orangehrm-test-automation/
│
├── tests/
│   └── final.spec.ts                    ✅ 2 test scenarios
│
├── pages/                                ✅ POM Structure
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   └── DashboardPage.ts
│
├── support/                              ✅ Utilities
│   ├── testData.ts
│   └── hooks.ts
│
├── .gitignore                            ✅ Git config
├── README.md                             ✅ Documentation
├── GITHUB_SETUP.md                       ✅ GitHub guide
├── SETUP_SUMMARY.md                      ✅ Setup details
├── CLEANUP_INSTRUCTIONS.md               ✅ This file
├── cleanup.bat                           ✅ Cleanup script (Windows)
├── cleanup.sh                            ✅ Cleanup script (Mac/Linux)
├── playwright.config.ts                  ✅ Playwright config
├── package.json                          ✅ Dependencies
└── package-lock.json                     ✅ Lock file
```

---

## 🎯 QUICK CHECKLIST

- [ ] Deleted all extra test files (only final.spec.ts remains)
- [ ] Tests pass locally with `npm run test:ui`
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Verified files on GitHub.com
- [ ] Shared repository link

---

## 🚀 COMMANDS SUMMARY

```bash
# Cleanup (choose one)
cleanup.bat                              # Windows
./cleanup.sh                             # Mac/Linux

# Install & Setup
npm install
npx playwright install

# Test Locally
npm run test:ui                          # Interactive UI
npm test                                 # Headless
npm run test:debug                       # Debug mode

# Git Push
git init
git add .
git commit -m "Your message"
git remote add origin https://github.com/YOUR_USERNAME/repo.git
git branch -M main
git push -u origin main
```

---

## 📊 TEST COVERAGE

### Scenario 1: ✅ Successful Login
- Navigate to OrangeHRM login page
- Enter valid credentials (Admin / admin123)
- Click login
- Verify dashboard loads
- ✅ TEST PASSES

### Scenario 2: ❌ Failed Login
- Navigate to OrangeHRM login page
- Enter invalid credentials
- Click login
- Verify error message shows
- ✅ TEST PASSES

---

## 🔑 Important Files

| File | Purpose |
|------|---------|
| `tests/final.spec.ts` | Your 2 test scenarios |
| `pages/LoginPage.ts` | POM class for login page |
| `support/testData.ts` | Test credentials (Admin/admin123) |
| `.gitignore` | Tell Git which files to ignore |
| `README.md` | GitHub repository documentation |
| `playwright.config.ts` | Playwright configuration |
| `package.json` | Project dependencies |

---

## 🌐 GitHub Repository URL

After pushing, your repository will be at:
```
https://github.com/YOUR_USERNAME/orangehrm-test-automation
```

---

## 📞 TROUBLESHOOTING

### Tests won't run
```bash
npm install
npx playwright install
npm run test:ui
```

### Git push fails
Check you have internet and correct username:
```bash
git remote -v              # Check remote URL
git config --list         # Check git config
```

### .spec.ts files still showing
Run cleanup script again or delete manually from tests folder.

### Port already in use
Close all browsers and restart terminal.

---

## ✨ YOU'RE READY!

✅ Clean project structure
✅ Only 1 test file with 2 scenarios
✅ POM architecture implemented
✅ TypeScript support
✅ .gitignore configured
✅ Professional README
✅ GitHub deployment ready

---

## 🎓 NEXT STEPS

1. **Run Cleanup** - Delete extra test files
2. **Test Locally** - Verify tests pass
3. **Create GitHub Repo** - Set up repository
4. **Push Code** - Upload to GitHub
5. **Share Link** - Show your work!

---

## 📝 COMMANDS TO RUN NOW

```bash
# 1. Cleanup
cleanup.bat                    # Windows
./cleanup.sh                   # Mac/Linux

# 2. Install
npm install
npx playwright install

# 3. Test
npm run test:ui

# 4. Initialize Git
git init
git add .
git commit -m "Initial: OrangeHRM test automation"

# 5. Push to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/orangehrm-test-automation.git
git branch -M main
git push -u origin main
```

---

**Ready to go? Start with Step 1: Delete unwanted test files!** 🚀
