// @ts-ignore

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject = any> {
      textInput_type(inputFiledId: string, text: string): void
      button_click(dataId: string): void
    }
  }
}

Cypress.Commands.addAll({
  textInput_type(inputFiledId: string, text: string) {
    cy.get(`[data-test="${inputFiledId}"]`).type(text)
  },
  button_click(dataId: string) {
    cy.get(`[data-test="${dataId}"]`).click()
  },
})
