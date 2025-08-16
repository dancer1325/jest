const config = {
  moduleNameMapper: {
    '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/RelativeImageStub.js',
    '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
    //'^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/RelativeImageStub.js',      // wrong order
    'assets/(.*)': [
      '<rootDir>/images/$1',
      '<rootDir>/photos/$1',
      '<rootDir>/recipes/$1',
    ],
    'module_name_(.*)': '<rootDir>/substituted_module_$1.js',
    /*'assets/(.*)': [                  // wrong order
      '<rootDir>/images/$1',
      '<rootDir>/photos/$1',
      '<rootDir>/recipes/$1',
    ],*/
  },
};

console.log("configuration - options - moduleNameMapper ", config);
module.exports = config;
