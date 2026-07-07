# How has it been created?
* `npm init` & continuously enter
* `npm install --save-dev jest` / `yarn add --dev jest` / `pnpm add --save-dev jest`
* `npm install ts-node tsconfig/node16` & `tsc --init`
  * Reason:🧠run jest configuration | "*.ts"🧠

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

# ways to specify
## configuration file
### default ones -- "jest.config.*" --
* they are
  * ["jest.config.js"](configurationFile/defaultNames/byJs/jest.config.js)
  * ["jest.config.ts"](configurationFile/defaultNames/byTs/jest.config.ts)
  * ["jest.config.mjs"](configurationFile/defaultNames/byMjs/jest.config.mjs)
  * ["jest.config.cts"](configurationFile/defaultNames/byCts/jest.config.cts)
  * ["jest.config.cjs"](configurationFile/defaultNames/byCjs/jest.config.cjs)
  * ["jest.config.json"](configurationFile/defaultNames/byJson/jest.config.json)

* if you set SEVERAL default ones | SAME path & `npm run test` -> get the error "Multiple configurations found:"
  * Reason:🧠
    * SEVERAL default ones are defined
    * -> split | DIFFERENT paths🧠

### non default ones -- via -- `--config pathToConfigurationFile`

* [here](configurationFile/nonDefaultNames)
* `jest --config=pathFileToJestConfiguration`
  * _Example:_ `jest --config=jestNonDefault.config.json`

### | "package.json"'s "jest" key
* [here](configurationFile/packageJsonKey)

## DIRECTLY | "package.json"
* [here](directlyInPackageJson)
