import { login, loginPageTexts } from '../pages/login'

// This test will check if user can't log in with wrong credentials
describe('Functional test, successfully login user', () => {
  it('should not be able to login with incorrect credentials', () => {
    cy.visit('/')
    login.loginInput_type(Cypress.env('login') + 'invalid')
    login.passwordInput_type(Cypress.env('password'))
    login.loginButton_click()
    login.unsuccessfulLoginText(loginPageTexts.USERNAME_PASSWORD_NOT_FOUND_TEXT)
    login.closeErrorText_click()
  })
})
