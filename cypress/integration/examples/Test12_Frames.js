/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import "cypress-iframe"
 
describe('Test Suite 12 - Frames', function() 
{
    it('TestCase',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // for this we need install one plugin -> cypress-iframe
        // terminal -> npm install -D cypress-iframe
        // then import "cypress-iframe"

        // load the iframe object
        cy.frameLoaded('#courses-iframe')

        //switch to iframe
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        // now if we want to perform any action on parent frame just use cypress command

        cy.get('#name').type('Dipanjan')


    })
})