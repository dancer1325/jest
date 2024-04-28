- := members of Expect API
  - allows
    - testing values
  - `.toBe()`
    - test exact equality
      - — via — `Object.is`
  - `.toEqual()`
    - test 👁️ value 👁️ of an object
      - ≠ `.toBe()`
      - if it’s an object or array → check recursively each field
      - ignores object keys with
        - properties `undefined`
        - array items `undefined`
        - array sparseness
        - object type mismatch
  - complete list in '../API/Expect'

## Notes
* Examples can be found in '../examples/Docs/Introduction/usingMatchers'
