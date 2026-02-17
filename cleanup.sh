#!/bin/bash

# Cleanup script for Linux/Mac - removes all extra test files
# Keeps only final.spec.ts

echo ""
echo "Cleaning up test files..."
echo ""

# Delete all test files except final.spec.ts
cd tests
rm -f app.spec.ts
rm -f index.spec.ts
rm -f login-scenarios.spec.ts
rm -f login.spec.ts
rm -f main-tests.spec.ts
rm -f orange-hrm-basic-workflow.spec.ts
rm -f orangehrm-bdd-login.spec.ts
rm -f orangehrm-login.spec.ts
rm -f scenarios.spec.ts
rm -f setup-orangehrm.spec.ts
rm -f simple.spec.ts
rm -f test.spec.ts
cd ..

echo "✅ Test files cleaned!"
echo ""
echo "📁 Remaining test file: tests/final.spec.ts"
echo ""
