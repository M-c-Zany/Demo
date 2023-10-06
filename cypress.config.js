const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js", // Update specPattern here
    baseUrl: "https://www.google.com/", // Set your baseUrl here
  },
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  
  // Cypress Dashboard configuration
  projectId: "z2d7pq",
  record: true,
  
  // Parallelization configuration
  numTestsKeptInMemory: 5,
  numTestsKeptInDisk: 20,
  parallel: true,
});




// npx cypress run --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35
// npm run cypress:run -- --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35 --parallel