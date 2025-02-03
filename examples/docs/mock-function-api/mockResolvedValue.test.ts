import {jest, test} from '@jest/globals';

test('async test', async () => {
  const asyncMock = jest.fn<() => Promise<number>>().mockResolvedValue(43);

  await asyncMock(); // 43
});
