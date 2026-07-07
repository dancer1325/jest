import {expect, jest, test} from '@jest/globals';
import type add from './add';
import calculate from './calc';

// 1. jest.fn(implementation?)
test('calculate calls add', () => {
  // Create a new mock that can be used in place of `add`.
  const mockAdd = jest.fn<typeof add>();

  // `.mockImplementation()` now can infer that `a` and `b` are `number`
  // and that the returned value is a `number`.
  mockAdd.mockImplementation((a, b) => {
    // Yes, this mock is still adding two numbers but imagine this
    // was a complex function we are mocking.
    return a + b;
  });

  // `mockAdd` is properly typed and therefore accepted by anything
  // requiring `add`.
  calculate(mockAdd, 1, 2);

  expect(mockAdd).toHaveBeenCalledTimes(1);
  expect(mockAdd).toHaveBeenCalledWith(1, 2);
});
