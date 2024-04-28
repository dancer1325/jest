# How has it been created?
* `npm init` & enter 'example-getting-started' as project name
* `npm install --save-dev jest` / `yarn add --dev jest` / `pnpm add --save-dev jest`
  * add jest as DevDependency

# How to run the tests?
* Via script in the package.json
  * `npm install` / `yarn install`
    * Problems:
      * Problem1: 'npm ERR! Unsupported URL Type "workspace:": workspace:*'
        * Attempt1: Remove 'workspace' references, specifying concrete versions
        * Solution: Update devDependencies
  * `npm run test` / `yarn test`
* Install jest globally
  * `npm install jest --global` / `yarn global add jest`
  * `jest test`
