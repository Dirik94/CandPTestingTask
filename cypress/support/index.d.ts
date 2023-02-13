// @ts-ignore

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject = any> {
      waitForUrl(
        url: string,
        options?: Partial<Cypress.UrlOptions> | undefined,
      ): void
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
