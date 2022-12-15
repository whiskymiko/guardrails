const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://juice-shop.guardrails.ai/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "retries": {
    "runMode": 1, // Used for cypress run
    "openMode": 0 // Used for cypress open
  },
  video: false
});
