import { login } from '../pages/login'

interface LoginArgs {
  invalidLogin: boolean
}
export const LoginToPage = (invalidLogin?) => {
  cy.visit('/')
  if (invalidLogin) {
    login.loginInput_type(Cypress.env('login') + 'invalid')
  } else {
    login.loginInput_type(Cypress.env('login'))
  }
  login.passwordInput_type(Cypress.env('password'))
  login.loginButton_click()
}
