# how has it been created?
* `npm init --yes`
* `npm install jest-worker`
* `node parent.js`
  * Problems:
    * Problem1: "const worker = new JestWorker(require.resolve('./worker')); ReferenceError: require is not defined"
      * Solution: TODO:
