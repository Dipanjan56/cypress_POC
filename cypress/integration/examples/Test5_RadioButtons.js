/// <reference types="Cypress" />
 
describe('Test Suite 5 - Radio Buttons', function() 
{
    it('Test Case',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // clicking on radio button
        cy.get('input[value="radio2"]').check().should('be.checked').and('have.value', 'radio2')
    
    })
})