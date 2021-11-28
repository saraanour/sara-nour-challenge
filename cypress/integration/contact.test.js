context('Lodgify contact page', () => {

   it('test mandatory Name', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
     cy.visit('http://localhost:8080/contact.html');
      cy.get(':nth-child(1) > :nth-child(1) > .input > input').should('have.value','').focus();
      cy.get('[data-testid="form"]').click();
      cy.get('div.ui.red.pointing.below.label')
     .contains('Name is mandatory');
    });

    it('test mandatory Phone', () => {
      cy.visit('http://localhost:8080/contact.html');
      cy.get('.PhoneInput').should('have.value','').focus();
       cy.get('[data-testid="form"]').click();
       cy.get('[data-testid=phone-input]')
      .contains('Phone number is mandatory');
     });
  
     it('test mandatory email', () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
      cy.visit('http://localhost:8080/contact.html');
      cy.get('.eight > .input > input').should('have.value','').focus();
       cy.get('[data-testid="form"]').click();
       cy.get('.eight > .input > .ui')
      .contains('Email is mandatory');
     });
  
  it('test mandatory Comment', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
      cy.visit('http://localhost:8080/contact.html');
      cy.get('.input > textarea').should('have.value','').focus();
      cy.get('.eight > .ui > input').click();
     cy.get('div.ui.red.pointing.below.label')
     .contains('Comment is mandatory');
     });
  
  it('test add a random Lorem Ipsum', () => {
     Cypress.on("uncaught:exception", (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false;
        });
    cy.visit('http://localhost:8080/contact.html');
    cy.get('.input > textarea').should('have.value','').focus().type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa')
    .should('have.value','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa')
  });  
  
  it('test datepicker', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.visit('http://localhost:8080/contact.html');
    cy.wait(3000)
    cy.get('.DateRangePickerInput > :nth-child(2)').click()
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click()
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click()
  
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click()
  
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click()
    cy.get('[aria-label="Thursday, April 14, 2022"]').click()
  
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click()
  
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click()
  
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click()
    cy.get('[aria-label="Tuesday, June 14, 2022"]').click()
   cy.get('.DateInput_input.DateInput_input_1').should('have.value','14/04/2022')
   cy.get('.DateRangePickerInput .DateInput:nth-child(4) input').should('have.value','14/06/2022')

    })


    //optional test
    it('Test Contact us form submission', () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    cy.visit('http://localhost:8080/contact.html');
    cy.title().should('include', 'Contact');
    cy.get('[name="name"]').type('Sara').should('have.value','Sara')
    cy.get('[data-testid=phone-input]').click({force:true}).type('01093748481')
    cy.get('.eight > .input > input').click({force:true}).type('saranour93@gmail.com')
    cy.get('.four > .ui > input').click({force:true}).type('4')
    cy.get('.DateRangePickerInput > :nth-child(2)').click()
    cy.get('[aria-label="Tuesday, November 30, 2021"]').click()
    cy.get('[aria-label="Thursday, December 30, 2021"]').click()
    cy.get('.input > textarea').click({force:true}).type('Hello team')
    cy.get('[data-testid=form] > [data-testid=button]').should('be.visible')
    .click()

 cy.contains('Our team will contact with you soon')
 .should('be.visible')

  }) 

});