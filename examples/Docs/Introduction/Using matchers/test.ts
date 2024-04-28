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
