describe("Sign in Page", () => {
  beforeEach(() => {
    cy.SigninCommand();
  });

  it("should land on the Settings Page", () => {
    cy.get("[data-testid=nav-settings]").click();
    cy.SettingsInputFieldsCommand();
    cy.get("@ProfilePicture").clear().type("your picture here");
    cy.get("@Username").clear().type("RJC");
    cy.get("@Bio").clear().type("Coding Girl");
    cy.get("@Email").clear().type("rjc@yahoo.com");
    cy.get("@Password").clear().type("Password123");
    cy.get("@UpdateSettings").click();
  });
});
