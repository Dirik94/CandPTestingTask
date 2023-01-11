import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  taskTimeout: 100000,
  requestTimeout: 50000,

  // Add user login and password here to run tests
  env: {
    login: '',
    password: '',
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.spec.ts',
  },

  retries: {
    runMode: 0,
    openMode: 0,
  },
})
