export enum loginPageTexts {
  USERNAME_PASSWORD_NOT_FOUND_TEXT = 'Epic sadface: Username and password do not match any user in this service',
}
export const login = {
  loginInput_type: (login: string) => {
    cy.textInput_type('username', login)
  },
  passwordInput_type: (password: string) => {
    cy.textInput_type('password', password)
  },
  loginButton_click: () => {
    cy.buttonWithValue_click('login-button', 'Login')
  },
  unsuccessfulLoginText: (text: string) => {
    cy.textVisibility_check(text)
  },
  closeErrorText_click: () => {
    cy.buttonClass_Click('error-button')
  },
}
