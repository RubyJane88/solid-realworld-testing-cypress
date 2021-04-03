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

it.skip('should write a new post article on the New Post Page', () => {
  cy.get('[data-testid=nav-newpost]').click();

  const title = "Coding Challenge 2";
   const description = "30 Days of Pure Coding Challenge";
   const markdown = "A markdown of the article";
   const tags = "codingchallenge"

  cy.ArticleInputFieldsCommand();
   cy.get('@ArticleTitle').type(title);
   cy.get('@ArticleAbout').type(description);
   cy.get('@ArticleMarkdown').type(markdown);
   cy.get('@tags').type(tags);

   cy.get('[data-testid=button-publish-article]').click();

   //write a comment
   cy.getCommand('[data-testid=article-page]')
  cy.get('[data-testid=write-comment]').type("Great article!")
  cy.get('[data-testid=button-post-comment]').click();

 })

  it.only('should edit a post article on the New Post Page', () => {
    cy.get('[data-testid=nav-newpost]').click();

    const title = "Coding Challenge 3";
    const description = "30 Days of Pure Coding Challenge";
    const markdown = "A markdown of the article";
    const tags = "codingchallenge"

    cy.ArticleInputFieldsCommand();
    cy.get('@ArticleTitle').type(title);
    cy.get('@ArticleAbout').type(description);
    cy.get('@ArticleMarkdown').type(markdown);
    cy.get('@tags').type(tags);

    cy.get('[data-testid=button-publish-article]').click();

    cy.getCommand('[data-testid=article-page]')
    cy.get('[data-testid=write-comment]').type("Great article!")
    cy.get('[data-testid=button-post-comment]').click();

    cy.get('[data-testid=shared-nav-link]').filter(':contains("Edit Article")').click();
    cy.ArticleInputFieldsCommand();
    cy.get('@ArticleTitle').clear().type("A Testing Challenge")
    cy.get('@ArticleAbout').clear().type("30-day Cypress Learning Course");
    cy.get('[data-testid=button-publish-article]').click();





//     cy.get("home").click();
//     cy.get("globalfeed").click();
// cy.get("card").eq(0).click();
// cy.get("editarticle-button").click();
// cy.get("artieccle-title-input").type(" - EDITED");
// cy.get("publish-article-button").click();
// cy.get("titleheader").should("contain", " - EDITED");
//   })

  });

});
