import {jest} from '@jest/globals';
import {SomeClass} from './SomeClass';

jest.mock('./SomeClass'); // this happens automatically with automocking

const mockMethod = jest.fn<(a: string, b: string) => void>();
jest.mocked(SomeClass).mockImplementation(() => {
  return {
    method: mockMethod,
  };
});

const some = new SomeClass();
some.method('a', 'b');

console.log('Calls to method:', mockMethod.mock.calls);
