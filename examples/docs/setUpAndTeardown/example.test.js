const {isCity} = require('./example.js');

// 1. work before & after EACH test
beforeEach(() => {
  console.log('top - beforeEach');
});

// ALSO accepts, async code
afterEach(async () => {
  console.log('top - afterEach');
  await new Promise(resolve => {
    resolve();
  });
});

// 2. work before & after test file
beforeAll(() => {
  console.log('top - beforeAll');
});

// ALSO accepts, async code
afterAll(async () => {
  console.log('top - afterAll');
  await new Promise(resolve => {
    resolve();
  });
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

// 3. scoping-hooks
describe('describe block', () => {
  // executed AFTER top hooks
  beforeEach(() => {
    console.log('scoping-hooks - beforeEach');
  });

  test('scoping-test', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
});

// 4. execution order
describe('describe outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');

    test('test 1', () => console.log('test 1'));
  });

  console.log('describe outer-b');

  test('test 2', () => console.log('test 2'));

  describe('describe inner 2', () => {
    console.log('describe inner 2');

    test('test 3', () => console.log('test 3'));
  });

  console.log('describe outer-c');
});

// 5. setup & teardown execution order -- based on -- dependency
beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => {
  beforeEach(() => console.log('extra database setup'));
  afterEach(() => console.log('extra database teardown'));

  test('test 2', () => console.log('test 2'));
});

// 6. test.only
// | this file, ONLY test run it
test.only('only test', () => {
  expect(true).toBe(true);
});
