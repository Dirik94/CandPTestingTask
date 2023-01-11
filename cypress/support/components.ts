// @ts-ignore

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject = any> {
      textInput_type(inputFiledId: string, text: string): void
      buttonWithText_click(dataId: string, text: string): void
      textVisibility_check(text: string): void
      buttonWithValue_click(dataId: string, value: string): void
      textIsHref_check(id: string, text: string): void
      buttonVisibility_check(dataId: string, text: string): void
      classWithText_check(className: string, text: string): void
      class_click(className: string): void
      textIsHref_click(id: string, text: string): void
      buttonClass_Click(className: string): void
    }
  }
}

Cypress.Commands.addAll({
  textInput_type(inputFiledId: string, text: string) {
    cy.get(`[data-test="${inputFiledId}"]`).type(text)
  },
  buttonClass_Click(className: string) {
    cy.get(`.${className}`).click()
  },
  buttonWithText_click(dataId: string, text: string) {
    cy.get(`[data-test="${dataId}"]`).should('have.text', text).click()
  },
  buttonWithValue_click(dataId: string, value: string) {
    cy.get(`[data-test="${dataId}"]`).should('have.value', value).click()
  },
  textVisibility_check(text: string) {
    cy.contains(text).should('be.visible')
  },
  textIsHref_check(id: string, text: string) {
    cy.get(`#${id}`)
      .within(() => {
        cy.contains(text).should('be.visible')
      })
      .should('have.attr', 'href')
  },
  textIsHref_click(id: string, text: string) {
    cy.get(`#${id}`)
      .within(() => {
        cy.contains(text).should('be.visible')
      })
      .click()
  },
  buttonVisibility_check(dataId: string, text: string) {
    cy.get(`[data-test="${dataId}"]`).should('have.text', text)
  },
  classWithText_check(className: string, text: string) {
    cy.get(`.${className}`).should('have.text', text)
  },
  class_click(className: string) {
    cy.get(`.${className}`).click()
  },
})
