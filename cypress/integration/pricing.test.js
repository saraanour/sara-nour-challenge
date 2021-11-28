context('Lodgify pricing page', () => {

it('test pricing plans when number of rentals=50', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.visit('http://localhost:8080/pricing.html');
    cy.get('.min-slider-handle')
    cy.get('.slider-handle.min-slider-handle.round').invoke('attr','style','left:51%').should('attr','style','left:51%').click()
    cy.get('.price-card-starter > .price-item > :nth-child(1) > .plan-price > .total-sum').contains('64')
    cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price > .total-sum').contains('375')
    cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price > .total-sum').contains('525')
})

  it('test currency change', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
   cy.visit('http://localhost:8080/pricing.html');
   cy.get('.price-currency-select').select(2)
   .should('have.value', 'gbp')
   cy.get('.price-currency-select').select(1)
   .should('have.value', 'usd')
  })


  //optional tests
    it('test Give us a call redirection', () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      })
      cy.visit('http://localhost:8080/pricing.html')
      cy.scrollTo('bottom')
      cy.get(':nth-child(1) > .box-wd-sm > .push-top-2 > .link-read-more').click()
     // should redirect to contact page
    })

  
     it('test get started redirection when selecting plan', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.visit('http://localhost:8080/pricing.html');
    cy.get('.min-slider-handle')
    cy.get('.slider-handle.min-slider-handle.round').invoke('attr','style','left:20%').should('attr','style','left:20%').click()
    cy.get('.price-card-starter > .price-item > :nth-child(2) > .wd-100 > .btn').click()
    //should redirect to sign up page



})
});
  
  