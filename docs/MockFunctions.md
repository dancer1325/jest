---
id: mock-functions
title: Mock Functions
---

* Mock functions
  * == fake functions
  * allows you
    * capturing 
      * function's call
      * instances of constructor functions / instantiated -- via -- `new`
    * configuring return values
  * ways
    * creating a mock function
    * writing a [`manual mock`](ManualMocks.md) / override a module dependency
  * _Example:_ [here](/examples/docs/mock-functions)

## `.mock` property

* existing | ALL mock functions 
* `.mock.calls`
  * == [] about
    * 👀how the function -- has been -- called 👀
  * see [mockFunctionAPI](MockFunctionAPI.md#mockfnmockcalls)
* `.mock.results`
  * == [] about
    * 👀returned -- by the -- function👀 
  * see [mockFunctionAPI](MockFunctionAPI.md#mockfnmockresults) 
* `.mock.contexts`
  * == [] about
    * `this` / EACH call
  * see [mockFunctionAPI](MockFunctionAPI.md#mockfnmockcontexts)
* `.mock.instances`
  * see [mockFunctionAPI](MockFunctionAPI.md#mockfnmockinstances)
* see MORE [here](MockFunctionAPI.md)

## Mock Return Values

* TODO:
Mock functions can also be used to inject test values into your code during a test:

```javascript
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
```

Mock functions are also very effective in code that uses a functional continuation-passing style.
Code written in this style helps avoid the need for complicated stubs that recreate the behavior of the real component they're standing in for, 
in favor of injecting values directly into the test right before they're used.

```javascript
const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12
```

Most real-world examples actually involve getting ahold of a mock function on a dependent component and configuring that, 
but the technique is the same. 
In these cases, try to avoid the temptation to implement logic inside of any function that's not directly being tested.

## Mocking Modules

Suppose we have a class that fetches users from our API. 
The class uses [axios](https://github.com/axios/axios) to call the API then returns the `data` attribute which contains all the users:

```js title="users.js"
import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

export default Users;
```

Now, in order to test this method without actually hitting the API (and thus creating slow and fragile tests), 
we can use the `jest.mock(...)` function to automatically mock the axios module.

Once we mock the module we can provide a `mockResolvedValue` for `.get` that returns the data we want our test to assert against. 
In effect, we are saying that we want `axios.get('/users.json')` to return a fake response.

```js title="users.test.js"
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
```

* see [`mockResolvedValue`](MockFunctionAPI.md#mockfnmockresolvedvaluevalue)

## Mocking Partials

Subsets of a module can be mocked and the rest of the module can keep their actual implementation:

```js title="foo-bar-baz.js"
export const foo = 'foo';
export const bar = () => 'bar';
export default () => 'baz';
```

```js
//test.js
import defaultExport, {bar, foo} from '../foo-bar-baz';

jest.mock('../foo-bar-baz', () => {
  const originalModule = jest.requireActual('../foo-bar-baz');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('should do a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});
```

## Mock Implementations

Still, there are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function. This can be done with `jest.fn` or the `mockImplementationOnce` method on mock functions.

```javascript
const myMockFn = jest.fn(cb => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true
```

The `mockImplementation` method is useful when you need to define the default implementation of a mock function that is created from another module:

```js title="foo.js"
module.exports = function () {
  // some implementation;
};
```

```js title="test.js"
jest.mock('../foo'); // this happens automatically with automocking
const foo = require('../foo');

// foo is a mock function
foo.mockImplementation(() => 42);
foo();
// > 42
```

When you need to recreate a complex behavior of a mock function such that multiple function calls produce different results, use the `mockImplementationOnce` method:

```javascript
const myMockFn = jest
  .fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

myMockFn((err, val) => console.log(val));
// > true

myMockFn((err, val) => console.log(val));
// > false
```

When the mocked function runs out of implementations defined with `mockImplementationOnce`, it will execute the default implementation set with `jest.fn` (if it is defined):

```javascript
const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'
```

For cases where we have methods that are typically chained (and thus always need to return `this`), we have a sugary API to simplify this in the form of a `.mockReturnThis()` function that also sits on all mocks:

```javascript
const myObj = {
  myMethod: jest.fn().mockReturnThis(),
};

// is the same as

const otherObj = {
  myMethod: jest.fn(function () {
    return this;
  }),
};
```

## Mock Names

You can optionally provide a name for your mock functions, which will be displayed instead of `'jest.fn()'` in the test error output. Use [`.mockName()`](MockFunctionAPI.md#mockfnmocknamename) if you want to be able to quickly identify the mock function reporting an error in your test output.

```javascript
const myMockFn = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation(scalar => 42 + scalar)
  .mockName('add42');
```

## Custom Matchers

Finally, in order to make it less demanding to assert how mock functions have been called, we've added some custom matcher functions for you:

```javascript
// The mock function was called at least once
expect(mockFunc).toHaveBeenCalled();

// The mock function was called at least once with the specified args
expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

// The last call to the mock function was called with the specified args
expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

// All calls and the name of the mock is written as a snapshot
expect(mockFunc).toMatchSnapshot();
```

These matchers are sugar for common forms of inspecting the `.mock` property. You can always do this manually yourself if that's more to your taste or if you need to do something more specific:

```javascript
// The mock function was called at least once
expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

// The mock function was called at least once with the specified args
expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

// The last call to the mock function was called with the specified args
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
  arg1,
  arg2,
]);

// The first arg of the last call to the mock function was `42`
// (note that there is no sugar helper for this specific of an assertion)
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

// A snapshot will check that a mock was invoked the same number of times,
// in the same order, with the same arguments. It will also assert on the name.
expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
expect(mockFunc.getMockName()).toBe('a mock name');
```

For a complete list of matchers, check out the [reference docs](ExpectAPI.md).
