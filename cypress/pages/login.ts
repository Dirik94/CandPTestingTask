export const login = {
  loginInput_type: () => {
    cy.textInput_type('username', Cypress.env('login'))
  },
  passwordInput_type: () => {
    cy.textInput_type('password', Cypress.env('password'))
  },
  loginButton_click: () => {
    cy.buttonWithValue_click('login-button', 'Login')
  },
}
