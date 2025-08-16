const {defaults} = require('jest-config');
// retrieve Jest's default values

const config = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
    '/anotherFolder': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

console.log("configuration - options - coverageThreshold ", config);
module.exports = config;
