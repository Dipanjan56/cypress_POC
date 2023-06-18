/// <reference types="Cypress" />
 
describe('Test Suite 3 - Checkbox', function() 
{
    it('Test Case',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // clicking on single check box
        // be stands for behaviour
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')

        //clicking on multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    
    })
})