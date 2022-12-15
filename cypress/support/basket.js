// Selectors
const checkoutButton = 'button#checkoutButton';
const numberOfItemsInBasket = 'span.warn-notification';
const deleteItemIcon = 'svg.fa-trash-alt';
const addNewAddressButton = 'button.btn-new-address';
const addressCountry = 'input#mat-input-3';
const addressName = 'input#mat-input-4';
const addressPhone = 'input#mat-input-5';
const addressZip = 'input#mat-input-6';
const addressAddress = '#address';
const addressCity = 'input#mat-input-8';
const addressState = 'input#mat-input-9';
const submitButton = 'button#submitButton';

cy.basket = {
    checkOut:() => {
        // Click on the basket button
        cy.get(numberOfItemsInBasket).click();

        // Click on the checkout button
        cy.get(checkoutButton).click();
    },

    addNewAddress:(country, name, phone, zipCode, address, city, state) => {
        // Click on the button to add a new address
        cy.get(addNewAddressButton).click();

        // Fill in the address form with the specified data
        cy.get(addressCountry).type(country);
        cy.get(addressName).type(name);
        cy.get(addressPhone).type(phone);
        cy.get(addressZip).type(zipCode);
        cy.get(addressAddress).type(address);
        cy.get(addressCity).type(city);
        cy.get(addressState).type(state);

        // Click on the submit button to save the new address
        cy.get(submitButton).click({force: true});
    },

    cleanBasket:() => {
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
    },
};