/// <reference types="cypress"/>

describe("Sign in Page", () =>  {
  beforeEach(() => {
    cy.getCommand('/api/tags/')
    cy.visit('/');
  });

  it('should be able to signup page', () => {
    const username = "kairo"
    const email = "kairo@yahoo.com";
    const password = "12345678"

    cy.get('[data-testid=nav-signup]').click();
    cy.get('[data-testid=input-username]').type(username);
    cy.get('[data-testid=input-email]').type(email);
    cy.get('[data-testid=input-password]').type(password);
    cy.get('[data-testid=button-signin-signup]').click();

  });

  it('should be able to signin', () => {

});


});
