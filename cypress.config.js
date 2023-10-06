const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "**/*.cy.js", // Update testFiles to specPattern
  },
  videosFolder: 'cypress/videos', // Define the folder where videos will be saved
  screenshotsFolder: 'cypress/screenshots', // Define the folder where screenshots will be saved
  integrationFolder: 'cypress/integration', // Define the folder where your test files are located
  baseUrl: "https://www.google.com/", // Set your baseUrl here

  // Cypress Dashboard configuration
  projectId: "z2d7pq", // Your actual project ID from Cypress Dashboard
  record: true, // Set to true to enable recording on Cypress Dashboard

  // Parallelization configuration
  numTestsKeptInMemory: 5, // Number of tests kept in memory
  numTestsKeptInDisk: 20, // Number of tests kept on disk
  parallel: true, // Enable parallel test runs

  // Other Cypress options can be added here as needed
});


// npx cypress run --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35
// npm run cypress:run -- --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35 --parallel