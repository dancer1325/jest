# async example

* goal
  * how to 
    * test ASYNC code
    * mock a module MANUALLY

TODO: 

## file structure
* [user.js](user.js) -- code under test / calls -- [request.js](request.js)
* [request.js](request.js) -- REAL module / does -- an http request
* [__mocks__/request.js](__mocks__/request.js) -- manual mock / replaces -- `request.js` | tests
* [__tests__/user.test.js](__tests__/user.test.js) -- the tests
* [package.json](package.json) -- `"test": "jest"`
* [.babelrc.js](.babelrc.js) -- `@babel/preset-env` config

## prerequisites
* ⚠️NOT a standalone project⚠️
  * Reason: 🧠uses `workspace:*` deps ([jest](../../packages/jest), [babel-jest](../../packages/babel-jest))🧠
* install -- via -- `yarn` | repo ROOT
  ```bash
  # | repo root
  yarn
  ```

## how to run tests?
* ways
  ```bash
  # 1. | repo root
  yarn jest async

  # 2. | this folder
  cd examples/async
  yarn test
  ```
