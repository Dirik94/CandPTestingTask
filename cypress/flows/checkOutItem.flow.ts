import { inventory } from '../pages/inventory'
import { cartPage } from '../pages/cart'
import { checkoutPage } from '../pages/checkout'
import { User } from '../support/utils/userVariables'

export const CheckOutItemFlow = () => {
  inventory.addTshirtButton_click()
  inventory.buttonChangedText_check()
  inventory.shoppingCartCount_check(1)
  inventory.shoppingCartButton_click()
  cy.waitForUrl('/cart.html')
  cartPage.itemTitleVisibility_check()
  cartPage.checkoutButton_click()
  cy.waitForUrl('/checkout-step-one.html')
  checkoutPage.stepOne.firstName_type(User.firstName)
  checkoutPage.stepOne.lastname_type(User.lastName)
  checkoutPage.stepOne.zipCode_type(User.zipCode)
  checkoutPage.stepOne.continue_click()
  cy.waitForUrl('/checkout-step-two.html')
  checkoutPage.stepTwo.itemTitleVisibility_check()
  checkoutPage.stepTwo.checkoutButton_click()
  cy.waitForUrl('/checkout-complete.html')
  checkoutPage.complete.thankYouTextVisibility_check()
}
