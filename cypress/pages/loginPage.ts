export const loginPage = {
  LoginInput_type: () => {
    cy.textInput_type('username', Cypress.env('login'))
  },
  PasswordInput_type: () => {
    cy.textInput_type('password', Cypress.env('password'))
  },
  LoginButton_click: () => {
    cy.button_click('login-button')
  },
}
