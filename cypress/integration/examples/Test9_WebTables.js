/// <reference types="Cypress" />
 
describe('Test Suite 9 - WebTables', function() 
{
    it('TestCase',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
        const text=$e1.text()
        if(text.includes("Python")){
            // we can traverse to next sibling using next() method in cypress
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                const priceText = price.text()
                expect(priceText).to.equal('25')
                })
            }
        })    
    })
})