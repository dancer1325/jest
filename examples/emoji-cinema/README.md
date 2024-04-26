# Prerequisites
* [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Install jest](https://jestjs.io/docs/getting-started)

# How has it been created?
* `npm init`
  * enter 'emoji-cinema'
* `npm add --save-dev jest`
  * add 'jest' as devDependency
* Add the files manually
  * test file's naming -- '*.test.js' --

# How to run the tests?
* `npm run test`
* `npm run test:watch`
  * execute tests in watch mode

# Cherry-picking jest features
## jest-diff
* `npm add --save-dev jest-diff`
* `node lib/searchMovies_diff.test.js`
  * Problems:
    * Problem1: 'TypeError: diff is not a function'
      * Attempt1: `npm install jest-diff` & `node lib/searchMovies_diff.test.js` 
      * Solution: TODO:

# Notes
* NO configuration needed -- as you can see in this repo --

