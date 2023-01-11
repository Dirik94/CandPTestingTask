import { LoginToPage } from '../flows/Login.flow'
import { inventory } from '../pages/inventory'
import { CheckOutItemFlow } from '../flows/checkOutItem.flow'

// This test suit will check if user can successfully purchase an item
describe('Functional test, buy t-shir from the main page', () => {
  it('should add to the cart t-shirt from the inventory page', () => {
    LoginToPage()
    cy.waitForUrl('/inventory.html')
    inventory.titleTshirt_check()
    inventory.descriptionTshirt_check()
    CheckOutItemFlow()
  })

  it('should add to the cart t-shirt from the product page', () => {
    LoginToPage()
    cy.waitForUrl('/inventory.html')
    inventory.titleTshirt_check()
    inventory.descriptionTshirt_check()
    inventory.titleTshirt_click()
    cy.waitForUrl('/inventory-item.html')
    CheckOutItemFlow()
  })
})
