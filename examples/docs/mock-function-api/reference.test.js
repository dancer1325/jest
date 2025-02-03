// 1.   .mock
// TODO:

// 2.   .mockClear()

// 3.   .mockReset()

// 4.   .mockRestore()

// 5.   .mockImplementation(functionImplementationOfTheMock)
test('mockImplementation', () => {
  // 5.1  mock functions
  const mockFn = jest.fn(scalar => 42 + scalar);    //  shorthand

  mockFn(0); // 42
  mockFn(1); // 43

  mockFn.mockImplementation(scalar => 36 + scalar); // explicitly -- via -- mockImplementation(functionImplementationOfTheMock)

  mockFn(2); // 38
  mockFn(3); // 39

  // 5.2  mock class constructors
  const SomeClass = require('./SomeClass');
  jest.mock('./SomeClass');         // Mock the class first
  const mockMethod = jest.fn();
  SomeClass.mockImplementation(() => {
    return {
      method: mockMethod,
    };
  });
  const some = new SomeClass();
  some.method('a', 'b');
  console.log('Calls to method:', mockMethod.mock.calls);
});

