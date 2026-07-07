## Overview

* Circus 
  * == Jest test runner /
    * is
      * flux-based
      * fast
      * maintainable
      * simple to extend
    * allows
      * bind -- , via OPTIONAL event handler | ANY [custom environment](../../docs/configuration#testenvironment-string), to -- events
  * [defined types](../jest-types/src/Circus.ts)
    * ❌NOT recommended❌
      * mutate `type Event` object & `type State` object
        * Reason:🧠it could cause unexpected behavior OR break something🧠

TODO: 
Note, that `jest-circus` test runner would pause until a promise returned from `handleTestEvent` gets fulfilled
* **However, there are a few events that do not conform to this rule, namely**: `start_describe_definition`, `finish_describe_definition`, `add_hook`, `add_test` or `error`
(for the up-to-date list you can look at [SyncEvent type in the types definitions][type-definitions])
* That is caused by backward compatibility reasons and `process.on('unhandledRejection', callback)` signature, but that usually should not be a problem for most of the use cases.

## how to install?

* | Jest v27-,
  * ways

    ```bash
    # 1. yarn
    yarn add --dev jest-circus
    
    # 2. npm
    npm install --save-dev jest-circus
    ```

* | Jest v27+,
  * ❌NOTHING is needed❌
    * Reason:🧠default one🧠

## how to use?

* ways
  * | configuration, [`"testRunner": "jest-circus/runner"`](../../docs/configuration#testrunner-string)
  * -- via -- CLI

    ```bash
    jest --testRunner='jest-circus/runner'
    ```
