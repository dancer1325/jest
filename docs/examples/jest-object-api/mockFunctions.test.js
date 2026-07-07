//  1.  `jest.fn(implementation?)`
test('`jest.fn(implementation?)` - WITHOUT passing an implementation', () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
});
test('`jest.fn(implementation?)` - PASSING an implementation', () => {
  const returnsTrue = jest.fn(() => true);
  console.log(returnsTrue()); // true;
});
