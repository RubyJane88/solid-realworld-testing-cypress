/// <reference types="cypress"/>

describe("Sign in Page", () => {
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

it('should write a new post article on the New Post Page', () => {
  cy.get('[data-testid=nav-newpost]').click();

  const title = "Coding Challenge";
   const description = "30 Days of Pure Coding Challenge";
   const markdown = "A markdown of the article";
   const tags = "codingchallenge"

  cy.ArticleInputFieldsCommand();
   cy.get('@ArticleTitle').type(title);
   cy.get('@ArticleAbout').type(description);
   cy.get('@ArticleMarkdown').type(markdown);
   cy.get('@tags').type(tags);

   cy.get('[data-testid=button-publish-article]').click();
})

});
