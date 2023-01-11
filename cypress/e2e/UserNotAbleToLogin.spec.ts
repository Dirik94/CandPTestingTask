import { login, loginPageTexts } from '../pages/login'
import { LoginToPage } from '../flows/Login.flow'

// This test will check if user can't log in with wrong credentials
describe('Functional test, successfully login user', () => {
  it('should not be able to login with incorrect credentials', () => {
    LoginToPage(true)
    login.unsuccessfulLoginText(loginPageTexts.USERNAME_PASSWORD_NOT_FOUND_TEXT)
    login.closeErrorText_click()
  })
})
