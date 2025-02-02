// 1.   .toBe()
test('.toBe()', () => {
  expect(2 + 2).toBe(4);
});

// 2.     .toEqual()
// 2.1 array
test('.toEqual() - array', () => {
  const data = {one: 1};
  // @ts-ignore
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
  //expect(data).toBe({one: 1, two: 2});      fails the toBe()
});
// 2.2 object
test('.toEqual() - object', () => {
  const person = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  const expectedPerson = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };

  expect(person).toEqual(expectedPerson);
  //expect(person).toBe(expectedPerson);      fails the .toBe()
});
// 2.3 ignores object keys with
test('.toEqual() - object - ignoring keys with', () => {
  const ignoring = {
    id: 123,
    name: 'John Doe',
    email: undefined,   // property undefined     / NOT appear in expected    --> mismatch object type
    hobbies: ['reading', 'coding', undefined],   // Sparse array with undefined item
    jobHistory: {
      current: {
        title: 'Software Engineer',
        company: 'TechCo'
      },
      previous: 'Web Developer' // Object type mismatch
    }
  }
  const expectedUserInfo = {
    id: 123,
    name: 'John Doe',
    hobbies: ['reading', 'coding'], // Sparse array with undefined item
    jobHistory: {
      current: {
        title: 'Software Engineer',
        company: 'TechCo'
      },
      previous: 'Web Developer' // Object type mismatch
    }
  };

  expect(ignoring).toEqual(expectedUserInfo);
});

// 3.     .toStrictEqual()
// 3.1 array
test('.toStrictEqual() - array', () => {
  const data = {one: 1};
  // @ts-ignore
  data['two'] = 2;
  expect(data).toStrictEqual({one: 1, two: 2});
});
// 3.2 object
test('.toStrictEqual() - object', () => {
  const person = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  const expectedPerson = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };

  expect(person).toStrictEqual(expectedPerson);
});
// 3.3 ignores object keys with       --  Fails   -- Reason: it does NOT make these ignores!!!
test('.toStrictEqual() - object - ignoring keys with', () => {
  const ignoring = {
    id: 123,
    name: 'John Doe',
    email: undefined,   // property undefined     / NOT appear in expected    --> mismatch object type
    hobbies: ['reading', 'coding', undefined],   // Sparse array with undefined item
    jobHistory: {
      current: {
        title: 'Software Engineer',
        company: 'TechCo'
      },
      previous: 'Web Developer' // Object type mismatch
    }
  }
  const expectedUserInfo = {
    id: 123,
    name: 'John Doe',
    hobbies: ['reading', 'coding'], // Sparse array with undefined item
    jobHistory: {
      current: {
        title: 'Software Engineer',
        company: 'TechCo'
      },
      previous: 'Web Developer' // Object type mismatch
    }
  };

  expect(ignoring).toStrictEqual(expectedUserInfo);
});

// 4.       .not.SomeOfThePreviousOnes()
test('.not.SomeOfThePreviousOnes()', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// 5.       truthiness
test('truthiness matchers  for  null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
test('truthiness matchers  for  zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// 6.       numbers specific
test('integers', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
test('floating point', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);                fails !!  -- because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// 7.       strings
test('string    .toMatch(regularExpressions)', () => {
  expect('team').not.toMatch(/I/);    // I  case sensitive
  expect('Christoph').toMatch(/stop/);    // stop  case sensitive
});

// 8.       arrays & iterables
test('arrays & iterables', () => {
  // 8.1 array
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  expect(shoppingList).toContain('milk');
  // 8.2  iterable
  expect(new Set(shoppingList)).toContain('milk');    // Set    is an iterable object
});
