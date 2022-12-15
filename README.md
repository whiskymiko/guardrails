# README

This document briefly explains both solutions 

## Cypress 

**Note** Cypress supports following node versions:
- Node.js 14.x
- Node.js 16.x
- Node.js 18.x and above

### Installation

Steps:
1. Clone the project
2. Run 'npm install' in the project directory (if you have not configured cypress before please refer to https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn).

### Run tests
To open the cypress test window: 'npm run cy:open'

To run tests in headless mode: 'npm run cy:run'

Run mode will retry one time if a failure occurs to avoid any network related problems.

### Linter
To test the code with ESLint rules run: 'npm run lint:cypress'

Tested rules:
- semicolons at the end of lines: error (kill me, but I like to enforce it ^^)
- no magic numbers in the code: error
- no empty blocks: error
- no unused variables: error

## Postman