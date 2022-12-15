require('../support/commands')

// Selectors
const itemsInBasket = 'span.warn-notification';

// Test Data
const loginEmail = 'aaa@aa.aa';
const loginPassword = 'aaaaa';
const firstItem = ' Apple Juice (1000ml) ';
const secondItem = ' Banana Juice (1000ml) ';

describe('Checkout flows', () => {
  beforeEach(() => {
    // Recommended: Reset and seed the database before each test
    // Why? A failure may leave items in the basket
    // cy.exec('npm run db:reset && npm run db:seed')

    // Close the welcome message on the main page
    cy.closeWelcomePopup();

    // Log in using the specified username and password
    cy.login(loginEmail, loginPassword);

    // Make sure there are no items in the basket
    cy.cleanBasket();
  })

  it('Able to checkout with one item in the basket', () => {
    // Add an item to the basket
    cy.addItemToBasket(firstItem);

    // Check if there is one item in the basket
    cy.get(itemsInBasket).should('have.text', '1');

    // Go to the checkout page
    cy.checkOut();

    // Add new address and save it
    cy.addNewAddress();
  });

  it('Able to checkout with two items in the basket', () => {
    // Add an item to the basket
    cy.addItemToBasket(firstItem);

    // Check if there is one item in the basket
    cy.get(itemsInBasket).should('have.text', '1');

    // Add another item to the basket
    cy.addItemToBasket(secondItem);

    // Check if there are two items in the basket
    cy.get(itemsInBasket).should('have.text', '2');

    // Go to the checkout page
    cy.checkOut();

    // Add new address and save it
    cy.addNewAddress();
  });
});

describe('Search flows', () => {
  it('Able to checkout with two items in the basket', () => {

  });
});