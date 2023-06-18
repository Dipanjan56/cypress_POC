//cypress - Spec

describe('Test Suite 1 - Basics', function(){
    it('Test Case', function(){
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)

      //cypress aliasing for common webelements
      cy.get('.products').as('productLocator')

      //parent child chaining
      cy.get('@productLocator').find('.product').should('have.length', 4)
    
      // console log will print in dev tools in browser console log instead of terminal
      console.log('Testing Case 1')

      // cypress log will print the log in cypress debugger log
      cy.log('Testing Case 1')

      //1st method - using direct css along with syncronising logging only if click is successful
      cy.get(':nth-child(1) > .product-action > button').click().then(function(){
        console.log('ADD TO CART is clicked successfully')

      })

      // 2nd method - using find and eq method
      //eq(n) method gives us the (n-1)th child
      cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

      //3rd method - using the name dynamically - each method - iterating through arrays
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
            // $el is a promise, hence wrap the method which returns an element from it
            // Promise is a state that comes with rejection, resolved, pending
            cy.wrap($el).contains('ADD TO CART').click()
            //cy.wrap($el).find('button').click()
        }
      })

      // here text() is not a cypress command, its jquery method, hence we have resolve the promise using then
      const logo = cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text())
      })

      //asssert if logo text is correctly displayed
      cy.get('.brand').should('have.text', 'GREENKART')
    })
})