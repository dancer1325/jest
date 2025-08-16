---
id: code-transformation
title: Code Transformation
---

* Jest's code transformation 
  * [`transform`](Configuration.md#transform-objectstring-pathtotransformer--pathtotransformer-object) configuration option
  * use case
    * if you use syntax / NOT supported by Node (_Example:_ JSX, TypeScript, Vue templates) -> transform that code | plain JavaScript
  * Reason:🧠Jest runs project's code -- as -- JavaScript🧠
  * 's result
    * cached / is invalidated -- based on -- SOME factors
      * file being transformed
      * changing configuration 

* transformer
  * == module /
    * provides
      * method / transform source files
        * _Example:_ use a NEW language feature / NOT yet supported by Node

## [`babel-jest`](/packages/babel-jest#setup)

* Jest's built-in transformer /
  * load your project's Babel configuration
  * by default, transform `/\.[jt]sx?$/` RegExp
  * [inject the Babel plugin](ManualMocks.md#using-with-es-module-imports) / necessary -- for -- mock hoisting

## how to write CUSTOM transformers?

* use ["jest-transform"'s types](/packages/jest-transform/src/types.ts)

* ways to import code | Jest
  * -- via -- Common JS (== `require`)
  * -- via -- ECMAScript Modules (== `import` -- ALLOWED | static & dynamic versions)
    * if you implement the below async variant: ENOUGH
 
* "transpilation"
  * := process /
    * files are passed -- through -- code transformation | demand
      * _Example:_ | evaluate `require` OR `import` 
    * 👀types👀
      * synchronous
        * _Example:_ `require`
        * can NOT use `processAsync`
      * asynchronous 
        * _Example:_ `import` or `import()`
        * if `processAsync` is unimplemented -> can fall back to the synchronous `process` 
  * pairs of methods / exposed -- for -- asynchronous & synchronous processes
    * `process{Async}`
    * `getCacheKey{Async}`
      * uses
        * check if we need to call `process{Async}`
  * if code is loaded through `require` (INCLUDE ALSO `createRequire` | ESM) -> implement the synchronous `process` variant
  * "node_modules"
    * requirements
      * modify `transformIgnorePatterns`
      * Reason:🧠NOT transpiled -- with -- default config🧠

* TODO: Semi-related to this are the supports flags we pass (see `CallerTransformOptions` above), 
but those should be used within the transform to figure out if it should return ESM or CJS, 
and has no direct bearing on sync vs async

Though not required, we _highly recommend_ implementing `getCacheKey` as well, so we do not waste resources transpiling when we could have read its previous result from disk
* You can use [`@jest/create-cache-key-function`](https://www.npmjs.com/package/@jest/create-cache-key-function) to help implement it.

Instead of having your custom transformer implement the `Transformer` interface directly, you can choose to export `createTransformer`, a factory function to dynamically create transformers
* This is to allow having a transformer config in your jest config.

:::note

[ECMAScript module](ECMAScriptModules.md) support is indicated by the passed in `supports*` options
* Specifically `supportsDynamicImport: true` means the transformer can return `import()` expressions, which is supported by both ESM and CJS
* If `supportsStaticESM: true` it means top level `import` statements are supported and the code will be interpreted as ESM and not CJS
* See [Node's docs](https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs) for details on the differences.

:::

:::tip

Make sure `process{Async}` method returns source map alongside with transformed code, so it is possible to report line information accurately in code coverage and test errors
* Inline source maps also work but are slower.

During the development of a transformer it can be useful to run Jest with `--no-cache` to frequently [delete cache](Troubleshooting.md#caching-issues).

:::

### Examples

### TypeScript + type checking

* `babel-jest`
  * by default,
    * transpile TypeScript files
  * ❌NOT verify the types❌
    * -> use [`ts-jest`](https://github.com/kulshekhar/ts-jest)

#### transform images -- to -- their path

* import images
  * allows
    * include them | your browser bundle / imported value -- is replaced with -- its filename 
      * Reason:🧠images by themselves != valid JS🧠

```js title="fileTransformer.js"
const path = require('path');

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
```

```js title="jest.config.js"
module.exports = {
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
};
```
