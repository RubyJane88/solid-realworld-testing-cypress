/// <reference types="cypress"/>

describe("Articles Page", () => {
  beforeEach(() => {
    cy.SigninCommand();
  });

  it.only("should be able to edit or update existing article", () => {
    cy.get("[data-testid=nav-newpost]").click();

    cy.ArticleInputFieldsCommand();
    cy.get("@ArticleTitle").type("Cypress Testing Course");
    cy.get("@ArticleAbout").type("30-Day Challenge");
    cy.get("@ArticleMarkdown").type("This is a 30-day Cypress Testing Course ");
    cy.get("@tags").type("Cypress");

    cy.get("[data-testid=button-publish-article]").click();

    cy.wait(500);
    cy.get("[data-testid=shared-nav-link]").filter(':contains("Edit Article")').click();
    cy.ArticleInputFieldsCommand();
    cy.get("@ArticleTitle").clear().type("A Cypress Testing Challenge Part 2");
    cy.get("@ArticleAbout").clear().type("60-day Cypress Learning Course");
    cy.get("[data-testid=button-publish-article]").click();
  });
});
