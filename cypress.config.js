const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Cypress configuration for end-to-end tests
  testFiles: "**/*.cy.js", // Use testFiles instead of specPattern
  baseUrl: "https://www.google.com/", // Set your baseUrl here
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",

  // Cypress Dashboard configuration
  projectId: "z2d7pq",
  record: true,

  // Parallelization configuration
  numTestsKeptInMemory: 5,
  numTestsKeptInDisk: 20,
  parallel: true,

  // Any additional configurations or plugins can be added here
});





// npx cypress run --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35
// npm run cypress:run -- --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35 --parallel