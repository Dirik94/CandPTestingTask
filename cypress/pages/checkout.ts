enum checkOutCompleteTexts {
  THANK_YOU_TEXT = 'THANK YOU FOR YOUR ORDER',
}
export const checkoutPage = {
  stepOne: {
    firstName_type: (name: string) => {
      cy.textInput_type('firstName', name)
    },
    lastname_type: (name: string) => {
      cy.textInput_type('lastName', name)
    },
    zipCode_type: (zipCode: string) => {
      cy.textInput_type('postalCode', zipCode)
    },
    continue_click: () => {
      cy.buttonWithValue_click('continue', 'Continue')
    },
  },
  stepTwo: {
    itemTitleVisibility_check: () => {
      cy.classWithText_check('inventory_item_name', 'Sauce Labs Bolt T-Shirt')
    },
    checkoutButton_click: () => {
      cy.buttonWithText_click('finish', 'Finish')
    },
  },
  complete: {
    thankYouTextVisibility_check: () => {
      cy.textVisibility_check(checkOutCompleteTexts.THANK_YOU_TEXT)
    },
  },
}
