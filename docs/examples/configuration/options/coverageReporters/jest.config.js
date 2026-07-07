const config = {
  collectCoverage: true,          // required to make use of `coverageReporters`
  //coverageReporters: ["json"],      // check that coverage's output is "*.json"
  // by default, ["clover", "json", "lcov", "text"]
};

console.log("configuration - options - coverageReporters ", config);
module.exports = config;
