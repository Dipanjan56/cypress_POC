/// <reference types="Cypress" />
 
describe('Test Suite 8 - MouseHover', function() 
{
    it('TestCase',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        // cypress is not supporting mouse hover directly, so we have to use jquery using invoke() method with argument 'show' by manupulating DOM
        //when we apply any jquery it always try to find elements to its exact child elements

        //with using mouse hover
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

        cy.go('back')
        // now without using mouse hover
        // for hidden element cypress use .click({force: true}) method so that it can click on the hidden element
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
    })
})