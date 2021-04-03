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

  it('should land on the Settings Page', () =>{
    cy.get('[data-testid=nav-settings]').click();
    cy.SettingsInputFieldsCommand();
    cy.get('@ProfilePicture').clear().type("your picture here");
    cy.get('@Username').clear().type('RJC');
    cy.get('@Bio').clear().type('Coding Girl');
    cy.get('@Email').clear().type('rjc@yahoo.com');
    cy.get('@Password').clear().type('Password123');
    cy.get('@UpdateSettings').click();



  });

});
