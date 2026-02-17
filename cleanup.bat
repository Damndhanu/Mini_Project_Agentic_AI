@echo off
REM Cleanup script for Windows - removes all extra test files
REM Keeps only final.spec.ts

echo.
echo Cleaning up test files...
echo.

REM Delete all test files except final.spec.ts
cd tests
del app.spec.ts 2>nul
del index.spec.ts 2>nul
del login-scenarios.spec.ts 2>nul
del login.spec.ts 2>nul
del main-tests.spec.ts 2>nul
del orange-hrm-basic-workflow.spec.ts 2>nul
del orangehrm-bdd-login.spec.ts 2>nul
del orangehrm-login.spec.ts 2>nul
del scenarios.spec.ts 2>nul
del setup-orangehrm.spec.ts 2>nul
del simple.spec.ts 2>nul
del test.spec.ts 2>nul
cd ..

echo Test files cleaned!
echo.
echo Remaining test file: tests/final.spec.ts
echo.
pause
