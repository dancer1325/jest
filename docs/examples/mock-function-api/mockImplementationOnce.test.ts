import {jest} from '@jest/globals';

const mockFn = jest
  .fn<(cb: (a: null, b: boolean) => void) => void>()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

mockFn((err, val) => console.log(val)); // true
mockFn((err, val) => console.log(val)); // false
