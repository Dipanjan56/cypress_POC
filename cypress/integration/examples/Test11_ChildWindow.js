/// <reference types="Cypress" />
 
describe('Test Suite 11 - ChildWindow', function() 
{
    it('TestCase',function() {
        // cy.visit("http://qaclickacademy.com/practice.php")

        //in cypress therei is no support of switching to child window
        //suggestion1: so for that they suggest we copy the new window url and fit directly rather than clicking on some button and navigating to new url in new window

        cy.visit('http://www.qaclickacademy.com/')
    })
})