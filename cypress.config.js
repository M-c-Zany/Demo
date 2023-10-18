module.exports = {
  // Cypress configuration for end-to-end tests
  e2e: {
    specPattern: "**/*.cy.js", // Use specPattern under the e2e property
    baseUrl: "https://www.google.com/",
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on("task", {
        // Create task
        READFROMDB({ dbConfig, sql }) {
          // Create client using the config argument object
          const pg = require("pg");
          const client = new pg.Pool(dbConfig);

          // Return the result from the SQL
          return client.query(sql).then((result) => {
            client.end();
            return result.rows;
          });
        },
        queryDB: (query) => {
          const mysql = require("mysql");
          const connection = mysql.createConnection(config.env.DB1.mysql);
          connection.connect();
          return new Promise((resolve, reject) => {
            connection.query(query, (error, result) => {
              if (error) reject(error);
              else {
                connection.end();
                return resolve(result);
              }
            });
          });
        },
      });
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
  parallel: true
};




// npx cypress run --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35
// npm run cypress:run -- --record --key 67d2d553-e8df-4548-aa05-bc09aaa94c35 --parallel
