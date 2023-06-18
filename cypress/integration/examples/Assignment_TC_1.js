/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import "cypress-iframe"
 
describe('EMI Calculator - Pie Chart', function() {
    it('TC_1: validate the EMI pie chart values',function() {
        //ignoring/bypassing cross-origin error
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
        
        // Step 1: Launch the application URL
        cy.visit("https://emicalculator.net/")

        // Step 2: Go to Home Loan tab
        cy.get('#home-loan').click()

        // Test data
        const testData = [
            { loanAmount: '25L', interestRate: '10%', tenure: '10 Years' },
            { loanAmount: '50L', interestRate: '7.5%', tenure: '15 Years' },
        ]

        testData.forEach(data => {
            const loanAmountInRupees = parseFloat(data.loanAmount) * 100000
            const interestRateDecimal = parseFloat(data.interestRate)
            const tenureInMonths = parseInt(data.tenure)

            // Step 3: Enter loan details
            cy.get('#loanamount').clear().type(loanAmountInRupees)
            cy.get('#loaninterest').clear().type(interestRateDecimal)
            cy.get('#loanterm').clear().type(tenureInMonths)

            cy.get('#loaninterest').click()

            // Step 4: calculate the EMI in the code and validate output of your code with numbers in application, both should match.
            cy.get('#emiamount span').then(function(emiText){
                const actualEMI = emiText.text().replace(',','')
                const expectedEMI = calculateEMI(data.loanAmount, data.interestRate, data.tenure)
                expect(actualEMI).to.equal(expectedEMI)
            })

             // Step 5: Check availability of pie chart
            cy.get('.highcharts-series-group').should('exist')
            
            // Step 6: Read the numbers from both sections of the pie chart
            cy.get('.highcharts-data-label-color-0 tspan').invoke('text').then(labelText => {
                const firstSectionValue = parseFloat(labelText);
                expect(firstSectionValue).to.be.greaterThan(0);
            });

            // Step 7: Read the numbers from both the sections of the pie chart and Pass the step if its greater than zero, else fail it.
            cy.get('.highcharts-data-label-color-0 tspan').invoke('text').then(labelText => {
                const secondSectionValue = parseFloat(labelText);
                expect(secondSectionValue).to.be.greaterThan(0);
            });
        })

        // calculate the EMI in the code
        function calculateEMI(loanAmount, interestRate, tenure) {
            const loanAmountInRupees = parseFloat(loanAmount) * 100000
            const interestRateDecimal = parseFloat(interestRate) / 100
            const tenureInMonths = parseInt(tenure) * 12
          
            const monthlyInterestRate = interestRateDecimal / 12
            const emi = (loanAmountInRupees * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) / (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1)
            
            cy.log(`The EMI for a home loan of ${loanAmount} with an interest rate of ${interestRate} and a tenure of ${tenure} is: ${emi.toFixed(0)}`)
            return emi.toFixed(0)
          }
    })
})