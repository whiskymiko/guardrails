const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://juice-shop.guardrails.ai/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
