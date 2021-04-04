/// <reference types="cypress"/>

describe("Home and Global Page", () => {
  beforeEach(() => {
    cy.SigninCommand();
  });

  it("should be able to land on the Global Feed Page", () => {
    cy.get("[data-testid=global-feed]").click();
  });

  it("should be able to get 10 article previews  on the Global Feed Page", () => {
    cy.get("[data-testid=global-feed]").click();
    cy.get("[data-testid=article-preview").should("have.length", 10);
  });
});
