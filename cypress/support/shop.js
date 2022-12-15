// Selectors
const shopItemsPane = '.mat-grid-tile-content';
const itemAddedToBasketMessage = '.mat-simple-snack-bar-content';
const searchIcon = '.mat-search_icon-search';
const searchInput = 'input#mat-input-0';
const welcomeMessageCloseButton = 'button.close-dialog';

cy.shop = {
    addItemToBasket:(item) => {
        // Click on the button to add the item to the basket
        cy.get(shopItemsPane).find(':contains('+item+')').parent().find('button').click();

        // Wait for an acknowledgement message
        cy.get(itemAddedToBasketMessage, { timeout: 10000 }).should('exist');
    },

    searchForItem:(searchItem) => {
        // Click the Search Icon
        cy.get(searchIcon).click();

        // Search for an item
        cy.get(searchInput).type(searchItem+'{Enter}');
    },

    closeWelcomePopup:() => {
        // Click on the button to close the welcome message
        cy.get(welcomeMessageCloseButton).click();
    }
};