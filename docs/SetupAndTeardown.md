---
id: setup-teardown
title: Setup and Teardown
---

* goal
  * test's
    * setup
    * after run

* Jest 
  * provides
    * helper functions / handle 
      * test's setup
      * test's after run

## Repeating Setup

* `beforeEach` & `afterEach`
  * == hooks
  * uses
    * work / REPEATEDLY done | MANY tests
  * ALSO accepts [asynchronous code](TestingAsyncCode.md)

## One-Time Setup

* `beforeAll` & `afterAll`
  * == hooks
  * uses
    * work / done 1! time | beginning of a file 
  * NOT use cases
    * asynchronous setup

## Scoping

* hooks / declared | `describe` block -> apply ONLY | `describe` block's tests

## Order of Execution

* ⚠️Jest execution order⚠️
  * is
    * ALL `describe()` handlers | test file 
    * `test()` serially found | collection phase
  * -> 💡setup & teardown | `before*` & `after*` handlers💡
    * if they have dependency -> order -- based on -- it
      * ⚠️if you use `jasmine2` test runner -> declare `after*` hooks | reverse order⚠️
        * Reason:🧠Jasmine2 calls it | reverse order🧠  
    * ❌NOT | `describe()` blocks❌

## recommendations

### use case1: test / fails
* things to check
  * if you ONLY run this test -> does it STILL fail?
* `test.only`
  * ⚠️run ONLY 1 test⚠️ 

### use case2: test / | large suite, fails & | ALONE, passes 
* | `beforeEach`,
  ```
  console.log('log some shared state');
  // AFTER compare vs | large suite -> clear shared state
  ```
