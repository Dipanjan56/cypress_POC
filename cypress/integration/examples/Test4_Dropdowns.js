/// <reference types="Cypress" />
 
describe('Test Suite 4 - Dropdowns', function() 
{
    it('TestCase',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        // static dropdown - you can select value attribute or the attribute name/text
        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropdown - .ui-menu-item div
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==='India'){
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')
    })
})