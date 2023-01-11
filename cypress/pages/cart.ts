import { type } from 'cypress/types/jquery'

export const cartPage = {
  itemTitleVisibility_check: () => {
    cy.classWithText_check('inventory_item_name', 'Sauce Labs Bolt T-Shirt')
  },
  checkoutButton_click: () => {
    cy.buttonWithText_click('checkout', 'Checkout')
  },
}
