# How has it been created?
* `npm init`
* `npm install --save-dev jest` / `yarn add --dev jest` / `pnpm add --save-dev jest`
  * add jest as DevDependency
* ["babel.config.js"](babel.config.js)
  * MANUALLY created
* `npm install --save-dev babel-jest @babel/core @babel/preset-env`
  * `babel-jest` NOT required to re-install
    * Reason:🧠included with `npm install jest`🧠
* | "babel.config.js",
  * add `@babel/preset-typescript`

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

# TODO:
* | `jest`,
  * how to check "babel.config.js" is being used?
