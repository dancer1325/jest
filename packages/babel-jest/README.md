# babel-jest

* == [Babel](https://github.com/babel/babel) [jest](https://github.com/jestjs/jest) plugin
  * 💡JS code is AUTOMATICALLY compiled -- via -- Babel💡

## Usage

```bash
yarn add --dev babel-jest @babel/core
```

* if you want to write your OWN preprocessor
  * `yarn remove --dev babel-jest`
  * | your preprocessor,
    * set [config.transform](https://jestjs.io/docs/configuration#transform-object-string-string) 

## | add code preprocessors, setup

* TODO: To explicitly define `babel-jest` as a transformer for your JavaScript code, map _.js_ files to the `babel-jest` module
* Typescript files are also supported.

By default, it loads your existing Babel configuration (if any)

```json
"transform": {
  "\\.[jt]sx?$": "babel-jest"
},
```

You can also pass further [babel options](https://babeljs.io/docs/options)

```json
"transform": {
  "\\.[jt]sx?$": ["babel-jest", { "extends": "./babel.config.js", "plugins": ["babel-plugin-transform-import-meta"] }]
},
```

inject the Babel plugin necessary for mock hoisting talked about in [ES Module mocking](ManualMocks.md#using-with-es-module-imports)
