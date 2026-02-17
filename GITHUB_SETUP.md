# GitHub Repository Setup Guide

Follow these steps to create and push your test automation project to GitHub.

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com/new)
2. **Repository name:** `orangehrm-test-automation`
3. **Description:** Playwright test automation for OrangeHRM login scenarios
4. **Visibility:** Public (or Private if preferred)
5. **Skip:** Don't initialize with README (we have one)
6. Click **Create Repository**

## Step 2: Initialize Local Git Repository

From your project directory, run:

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Playwright POM framework with 2 login scenarios"
```

## Step 3: Connect to GitHub Repository

Replace `YOUR_USERNAME` with your GitHub username:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/orangehrm-test-automation.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Verify on GitHub

1. Go to https://github.com/YOUR_USERNAME/orangehrm-test-automation
2. You should see all your files including:
   - ✅ tests/final.spec.ts
   - ✅ pages/ (POM classes)
   - ✅ support/ (test data & hooks)
   - ✅ README.md
   - ✅ .gitignore
   - ✅ playwright.config.ts
   - ✅ package.json

## Step 5 (Optional): Add GitHub Actions CI/CD

Create `.github/workflows/tests.yml`:

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    
    - name: Run Playwright tests
      run: npm test
    
    - name: Upload test results
      if: always()
      uses: actions/upload-artifact@v3
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

## Useful Git Commands

```bash
# Check status
git status

# See commit history
git log --oneline

# Make changes after initial commit
git add .
git commit -m "Your message"
git push

# Create a new branch for features
git checkout -b feature/new-tests
git push -u origin feature/new-tests
```

## Project Structure (Final)

```
orangehrm-test-automation/
├── tests/
│   └── final.spec.ts
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   └── DashboardPage.ts
├── support/
│   ├── testData.ts
│   └── hooks.ts
├── .github/
│   └── workflows/
│       └── tests.yml (optional)
├── .gitignore
├── README.md
├── playwright.config.ts
├── package.json
└── package-lock.json
```

## Next Steps

1. ✅ Push to GitHub (see Step 3)
2. ✅ Add CI/CD workflow (Step 5 - optional but recommended)
3. ✅ Share the repository link
4. ✅ Collaborate with team members

## Repository URL

Once created, your repository will be at:
```
https://github.com/YOUR_USERNAME/orangehrm-test-automation
```

## Troubleshooting

**Issue:** "Permission denied (publickey)"
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
```

**Issue:** "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/orangehrm-test-automation.git
```

---

**Questions?** Check [GitHub Docs](https://docs.github.com/en/get-started/quickstart/hello-world)
