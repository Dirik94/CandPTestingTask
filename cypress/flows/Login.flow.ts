import { loginPage } from '../pages/loginPage'

export const LoginToPage = () => {
  it('should login user', () => {
    cy.visit('/')
    loginPage.LoginInput_type()
    loginPage.PasswordInput_type()
    loginPage.LoginButton_click()
  })
}
