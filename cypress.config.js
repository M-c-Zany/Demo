const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Cypress configuration for end-to-end tests
  e2e: {
    specPattern: "**/*.cy.js", // Use specPattern under the e2e property
    baseUrl: "https://www.google.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",

  // Cypress Dashboard configuration
  projectId: "z2d7pq",

  record: true,

  // Parallelization configuration
  numTestsKeptInMemory: 5,

  numTestsKeptInDisk: 20,

  // Any additional configurations or plugins can be added here
  parallel: true,
});


// npx cypress run --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35
// npm run cypress:run -- --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35 --parallel
