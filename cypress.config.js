const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.google.com/", // Move baseUrl under the e2e testing type property
    specPattern: "**/*.cy.js", // Update testFiles to specPattern
  },
  projectId: "z2d7pq", // Replace with your actual project ID from Cypress Dashboard
  parallel: true,
  video: true, // Disable video recording if not needed
});

// npx cypress run --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35
// npm run cypress:run -- --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35 --parallel