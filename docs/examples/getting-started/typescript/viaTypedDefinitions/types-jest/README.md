# How has it been created?
* `npm init`
* `npm install --save-dev jest` / `yarn add --dev jest` / `pnpm add --save-dev jest`
  * add jest as DevDependency
* `npm install --save-dev @types/jest`

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

# Problems
* Problem1: | "[sum.test.ts] SyntaxError: Cannot use import statement outside a module"
  * Attempt1: | "package.json",
    * add `"type": "module",`
  * Attempt2: add "jest.config.js"
