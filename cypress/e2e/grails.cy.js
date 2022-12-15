// Selectors
const itemsInBasket = 'span.warn-notification';
const itemName = 'div.item-name';

// Test Data
// it could be managed by fixtures, but it's my personal preference to keep test data in the code
// Unless we have loads of them
const loginEmail = 'aaa@aa.aa';
const loginPassword = 'aaaaa';
const firstItem = ' Apple Juice (1000ml) ';
const secondItem = ' Banana Juice (1000ml) ';
const searchItem = 'Apple';
const country = 'Thailand';
const name = 'Johnny Cage';
const phone = '0101011001';
const address = 'Sukhumvit';
const zipCode = '12345';
const city = 'Bangna';
const state = 'Bang Na';

describe('Checkout flows', () => {
  beforeEach(() => {
    // Recommended: Reset and seed the database before each test
    // cy.exec('npm run db:reset && npm run db:seed')
    // Assumption: requirements clearly state to not register new users, login with an existing one,
    // the script may be used in a production environment

    // Visit the login page
    cy.visit('/login');

    // Close the welcome message on the main page
    cy.shop.closeWelcomePopup();

    // Log in using the specified username and password
    cy.login.login(loginEmail, loginPassword);

    // Make sure there are no items in the basket
    cy.basket.cleanBasket();
  });

  it('Able to check out with one item in the basket', () => {
    // Add an item to the basket
    cy.shop.addItemToBasket(firstItem);

    // Check if there is one item in the basket
    cy.get(itemsInBasket).should('have.text', '1');

    // Go to the checkout page
    cy.basket.checkOut();

    // Add new address and save it
    cy.basket.addNewAddress(country, name, phone, zipCode, address, city, state);
  });

  it('Able to check out with two items in the basket', () => {
    // Add an item to the basket
    cy.shop.addItemToBasket(firstItem);

    // Check if there is one item in the basket
    cy.get(itemsInBasket).should('have.text', '1');

    // Add another item to the basket
    cy.shop.addItemToBasket(secondItem);

    // Check if there are two items in the basket
    cy.get(itemsInBasket).should('have.text', '2');

    // Go to the checkout page
    cy.basket.checkOut();

    // Add new address and save it
    cy.basket.addNewAddress(country, name, phone, zipCode, address, city, state);
  });
});

describe('Search flows', () => {
  it('Able to search for Apple products', () => {
    // Visit the landing page
    cy.visit('/');

    // Close the Welcome Popup
    cy.shop.closeWelcomePopup();

    // Search for an Apple product
    cy.shop.searchForItem(searchItem);

    // Validate there are two Apple products, and no Bananas
    cy.get(itemName).should('have.length', '2')
        .and('contain', searchItem).and('not.contain', 'Banana');
  });
});