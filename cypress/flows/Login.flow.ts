import { login } from '../pages/login'

export const LoginToPage = () => {
  //'should login user'
  cy.visit('/')
  login.loginInput_type()
  login.passwordInput_type()
  login.loginButton_click()
}
