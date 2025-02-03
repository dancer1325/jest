---
id: using-matchers
title: Using Matchers
---

* matchers
  * == [`expect` API's members](ExpectAPI.md)
  * allows
    * testing values
    * testing truthiness
  * _Example:_ [here](/examples/docs/Using%20matchers)

## Test values
  * `.toBe()`
    * 👀test exact equality 👀
      * -- use under the hood -- [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
  * `.toEqual()`
    * test 👁️object's value 👁️
    * ⚠️!= `.toBe()` ⚠️
    * if it’s an object or array → check recursively each field
    * 👀ignores object's keys | 👀
      * properties `undefined`
      * array items `undefined`
      * array sparseness
      * object type mismatch
  * `.toStrictEqual()`
    * == `.toEqual()`
      * 👁️BUT WITHOUT `.toEqual()`'s ignores👁️

## Test Truthiness

* `toBeNull`
  * == `null`
* `toBeUndefined`
  * == `undefined`
* `toBeDefined`
  * != `toBeUndefined`
* `toBeTruthy`
  * == `if` statement -- treats as -- `true`
* `toBeFalsy`
  * == `if` statement -- treats as -- `false`

## Test Numbers

* | integers
  * `.toBeGreaterThan()`
  * `.toBeGreaterThanOrEqual()`
  * `.toBeLessThan()`
  * `.toBeLessThanOrEqual()`

* | floating
  * `.toBeCloseTo()`
    * -- ALTERNATIVE TO -- `toEqual`

## Test Strings

* `.toMatch(regularExpressions)`

## Test Arrays and iterables

* `.toContain()`

## Test functions / throw Exceptions

* `.toThrow()`
* `.toThrow(errorClass)`
* `.toThrow(containedErrorMessage)`

## More

* see
  * [reference docs](ExpectAPI.md)
  * [test asynchronous code](TestingAsyncCode.md)
