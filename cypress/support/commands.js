// Selectors
const loginEmail = 'input#email';
const loginPassword = 'input#password';
const loginButton = 'button#loginButton';

const addToBasketButton = '.mat-grid-tile-content button';

cy.login = {
    login: (username, password) => {
        // Enter the username and password into the appropriate fields
        cy.get(loginEmail).type(username);
        cy.get(loginPassword).type(password);

        // Click on the login button to submit the form
        cy.get(loginButton).click();

        // Wait for a Add to Basket button to be loaded
        cy.get(addToBasketButton).should('exist');
    }
};