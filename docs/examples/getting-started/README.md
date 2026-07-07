# How has it been created?
* `npm init` & enter 'example-getting-started' as project name
* `npm install --save-dev jest` / `yarn add --dev jest` / `pnpm add --save-dev jest`
  * add jest as DevDependency
* `npm init jest` / `yarn create jest` / `pnpm create jest`
  * 👀generate a basic 'jest.config' file 👀

# How to run the tests?
* ways
  * -- via -- package.json's script 
    * `npm install` / `yarn install`
      * Problems:
        * Problem1: 'npm ERR! Unsupported URL Type "workspace:": workspace:*'
          * Attempt1: Remove 'workspace' references, specifying concrete versions
          * Solution: Update devDependencies manually & `nvm use v16.13.2`
    * `npm run test` / `yarn test`
      * 👀recommended 👀
  * install jest globally
    * `npm install jest --global` / `yarn global add jest`
    * `jest test`
      * Problems: 
        * Problem1: "Error: Jest: 'ts-node' is required for the TypeScript configuration files"
          * Solution: `npm install ts-node --global` / `yarn global add ts-node`

# Additional configuration
## \+ babel
* `npm install --save-dev babel-jest @babel/core @babel/preset-env` / `yarn add --dev babel-jest @babel/core @babel/preset-env` / `pnpm add --save-dev babel-jest @babel/core @babel/preset-env`
  * install babel required packages
  * add 'babel.config.js' file
* TODO:

## \+ typescript
* ways to use
  * via babel
    * follow 'use babel' steps
    * `npm install --save-dev @babel/preset-typescript` / `yarn add --dev @babel/preset-typescript` / `pnpm add --save-dev @babel/preset-typescript`
    * add '@babel/preset-typescript' to 'babel.config.js' file
    * add 'example.test.ts'
    * run the tests -- previous section --
  * via 'ts-jest' -- [link](https://kulshekhar.github.io/ts-jest/)
  * & Jest global APIs (check '../API/Globals')
    * ways
      * `npm install --save-dev @jest/globals` / `yarn add --dev @jest/globals` / `pnpm add --save-dev @jest/globals` + import the APIs
        * TODO:
      * `npm install --save-dev @types/jest` / `yarn add --dev @types/jest` / `pnpm add --save-dev @types/jest`
        * TODO:

## \+ use eslint
* ways
  * import [Jest global helpers](/docs/GlobalAPI.md) (`describe` / `it` / ...)
    * Reason: 🧠avoid ESLint errors `no-undef` 🧠
  * configure [eslint environment](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments)
    * avoid importing Jest global helpers
      ```json
      {
        "overrides": [
          {
            "files": ["tests/**/*"],
            "env": {
              "jest": true
            }
          }
        ]
      }
      ```
  * use ['eslint-plugin-jest'](https://github.com/jest-community/eslint-plugin-jest)

TODO: 
### works with
#### Babel
* [pure Babel](../async)
  * == `@babel/core` + `@babel/preset-env` + `babel-jest`
* [Babel + TS + React](../typescript)

#### TypeScript
* [typescript](../typescript)

#### NodeJS
TODO: NO example yet

#### React
* [react](../react)
* [react-testing-library](../react-testing-library)
* [react-native](../react-native)

#### Angular
* [angular](../angular)

#### Vue
TODO: NO example yet

#### Webpack
TODO: NO example yet

#### Vite
TODO: NO example yet

#### Parcel
TODO: NO example yet

#### eslint
TODO: NO example yet
