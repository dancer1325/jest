const config = {
  collectCoverage: true,          // required to make use of `coverageReporters`
  coverageDirectory: 'customCoverageDirectory',
};

console.log("configuration - options - coverageDirectory ", config);
module.exports = config;
