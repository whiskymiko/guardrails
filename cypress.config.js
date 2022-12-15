const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://juice-shop.guardrails.ai/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "retries": {
    "runMode": 1, // Used for cypress run, defaults to 0
    "openMode": 0 // Used for cypress open, defaults to 0
  }
});
