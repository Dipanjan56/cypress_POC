/// <reference types="Cypress" />
 
describe('Test Suite 10 - ChildTabs', function() 
{
    it('TestCase',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //in cypress therei is no concept of switching to child tab/window
        // in html for child tab there should be one attribute along with gref which is 'target' inside anchor tag, which used for opening child tab/window

        // so in cypress, if you want to test the child tabs, cypress has the ability to manipulate the DOM in such way that the tab should open in the same window
        // tsuggestion 1: hats why, first we have to put a assertions for target attribute in dom and then delete the target attribute from the dom so that the tab opens in same window
        // use jquery functions: invoke method -> removeAttr

        // cy.get('#opentab').invoke('removeAttr', 'target').click()

        // // substring assertion in url
        // cy.log(cy.url())
        // cy.url().should('include','qaclickacademy')
        
        // // browser navigation
        // cy.go("back")

        // suggestion 2: take the href attribute value from DOM and then hit the url directly -> use jquery prop() method
        // also as get is a cypress command hence we can not use cypress and jquery both, we have resolve the promise using then method

        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.log(url)
            //visit() will take us to another domain after that cypress will not work
            cy.visit(url)
            //after that for cross domain url, use origin() method to perform the all the operations for new domain inside this block only
            cy.origin(url,  ()=>{
                cy.get('div.sub-menu-bar a[href*="about"]').click()
            })
        })

    })
})