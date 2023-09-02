const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6irfyv',
  env: {
   "Page_Shorter_Wait" : 1000,
   "Page_Short_Wait" : 3000,
   "Page_Med_Wait" : 5000,
   "Page_Long_Wait" : 10000,
   "TestURL" : "https://store.google.com/",
   "chromeWebSecurity": false  
  },
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
