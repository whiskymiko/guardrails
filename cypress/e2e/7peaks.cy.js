describe('7peaks spec', () => {

  it('test scenario 1', () => {
    const url = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login';
    const ALERT_MSG = 'Account created successfully with account Number :1016';

    const FIRST_NAME_SELECTOR = 'input[placeholder="First Name"]';
    const LAST_NAME_SELECTOR = 'input[placeholder="Last Name"]';
    const CODE_SELECTOR = 'input[placeholder="Post Code"]';
    const SUBMIT_SELECTOR = 'button[type="submit"]';
    const BUTTON_SELECTOR = '.btn';
    const TABLE_CELL_SELECTOR = '.ng-binding';

    cy.visit(url);

    // Click on Bank manager Login button & Validate the link url
    cy.get(BUTTON_SELECTOR).contains('Bank Manager Login').click();
    cy.url().should('eq', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');

    // Click on Add customer
    cy.get(BUTTON_SELECTOR).contains('Add Customer').click();

    // Fill the information & add the new customer
    cy.get(FIRST_NAME_SELECTOR).type("AAA");
    cy.get(LAST_NAME_SELECTOR).type("BBB");
    cy.get(CODE_SELECTOR).type("123");
    cy.get(SUBMIT_SELECTOR).click();
    cy.go('back');

    // Validate Customer
    cy.get(BUTTON_SELECTOR).contains('Customers').click();
    cy.get(TABLE_CELL_SELECTOR).contains('AAA').should('exist');
    cy.get(TABLE_CELL_SELECTOR).contains('BBB').should('exist');
    cy.get(TABLE_CELL_SELECTOR).contains('123').should('exist');

    // Click on Add customer
    cy.get(BUTTON_SELECTOR).contains('Open Account').click();

    cy.get('#userSelect')
        .select('AAA BBB')

    cy.get('#currency')
        .select('Pound');

    cy.get(SUBMIT_SELECTOR).click();

    cy.wait(500);
    cy.on('window:alert', (message) => {
      expect(message).to.eq(ALERT_MSG);
    });
  })

  it('test scenario 2', () => {
    let url = 'https://reqres.in/api/users?page=2';

    cy.request(url)
        .then((response) => {
      expect(response.body).to.have.property('total_pages', 2);
      expect(response.status).to.eq(200);
      expect(response.body.data[3]).to.have.property('email', "byron.fields@reqres.in");
    })
    });
})