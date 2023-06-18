/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import "cypress-iframe"

// Test Case-2: Validate the EMI bar chart

describe('EMI Calculator - Bar Chart', function() {
    it('TC_2: validate the EMI bar chart values',function() {
        //ignoring/bypassing cross-origin error
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
        
        // Step 1: Launch the application URL
        cy.visit("https://emicalculator.net/")

        // Step 2: Go to Personal Loan tab
        cy.get('#personal-loan').click()

        // Test data
        const testData = [
            { loanAmount: '10L', interestRate: '12%', tenure: '15 Years' },
        ]

        testData.forEach(data => {
            const loanAmountInRupees = parseFloat(data.loanAmount) * 100000
            const interestRateDecimal = parseFloat(data.interestRate)
            const tenureInMonths = parseInt(data.tenure)

            // Step 3: Move sliders for loan amount, interest rate, and tenure
            cy.get('#loanamount').invoke('val', loanAmountInRupees).trigger('change')
            cy.get('#loaninterest').invoke('val', interestRateDecimal).trigger('change')
            cy.get('#loanterm').invoke('val', tenureInMonths).trigger('change')

            cy.get('#loaninterest').click()

            // Step 4: Change the month from "Schedule showing EMI payments starting from" calendar widget
            cy.get('#startmonthyear').click()
            cy.get('.datepicker-months table tbody tr td span').contains('Dec').click()

            // Step 5: Check availability of bar chart
            cy.get('#emibarchart').should('exist')

            // Step 6: Count the number of bars available
            cy.get('.highcharts-column-series .highcharts-point').its('length').then((barCount) => {
                cy.log(`Number of bars available: ${barCount}`)
              })

            // Step 7: Read the values from a bar tooltip

            // // first bar tooltip
            cy.get('.highcharts-column-series .highcharts-point').first().trigger('mouseover')
            cy.get('.highcharts-point-hover').invoke('text').as('tooltipText').then((tooltipText) => {
                cy.log(`bar Tooltip text: ${tooltipText}`)
            })
            cy.get('@tooltipText').should('not.be.empty')

            // third bar tooltip
            // cy.get('.highcharts-column-series .highcharts-point').eq(2).trigger('mouseover')
            // cy.get('.highcharts-point-hover').invoke('text').as('tooltipText').then((tooltipText) => {
            //     cy.log(`bar Tooltip text: ${tooltipText}`)
            // })
            // cy.get('@tooltipText').should('not.be.empty')
        })
    })
})