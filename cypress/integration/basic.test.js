context('Lodgify contact page', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  })
  it('Should have the right title', () => {
    cy.visit('http://localhost:8080/contact.html');
    cy.title().should('include', 'Contact');
  });
})