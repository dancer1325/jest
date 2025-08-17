* uses
  * js WITHOUT jest configuration
  * jest with basic configuration
  * babel
  * typescript
  * eslint
  * webpack
  * vite
  * parcel

* [Examples](/examples/docs/getting-started)

# Babel

* Babel
  * [documentation](https://babeljs.io/docs/en/)
  * "babel.config.js"
    * depend on your project

# Webpack

* uses
  * manage
    * assets,
    * styles,
    * compilation  
* see [webpack guide](Webpack.md)

# Vite

* uses
  * serve source code | native ESM -- to provide -- SOME frontend tooling  
* ❌NOT fully supported by Jest ❌
  * Reason: 🧠 [vite plugin system](https://github.com/vitejs/vite/issues/1955#issuecomment-776009094)
  * use `vite-jest`
    * [limitation of the `vite-jest`](https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests)
* [vite guide](https://vitejs.dev/guide/)

# Parcel

* uses
  * manage
    * assets,
    * styles,
    * compilation
* zero configuration / requires Parcel

# TypeScript

## -- via -- `babel`

* steps
  * follow [babel](#babel)
  * | "babel.config.js",
    * add `@babel/preset-typescript`

* [caveats](https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats)
  * | run tests,
    * Jest does NOT type-check your tests
      * Reason:🧠TypeScript support | Babel is purely transpilation🧠
      * Solutions
        * Solution1: use [ts-jest](https://github.com/kulshekhar/ts-jest) instead
        * Solution2: run `tsc` separately

## -- via -- Type definitions

* ways to have [Jest global APIs](GlobalAPI.md) typed | test files (".ts")
  * [Jest's built-in](#jests-built-in)
  * [@types/jest](#typesjest)

### Jest's built-in

* ships with Jest

### [@types/jest](https://npmjs.com/package/@types/jest)

* == third party library
  * maintained -- by -- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest) 
* provides
  * Jest globals' types ⚠️WITHOUT importing them⚠️
