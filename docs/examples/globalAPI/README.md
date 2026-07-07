# How has it been created?
* `npm init` & continuously enter
* `npm install --save-dev jest` / `yarn add --dev jest` / `pnpm add --save-dev jest`

# How to run the tests?
* ways
  * -- via -- "package.json"'s script
    * `npm install` / `yarn install`
      * Problems:
        * Problem1: 'npm ERR! Unsupported URL Type "workspace:": workspace:*'
          * Attempt1: Remove 'workspace' references, specifying concrete versions
          * Solution: Update devDependencies manually & `nvm use v16.13.2`
    * `npm run test` / `yarn test`
  * -- via -- jest globally
    * `npm install jest --global` / `yarn global add jest`
    * `jest test`
