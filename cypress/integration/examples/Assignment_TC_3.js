/// <reference types="Cypress" />

// Test Case 3: Validate the parameters of API

describe('API Test - Validate Parameters', () => {
    let usersData;
  
    before(() => {
      // Access the API and store the response in fixtures file
      cy.request('GET', 'https://reqres.in/api/users?page=2')
        .its('body')
        .then(response => {
          cy.writeFile('cypress/fixtures/usersData.json', response)
          usersData = response.data
        })
    })
  
    it('should validate the parameters of the API', () => {
      // Check for response status code
      cy.request('GET', 'https://reqres.in/api/users?page=2')
        .its('status')
        .should('equal', 200)
  
      // Validate the parameters from responses for all users with fixtures
      cy.fixture('usersData.json').then(fixtureData => {
        expect(usersData.length).to.equal(fixtureData.data.length)
  
        usersData.forEach((user, index) => {
          expect(user.id).to.equal(fixtureData.data[index].id)
          expect(user.email).to.equal(fixtureData.data[index].email)
          expect(user.first_name).to.equal(fixtureData.data[index].first_name)
          expect(user.last_name).to.equal(fixtureData.data[index].last_name)
        })
      })
    })
  })
  