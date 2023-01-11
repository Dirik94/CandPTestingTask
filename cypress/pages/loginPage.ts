export const loginPage = {
  LoginInput_type: () => {
    cy.textInput_type('user-name', Cypress.env('login'))
  },
  PasswordInput_type: () => {
    cy.textInput_type('password', Cypress.env('password'))
  },
}
