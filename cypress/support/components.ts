// @ts-ignore

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject = any> {
      textInput_type(inputFiledId: string, text: string): void
    }
  }
}

Cypress.Commands.addAll({
  textInput_type(inputFiledId: string, text: string) {
    cy.get(`#${inputFiledId}`).type(text)
  },
})
