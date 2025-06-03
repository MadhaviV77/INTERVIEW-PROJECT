
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  blockHosts: [
    'www.googletagmanager.com',
    'sb.scorecardresearch.com',
    'dd.nytimes.com',
    'a.nytimes.com',
    'c.amazon-adsystem.com',
    'rumcdn.geoedge.be',
    'securepubads.g.doubleclick.net',
  ],
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    
  },
});
