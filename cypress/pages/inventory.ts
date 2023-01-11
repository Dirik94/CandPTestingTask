import { Buttons } from '../support/enums/Buttons'

enum inventoryPageTexts {
  T_SHIRT_DESCRIPTION_TEXT = 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
  T_SHIRT_TITLE_TEXT = 'Sauce Labs Bolt T-Shirt',
}
export const inventory = {
  titleTshirt_check: () => {
    cy.textIsHref_check(
      'item_1_title_link',
      inventoryPageTexts.T_SHIRT_TITLE_TEXT,
    )
  },
  titleTshirt_click: () => {
    cy.textIsHref_click(
      'item_1_title_link',
      inventoryPageTexts.T_SHIRT_TITLE_TEXT,
    )
  },
  descriptionTshirt_check: () => {
    cy.textVisibility_check(inventoryPageTexts.T_SHIRT_DESCRIPTION_TEXT)
  },
  addTshirtButton_click: () => {
    cy.buttonWithText_click(
      'add-to-cart-sauce-labs-bolt-t-shirt',
      Buttons.ADD_TO_CART,
    )
  },
  buttonChangedText_check: () => {
    cy.buttonVisibility_check('remove-sauce-labs-bolt-t-shirt', 'Remove')
  },
  shoppingCartCount_check: (value: number) => {
    cy.classWithText_check('shopping_cart_badge', value.toString())
  },
  shoppingCartButton_click: () => {
    cy.class_click('shopping_cart_badge')
  },
}
