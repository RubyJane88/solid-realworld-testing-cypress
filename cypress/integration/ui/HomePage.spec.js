/// <reference types="cypress"/>

describe("Sign in Page", () =>  {
  beforeEach(() => {
    cy.getCommand('/api/tags/')

    cy.visit('/');
    const email = "arjaycee@yahoo.com";
    const password = "12345678"

    cy.get('[data-testid=nav-signin]').click();
    cy.get('[data-testid=input-email]').type(email);
    cy.get('[data-testid=input-password]').type(password);
    cy.get('[data-testid=button-signin-signup]').click();
  });

it('should be able to land on the Global Feed Page', () => {
  cy.get('[data-testid=global-feed]').click();

});

  it('should be able to get 10 article previews  on the Global Feed Page', () => {
    cy.get('[data-testid=global-feed]').click();
    cy.get("[data-testid=article-preview").should('have.length', 10);
  });





});
