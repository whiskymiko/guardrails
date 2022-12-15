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
2. Run `npm install` in the project directory (if you have not configured cypress before please refer to https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn).

### Run tests
To open the cypress test window: `npm run cy:open`

To run tests in headless mode: `npm run cy:run`

Run mode will retry one time if a failure occurs to avoid any network related problems.

### Linter
To test the code with ESLint rules run: `npm run lint:cypress`

Tested rules:
- semicolons at the end of lines: error (kill me, but I like to enforce it ^^)
- no magic numbers in the code: error
- no empty blocks: error
- no unused variables: error

### Structure
Test Scenarios are located in grails.cy.js file:
1. Checkout flows
- **Able to check out with one item in the basket** - Login with your user, add 1 item to the basket, click on checkout, add a new address, fill in the address form, click on submit.
- **Able to check out with two items in the basket** - Exact same flow, but this time, add two items to your basket, click on checkout, add a new address, fill in the address form, click on submit.
2. Search flows
- **Able to search for Apple products** - Click on the search button, search for apple, verify that 2 apple products show up and that banana product doesn't show up



## Postman