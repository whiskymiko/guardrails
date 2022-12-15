require('../support/commands');

// Selectors
const itemsInBasket = 'span.warn-notification';
const itemName = 'div.item-name';

// Test Data
const loginEmail = 'aaa@aa.aa';
const loginPassword = 'aaaaa';
const firstItem = ' Apple Juice (1000ml) ';
const secondItem = ' Banana Juice (1000ml) ';
const searchItem = 'Apple';

describe('Checkout flows', () => {
  beforeEach(() => {
    // Recommended: Reset and seed the database before each test
    // cy.exec('npm run db:reset && npm run db:seed')

    // Visit the login page
    cy.visit('/login');

    // Close the welcome message on the main page
    cy.closeWelcomePopup();

    // Log in using the specified username and password
    cy.login(loginEmail, loginPassword);

    // Make sure there are no items in the basket
    cy.cleanBasket();
  });

  it('Able to check out with one item in the basket', () => {
    // Add an item to the basket
    cy.addItemToBasket(firstItem);

    // Check if there is one item in the basket
    cy.get(itemsInBasket).should('have.text', '1');

    // Go to the checkout page
    cy.checkOut();

    // Add new address and save it
    cy.addNewAddress();
  });

  it('Able to check out with two items in the basket', () => {
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
  it('Able to search for Apple products', () => {
    // Visit the landing page
    cy.visit('/');

    // Close the Welcome Popup
    cy.closeWelcomePopup();

    // Search for an Apple product
    cy.searchForItem(searchItem);

    // Validate there are two Apple products, and no Bananas
    cy.get(itemName).should('have.length', '2')
        .and('contain', searchItem).and('not.contain', 'Banana');
  });
});