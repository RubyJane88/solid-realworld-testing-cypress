/// <reference types="cypress"/>

describe("Articles Page", () => {
  beforeEach(() => {
    cy.getCommand("/api/tags/");
    cy.visit("/");
  });

  it("should write a new post article on the New Post Page", () => {
    //   const title = "Coding Challenge 2";
    //   const description = "30 Days of Pure Coding Challenge";
    //   const markdown = "A markdown of the article";
    //   const tags = "codingchallenge";
    //
    //   cy.ArticleInputFieldsCommand();
    //   cy.get("@ArticleTitle").type(title);
    //   cy.get("@ArticleAbout").type(description);
    //   cy.get("@ArticleMarkdown").type(markdown);
    //   cy.get("@tags").type(tags);
    //
    //   cy.get("[data-testid=button-publish-article]").click();
    //
    //   //write a comment
    //   cy.getCommand("[data-testid=article-page]");
    //   cy.get("[data-testid=write-comment]").type("Great article!");
    //   cy.get("[data-testid=button-post-comment]").click();
    // });
    //
    // it("should edit a post article on the New Post Page", () => {
    //   cy.get("[data-testid=nav-newpost]").click();
    //
    //   const title = "Coding Challenge 3";
    //   const description = "30 Days of Pure Coding Challenge";
    //   const markdown = "A markdown of the article";
    //   const tags = "codingchallenge";
    //
    //   cy.ArticleInputFieldsCommand();
    //   cy.get("@ArticleTitle").type(title);
    //   cy.get("@ArticleAbout").type(description);
    //   cy.get("@ArticleMarkdown").type(markdown);
    //   cy.get("@tags").type(tags);
    //
    //   cy.get("[data-testid=button-publish-article]").click();
    //
    //   cy.getCommand("[data-testid=article-page]");
    //   cy.get("[data-testid=write-comment]").type("Great article!");
    //   cy.get("[data-testid=button-post-comment]").click();
    //
    //   cy.get("[data-testid=shared-nav-link]").filter(':contains("Edit Article")').click();
    //   cy.ArticleInputFieldsCommand();
    //   cy.get("@ArticleTitle").clear().type("A Testing Challenge");
    //   cy.get("@ArticleAbout").clear().type("30-day Cypress Learning Course");
    //   cy.get("[data-testid=button-publish-article]").click();
  });
});
