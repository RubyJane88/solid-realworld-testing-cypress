/// <reference types="cypress"/>

describe("Articles Page", () => {
  beforeEach(() => {
    cy.SigninCommand();
  });

  it("should write a new post article on the New Post Page", () => {
    const title = "Coding Challenge 2";
    const description = "30 Days of Pure Coding Challenge";
    const markdown = "A markdown of the article";
    const tags = "codingchallenge";

    cy.get("[data-testid=nav-newpost]").click();

    cy.ArticleInputFieldsCommand();
    cy.get("@ArticleTitle").type(title);
    cy.get("@ArticleAbout").type(description);
    cy.get("@ArticleMarkdown").type(markdown);
    cy.get("@tags").type(tags);

    cy.get("[data-testid=button-publish-article]").click();

    //it should be able to post a comment on an article
    cy.get("[data-testid=article-page]");
    cy.get("[data-testid=write-comment]").type("Great article!");
    cy.get("[data-testid=button-post-comment]").click();
  });
});
