Cypress.Commands.add('login', (username, password) => {
    // Visit the login page
    cy.visit('/login');

    // Enter the username and password into the appropriate fields
    cy.get('input#email').type(username);
    cy.get('input#password').type(password);

    // Click on the login button to submit the form
    cy.get('button#loginButton').click();

    // Wait for the grid to be displayed
    cy.get('.mat-grid-tile-content button').should('exist');
});

Cypress.Commands.add('closeWelcomePopup', (item) => {
    // Visit the page for the specified item
    cy.visit(`/`);

    // Click on the button to close the welcome message
    cy.get('button.close-dialog').click();
});
Cypress.Commands.add('addItemToBasket', (item) => {
    // Click on the button to add the item to the basket
    cy.get('.mat-grid-tile-content').find(':contains('+item+')').parent().find('button').click();

    // Wait for an acknowledgement message
    cy.get('.mat-simple-snack-bar-content', { timeout: 10000 }).should('exist');
});

Cypress.Commands.add('checkOut', (item) => {
    // Click on the basket button
    cy.get('button').contains('Your Basket').click();

    // Click on the checkout button
    cy.get('button#checkoutButton').click();
});

Cypress.Commands.add('addNewAddress', (item) => {
    // Click on the button to add a new address
    cy.get('button.btn-new-address').click();

    // Fill in the address form with the specified data
    cy.get('input#mat-input-3').type('Thailand');
    cy.get('input#mat-input-4').type('John');
    cy.get('input#mat-input-5').type('22222222');
    cy.get('input#mat-input-6').type('12345');
    cy.get('#address').type('2222');
    cy.get('input#mat-input-8').type('Bangkok');
    cy.get('input#mat-input-9').type('Bang Na');

    // Click on the submit button to save the new address
    cy.get('button#submitButton').click({force: true});
});

Cypress.Commands.add('cleanBasket', (item) => {
    // We want to be sure that the basket is empty,
    // otherwise a message will pop up informing that there may be only 5 items in the basket
    // Ideally, it should be done by a seed before executing e2e tests

    // If the icon indicate more than 0 items click it to clean the basket
    cy.get('span.warn-notification').then(($el) => {
        if ($el.text() !== '0') {
            $el.trigger('click');

            cy.get('button#checkoutButton').should('be.enabled');

            // Clean the basket
            cy.get('svg.fa-trash-alt').parent().parent().each(($el) => {
                $el.trigger('click');
            })

            // Move to the shop
            cy.visit(`/`);
        }
    });
});