// Selectors
const loginEmail = 'input#email';
const loginPassword = 'input#password';
const loginButton = 'button#loginButton';

const addToBasketButton = '.mat-grid-tile-content button';
const welcomeMessage = 'button.close-dialog';
const shopItemsPane = '.mat-grid-tile-content';
const itemAddedToBasketMessage = '.mat-simple-snack-bar-content';
const checkoutButton = 'button#checkoutButton';
const numberOfItemsInBasket = 'span.warn-notification';
const deleteItemIcon = 'svg.fa-trash-alt';
const submitButton = 'button#submitButton';

const addNewAddressButton = 'button.btn-new-address';
const addressCountry = 'input#mat-input-3';
const addressName = 'input#mat-input-4';
const addressPhone = 'input#mat-input-5';
const addressZip = 'input#mat-input-6';
const addressAddress = '#address';
const addressCity = 'input#mat-input-8';
const addressState = 'input#mat-input-9';

const searchIcon = '.mat-search_icon-search';
const searchInput = 'input#mat-input-0';

Cypress.Commands.add('login', (username, password) => {
    // Enter the username and password into the appropriate fields
    cy.get(loginEmail).type(username);
    cy.get(loginPassword).type(password);

    // Click on the login button to submit the form
    cy.get(loginButton).click();

    // Wait for a Add to Basket button to be loaded
    cy.get(addToBasketButton).should('exist');
});

Cypress.Commands.add('closeWelcomePopup', () => {
    // Click on the button to close the welcome message
    cy.get(welcomeMessage).click();
});
Cypress.Commands.add('addItemToBasket', (item) => {
    // Click on the button to add the item to the basket
    cy.get(shopItemsPane).find(':contains('+item+')').parent().find('button').click();

    // Wait for an acknowledgement message
    cy.get(itemAddedToBasketMessage, { timeout: 10000 }).should('exist');
});

Cypress.Commands.add('checkOut', () => {
    // Click on the basket button
    cy.get(numberOfItemsInBasket).click();

    // Click on the checkout button
    cy.get(checkoutButton).click();
});

Cypress.Commands.add('addNewAddress', () => {
    // Click on the button to add a new address
    cy.get(addNewAddressButton).click();

    // Fill in the address form with the specified data
    cy.get(addressCountry).type('Thailand');
    cy.get(addressName).type('John');
    cy.get(addressPhone).type('22222222');
    cy.get(addressZip).type('12345');
    cy.get(addressAddress).type('2222');
    cy.get(addressCity).type('Bangkok');
    cy.get(addressState).type('Bang Na');

    // Click on the submit button to save the new address
    cy.get(submitButton).click({force: true});
});

Cypress.Commands.add('cleanBasket', () => {
    // We want to be sure that the basket is empty,
    // otherwise a message will pop up informing that there may be only 5 items in the basket
    // Ideally, it should be done by a seed before executing e2e tests

    // If the icon indicates any items in the basket then clean the basket
    cy.get(numberOfItemsInBasket).then(($el) => {
        if ($el.text() !== '0') {
            $el.trigger('click');

            // If there are any items then the checkoutButton should be enabled
            cy.get(checkoutButton).should('be.enabled');

            // Delete all the items
            cy.get(deleteItemIcon).parent().parent().each(($el) => {
                $el.trigger('click');
            });

            // Move to the shop
            cy.visit(`/`);
        }
    });
});
Cypress.Commands.add('searchForItem', (searchItem) => {
    // Click the Search Icon
    cy.get(searchIcon).click();

    // Search for an item
    cy.get(searchInput).type(searchItem+'{Enter}');
});