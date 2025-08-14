const {defaults} = require('jest-config');
// retrieve Jest's default values

const config = {
  moduleDirectories: [...defaults.moduleDirectories, 'bower_components'],
};

console.log("configuration - options - config ", config);
module.exports = config;
