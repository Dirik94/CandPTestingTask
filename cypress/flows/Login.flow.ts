import { login } from '../pages/login'

export const LoginToPage = () => {
  //'should login user'
  cy.visit('/')
  login.loginInput_type(Cypress.env('login'))
  login.passwordInput_type(Cypress.env('password'))
  login.loginButton_click()
}
