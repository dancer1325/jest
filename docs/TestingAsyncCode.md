---
id: asynchronous
title: Testing Asynchronous Code
---

* goal
  * Jest -- is notified that –- async code has been completed
    * Reason: 🧠move on -- to -- ANOTHER test 🧠
    * ways
      * [Promises](#promises)
      * [Async/Await](#asyncawait)
      * [Callbacks](#callbacks)
      * [`.resolves` / `.rejects`](#resolves--rejects)

## Promises

* == test / return a promise
  * -> 👀Jest -- will wait for -- that promise is resolved 👀
    * ❌if the promise is rejected -> test will fail ❌

## Async/Await

* 
  ```
  test('testName', async () => {
    ...
    ... = await someAsyncFunction();
    expect(...;
    ...
  });
  ```
  * | `test`'s 2@ argument
    * `async`, in front
    * `await`  | function's block

* 👀`async` & `await` -- can be combined with -- `.resolves` or `.rejects` 👀

## Callbacks

* TODO:
For example, let's say that `fetchData`, instead of returning a promise, expects a callback, i.e. fetches some data and calls `callback(null, data)` when it is complete. 
You want to test that this returned data is the string `'peanut butter'`.

By default, Jest tests complete once they reach the end of their execution.
That means this test will _not_ work as intended:

```js
// Don't do this!
test('the data is peanut butter', () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});
```

The problem is that the test will complete as soon as `fetchData` completes, before ever calling the callback.

There is an alternate form of `test` that fixes this. 
Instead of putting the test in a function with an empty argument, use a single argument called `done`. 
Jest will wait until the `done` callback is called before finishing the test.

```js
test('the data is peanut butter', done => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
```

If `done()` is never called, the test will fail (with timeout error), which is what you want to happen.

If the `expect` statement fails, it throws an error and `done()` is not called. 
If we want to see in the test log why it failed, we have to wrap `expect` in a `try` block and pass the error in the `catch` block to `done`. 
Otherwise, we end up with an opaque timeout error that doesn't show what value was received by `expect(data)`.

:::caution

Jest will throw an error, if the same test function is passed a `done()` callback and returns a promise.
This is done as a precaution to avoid memory leaks in your tests.

:::

## `.resolves` / `.rejects`

* `expect(somethingAsync).resolves.anyUseMatcher()`
  * Jest -- wait for -- that promise to resolve
  * ❌if `somethingAsync` is rejected -> test will automatically fail ❌

* `expect(somethingAsyncExpectedToFail).rejects.anyUseMatcher()`
  * Jest -- wait for -- that promise fails
  * ❌if `somethingAsyncExpectedToFail` pass -> test will automatically fail ❌ 
