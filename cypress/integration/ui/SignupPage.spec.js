/// <reference types="cypress"/>

describe("Sign up Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to signup", () => {
    const username = "KJ8";
    const email = "kairojuan8@cypress.com";
    const password = "12345678";

    cy.get("[data-testid=nav-signup]").click();
    cy.get("[data-testid=input-username]").type(username);
    cy.get("[data-testid=input-email]").type(email);
    cy.get("[data-testid=input-password]").type(password);
    cy.get("[data-testid=button-signin-signup]").click();
  });
});
