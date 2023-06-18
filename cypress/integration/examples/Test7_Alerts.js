/// <reference types="Cypress" />
 
describe('Test Suite 7 - Alerts', function() 
{
    it('TestCase',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //for ALERT popsups Cypress auto accepts alerts by its own if the pop up only have one option to click
        cy.get('#alertbtn').click()

        // for CONFIRM popups that has two options to select -> it will automaticaly click on ok or confirm
        cy.get('[value="Confirm"]').click()
        
        // but to get the text of ALERT pop ups, we will use events as cypress has capability to fire the browser events
        //window:alerts
        cy.on('window:alert', (str) => {
            //Mocha assertions
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // but to get the text of CONFIRM pop ups, we will use events as cypress has capability to fire the browser events
        //window:confirm
        cy.on('window:confirm', (str) => {
            //Mocha assertions
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})