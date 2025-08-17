---
id: asynchronous
title: Testing Asynchronous Code
---

* goal
  * Jest -- is notified that –- async code has been completed
    * Jest tests complete
      * ⚠️by default, | reach end of execution⚠️
      * if you handle it -> use [`done`](#callbacks)
    * Reason: 🧠move on -- to -- ANOTHER test 🧠
    * 💡ways to test an async code💡
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

*
  ```
  test('testName', done => {
    function callback(...) {
      ...
      expect(...);
    }
    someFunction(callback);
  });
  ```
  * 's done
    * == callback /
      * | call `done()` -> Jest finishes the test
      * ⚠️if `done()` is NEVER called -> test will fail (timeout error)⚠️
    * recommendations
      * wrap `done()` | `try-catch`
      * `done(error)` | `catch(error)`

## `.resolves` / `.rejects`

* `expect(somethingAsync).resolves.anyUseMatcher()`
  * Jest -- wait for -- that promise to resolve
  * ❌if `somethingAsync` is rejected -> test will automatically fail ❌

* `expect(somethingAsyncExpectedToFail).rejects.anyUseMatcher()`
  * Jest -- wait for -- that promise fails
  * ❌if `somethingAsyncExpectedToFail` pass -> test will automatically fail ❌ 
