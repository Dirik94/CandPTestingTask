import { login } from '../pages/login'

// This test will check if user can successfully log in to the page
describe('Functional test, successfully login user', () => {
  it('should login user', () => {
    cy.visit('/')
    login.loginInput_type(Cypress.env('login'))
    login.passwordInput_type(Cypress.env('password'))
    login.loginButton_click()
  })
})
