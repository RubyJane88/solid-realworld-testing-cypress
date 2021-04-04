// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/>
import "@cypress/code-coverage/support";
import "@bahmutov/cy-api/support";
import "@testing-library/cypress/add-commands";
import { v4 as uuidv4 } from "uuid";

Cypress.Commands.add("getCommand", (url, responseBody) => {
  cy.intercept("GET", url, {
    statusCode: 200,
    body: responseBody
  });
});

Cypress.Commands.add("deleteCommand", (url, responseBody, index) => {
  cy.intercept("DELETE", url, {
    statusCode: 200,
    body: responseBody.splice(index, 1)
  });
});

Cypress.Commands.add("postCommand", (url, requestBody) => {
  requestBody.id = uuidv4();

  cy.intercept("POST", url, {
    statusCode: 201,
    body: requestBody
  });
});

Cypress.Commands.add("putCommand", (url, requestBody) => {
  cy.intercept("PUT", url, {
    statusCode: 200,
    body: requestBody
  });
});

Cypress.Commands.add("SigninCommand", () => {
  cy.visit("/");
  cy.get("[data-testid=nav-signin]").click();
  cy.get("[data-testid=input-email]").type("kairojuan8@cypress.com");
  cy.get("[data-testid=input-password]").type("12345678");
  cy.get("[data-testid=button-signin-signup]").click();
});

Cypress.Commands.add("ArticleInputFieldsCommand", () => {
  cy.get("[data-testid=input-article-title]").as("ArticleTitle");
  cy.get("[data-testid=input-article-about]").as("ArticleAbout");
  cy.get("[data-testid=input-article-markdown]").as("ArticleMarkdown");
  cy.get("[data-testid=input-enter-tags]").as("tags");
});

Cypress.Commands.add("SettingsInputFieldsCommand", () => {
  cy.get("[data-testid=profile-picture]").as("ProfilePicture");
  cy.get("[data-testid=settings-username]").as("Username");
  cy.get("[data-testid=settings-bio]").as("Bio");
  cy.get("[data-testid=settings-email]").as("Email");
  cy.get("[data-testid=settings-password]").as("Password");
  cy.get("[data-testid=button-update-settings]").as("UpdateSettings");
  cy.get("[data-testid=button-settings-logout]").as("Logout");
});
