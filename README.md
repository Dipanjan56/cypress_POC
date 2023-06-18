# cypress_POC

# Step1: install Node.js [javascript runtime env]
    Download and install Nodejs package

# Step 2: Install VS Code 

# Step 3: Create a new json file named package.json => Terminal: npm -i init [it will create the package.json file]
    package.json is a json file that exists at the root of the javascript project
    It holds the metadata relevant to project
    Its used for managing the project dependencies

# Step 4: Install Cypress => Terminal: npm install cypress --save-dev [This --save-dev will install Cypress locally as a dev dependency for project in package.json]
    It will also create cypress.config.js

# Step 5: After auto creation of node modules -> in bin folder all the lib including cypress will downloaded there

# Step 6: Terminal: node_modules/.bin/cypress open

# Step 7: In cypress.config.js add this: specPattern: 'cypress/integration/examples/*.js'

# Step 8: create all testcases in integration folder under cypress folder

# Step 9: If you want to run in UI mode: node_modules/.bin/cypress open

# Step 10: If you want to run in headless mode: node_modules/.bin/cypress run --browser chrome
