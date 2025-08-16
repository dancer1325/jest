* Snapshot tests
  * use cases
    * tool / interface does NOT change UNEXPECTEDLY
      * == -- related to -- data rendered
      * _Example of interface:_ API response, UI, logs, or error messages
  * 👀how does it work?👀
    * renders a UI component,
    * takes a snapshot,
    * this snapshot is compared vs reference snapshot / stored | test
      * if 2 snapshots 
        * match -> test will pass
        * do NOT match -> test will fail
          * Reasons to NOT match:🧠
            * change is unexpected
            * UI component's NEW version -> reference snapshot needs to be updated🧠

* Snapshot files
  * | run FIRSTLY this tests,
    * 👀they are created👀
  * recommendations
    * 👀commit & review👀
  * | code review,
    * are made -- , via [pretty-format](/packages/pretty-format), -- human-readable

## Snapshot Testing with Jest

* test renderer
  * 👀QUICKLY generate a serializable value -- for -- your React tree👀
  * ⚠️ALTERNATIVE to⚠️
    * render the graphical UI
      * == build the entire app 

* _Example:_ [here](/examples/snapshot)

* see
  * [release blog post](/website/blog/2016-07-27-jest-14.md)
  * [blog post](http://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/)
  * [egghead video](https://egghead.io/lessons/javascript-use-jest-s-snapshot-testing-feature?pl=testing-javascript-with-jest-a36c4074)

### Updating Snapshots

* use case
  * you modify the code -> tests fail 

* `jest --updateSnapshot` or `jest -u` 
  * re-generate snapshots
  * `--testNamePattern`
    * 👀limit the snapshot test cases / get re-generated👀 

### Interactive Snapshot Mode

* | watch mode,
  * you can update interactively failed snapshots 

  ![](/website/static/img/content/interactiveSnapshot.png)

  ![](/website/static/img/content/interactiveSnapshotUpdate.gif)

  ![](/website/static/img/content/interactiveSnapshotDone.png)

### Inline Snapshots

Inline snapshots behave identically to external snapshots (`.snap` files), except the snapshot values are written automatically back into the source code
* This means you can get the benefits of automatically generated snapshots without having to switch to an external file to make sure the correct value was written.

Example:

First, you write a test, calling `.toMatchInlineSnapshot()` with no arguments:

```tsx
it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://example.com">Example Site</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot();
});
```

The next time you run Jest, `tree` will be evaluated, and a snapshot will be written as an argument to `toMatchInlineSnapshot`:

```tsx
it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://example.com">Example Site</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="normal"
      href="https://example.com"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Example Site
    </a>
  `);
});
```

That's all there is to it! You can even update the snapshots with `--updateSnapshot` or using the `u` key in `--watch` mode.

By default, Jest handles the writing of snapshots into your source code. However, if you're using [prettier](https://www.npmjs.com/package/prettier) in your project, Jest will detect this and delegate the work to prettier instead (including honoring your configuration).

### Property Matchers

Often there are fields in the object you want to snapshot which are generated (like IDs and Dates). If you try to snapshot these objects, they will force the snapshot to fail on every run:

```javascript
it('will fail every time', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot();
});

// Snapshot
exports[`will fail every time 1`] = `
{
  "createdAt": 2018-05-19T23:36:09.816Z,
  "id": 3,
  "name": "LeBron James",
}
`;
```

For these cases, Jest allows providing an asymmetric matcher for any property. These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value:

```javascript
it('will check the matchers and pass', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});

// Snapshot
exports[`will check the matchers and pass 1`] = `
{
  "createdAt": Any<Date>,
  "id": Any<Number>,
  "name": "LeBron James",
}
`;
```

Any given value that is not a matcher will be checked exactly and saved to the snapshot:

```javascript
it('will check the values and pass', () => {
  const user = {
    createdAt: new Date(),
    name: 'Bond... James Bond',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    name: 'Bond... James Bond',
  });
});

// Snapshot
exports[`will check the values and pass 1`] = `
{
  "createdAt": Any<Date>,
  "name": 'Bond... James Bond',
}
`;
```

:::tip

If the case concerns a string not an object then you need to replace random part of that string on your own before testing the snapshot.  
You can use for that e.g. [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) and [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

```javascript
const randomNumber = Math.round(Math.random() * 100);
const stringWithRandomData = `<div id="${randomNumber}">Lorem ipsum</div>`;
const stringWithConstantData = stringWithRandomData.replace(/id="\d+"/, 123);
expect(stringWithConstantData).toMatchSnapshot();
```

Other ways this can be done is using the [snapshot serializer](Configuration.md#snapshotserializers-arraystring) or [mocking](MockFunctions.md) the library responsible for generating the random part of the code you're snapshotting.

:::

## Best Practices

### 1. Treat snapshots -- as -- code

* TODO: Commit snapshots and review them as part of your regular code review process
* This means treating snapshots as you would any other type of test or code in your project.

Ensure that your snapshots are readable by keeping them focused, short, and by using tools that enforce these stylistic conventions.

As mentioned previously, Jest uses [`pretty-format`](https://yarnpkg.com/en/package/pretty-format) to make snapshots human-readable, but you may find it useful to introduce additional tools, like [`eslint-plugin-jest`](https://yarnpkg.com/en/package/eslint-plugin-jest) with its [`no-large-snapshots`](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md) option, or [`snapshot-diff`](https://yarnpkg.com/en/package/snapshot-diff) with its component snapshot comparison feature, to promote committing short, focused assertions.

The goal is to make it easy to review snapshots in pull requests, and fight against the habit of regenerating snapshots when test suites fail instead of examining the root causes of their failure.

### 2. Tests should be deterministic

Your tests should be deterministic
* Running the same tests multiple times on a component that has not changed should produce the same results every time
* You're responsible for making sure your generated snapshots do not include platform specific or other non-deterministic data.

For example, if you have a [Clock](https://github.com/jestjs/jest/blob/main/examples/snapshot/Clock.js) component that uses `Date.now()`, the snapshot generated from this component will be different every time the test case is run
* In this case we can [mock the Date.now() method](MockFunctions.md) to return a consistent value every time the test is run:

```js
Date.now = jest.fn(() => 1_482_363_367_071);
```

Now, every time the snapshot test case runs, `Date.now()` will return `1482363367071` consistently
* This will result in the same snapshot being generated for this component regardless of when the test is run.

### 3. Use descriptive snapshot names

Always strive to use descriptive test and/or snapshot names for snapshots
* The best names describe the expected snapshot content
* This makes it easier for reviewers to verify the snapshots during review, and for anyone to know whether or not an outdated snapshot is the correct behavior before updating.

For example, compare:

```js
exports[`<UserName /> should handle some test case`] = `null`;

exports[`<UserName /> should handle some other test case`] = `
<div>
  Alan Turing
</div>
`;
```

To:

```js
exports[`<UserName /> should render null`] = `null`;

exports[`<UserName /> should render Alan Turing`] = `
<div>
  Alan Turing
</div>
`;
```

Since the latter describes exactly what's expected in the output, it's more clear to see when it's wrong:

```js
exports[`<UserName /> should render null`] = `
<div>
  Alan Turing
</div>
`;

exports[`<UserName /> should render Alan Turing`] = `null`;
```

## Frequently Asked Questions

### Are snapshots written automatically on Continuous Integration (CI) systems?

No, as of Jest 20, snapshots in Jest are not automatically written when Jest is run in a CI system without explicitly passing `--updateSnapshot`. It is expected that all snapshots are part of the code that is run on CI and since new snapshots automatically pass, they should not pass a test run on a CI system. It is recommended to always commit all snapshots and to keep them in version control.

### Should snapshot files be committed?

Yes, all snapshot files should be committed alongside the modules they are covering and their tests. They should be considered part of a test, similar to the value of any other assertion in Jest. In fact, snapshots represent the state of the source modules at any given point in time. In this way, when the source modules are modified, Jest can tell what changed from the previous version. It can also provide a lot of additional context during code review in which reviewers can study your changes better.

### Does snapshot testing only work with React components?

[React](TutorialReact.md) and [React Native](TutorialReactNative.md) components are a good use case for snapshot testing. However, snapshots can capture any serializable value and should be used anytime the goal is testing whether the output is correct. The Jest repository contains many examples of testing the output of Jest itself, the output of Jest's assertion library as well as log messages from various parts of the Jest codebase. See an example of [snapshotting CLI output](https://github.com/jestjs/jest/blob/main/e2e/__tests__/console.test.ts) in the Jest repo.

### What's the difference between snapshot testing and visual regression testing?

Snapshot testing and visual regression testing are two distinct ways of testing UIs, and they serve different purposes. Visual regression testing tools take screenshots of web pages and compare the resulting images pixel by pixel. With Snapshot testing values are serialized, stored within text files, and compared using a diff algorithm. There are different trade-offs to consider and we listed the reasons why snapshot testing was built in the [Jest blog](/blog/2016/07/27/jest-14#why-snapshot-testing).

### Does snapshot testing replace unit testing?

Snapshot testing is only one of more than 20 assertions that ship with Jest. The aim of snapshot testing is not to replace existing unit tests, but to provide additional value and make testing painless. In some scenarios, snapshot testing can potentially remove the need for unit testing for a particular set of functionalities (e.g. React components), but they can work together as well.

### What is the performance of snapshot testing regarding speed and size of the generated files?

Jest has been rewritten with performance in mind, and snapshot testing is not an exception. Since snapshots are stored within text files, this way of testing is fast and reliable. Jest generates a new file for each test file that invokes the `toMatchSnapshot` matcher. The size of the snapshots is pretty small: For reference, the size of all snapshot files in the Jest codebase itself is less than 300 KB.

### How do I resolve conflicts within snapshot files?

Snapshot files must always represent the current state of the modules they are covering. Therefore, if you are merging two branches and encounter a conflict in the snapshot files, you can either resolve the conflict manually or update the snapshot file by running Jest and inspecting the result.

### Is it possible to apply test-driven development principles with snapshot testing?

Although it is possible to write snapshot files manually, that is usually not approachable. Snapshots help to figure out whether the output of the modules covered by tests is changed, rather than giving guidance to design the code in the first place.

### Does code coverage work with snapshot testing?

Yes, as well as with any other test.
