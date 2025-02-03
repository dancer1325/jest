---
id: getting-started
title: Getting Started
---

* see [Example](/examples/docs/getting-started/README.md)

## Additional Configuration

### Using Babel

* TODO:
Configure Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project:

```javascript title="babel.config.js"
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

The ideal configuration for Babel will depend on your project. 
See [Babel's docs](https://babeljs.io/docs/en/) for more details.

<details>
  <summary markdown="span"><strong>Making your Babel config jest-aware</strong></summary>

Jest will set `process.env.NODE_ENV` to `'test'` if it's not set to something else.
You can use that in your configuration to conditionally setup only the compilation needed for Jest, e.g.

```javascript title="babel.config.js"
module.exports = api => {
  const isTest = api.env('test');
  // You can use isTest to determine what presets and plugins to use.

  return {
    // ...
  };
};
```

:::note

`babel-jest` is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project.
To avoid this behavior, you can explicitly reset the `transform` configuration option:

```javascript title="jest.config.js"
module.exports = {
  transform: {},
};
```

:::

</details>

### Using webpack

* uses
  * manage
    * assets,
    * styles,
    * compilation  
* see [webpack guide](Webpack.md)

### Using Vite

* uses
  * serve source code | native ESM -- to provide -- SOME frontend tooling  
* ❌NOT fully supported by Jest ❌
  * Reason: 🧠 [vite plugin system](https://github.com/vitejs/vite/issues/1955#issuecomment-776009094)
  * use `vite-jest`
    * [limitation of the `vite-jest`](https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests)
* see [vite guide](https://vitejs.dev/guide/)

### Using Parcel

* uses
  * manage
    * assets,
    * styles,
    * compilation
* zero configuration / requires Parcel

### Using TypeScript

#### Via `babel`

* TODO:
Then add `@babel/preset-typescript` to the list of presets in your `babel.config.js`.

```javascript title="babel.config.js"
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    // highlight-next-line
    '@babel/preset-typescript',
  ],
};
```

However, there are some [caveats](https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats) to using TypeScript with Babel. 
Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. 
If you want that, you can use [ts-jest](https://github.com/kulshekhar/ts-jest) instead, or just run the TypeScript compiler [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) separately (or as part of your build process).

#### Type definitions

There are two ways to have [Jest global APIs](GlobalAPI.md) typed for test files written in TypeScript.

You can use type definitions which ships with Jest and will update each time you update Jest. 
Install the `@jest/globals` package:

```bash npm2yarn
npm install --save-dev @jest/globals
```

And import the APIs from it:

```ts title="sum.test.ts"
import {describe, expect, test} from '@jest/globals';
import {sum} from './sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

:::tip

See the additional usage documentation of [`describe.each`/`test.each`](GlobalAPI.md#typescript-usage) and [`mock functions`](MockFunctionAPI.md#typescript-usage).

:::

Or you may choose to install the [`@types/jest`](https://npmjs.com/package/@types/jest) package. 
It provides types for Jest globals without a need to import them.

```bash npm2yarn
npm install --save-dev @types/jest
```

:::info

`@types/jest` is a third party library maintained at [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest), hence the latest Jest features or versions may not be covered yet. 
Try to match versions of Jest and `@types/jest` as closely as possible. 
For example, if you are using Jest `27.4.0` then installing `27.4.x` of `@types/jest` is ideal.

:::
