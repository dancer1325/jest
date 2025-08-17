const {promiseFine, promiseThrowError} = require('./utils');

// | test's 2@ argument,      async   in front
test('async & await - 1', async () => {
  //    await   |   body's async function
  const data = await promiseFine();
  expect(data).toBe('promiseFine async');
});

test('async & await - wrap with try-catch', async () => {
  expect.assertions(1);     //  verify assertions are called
  try {
    await promiseThrowError();
  } catch (error) {
    expect(error).toMatch('promiseThrowError async');
  }
});

test('async & await + resolves', async () => {
  await expect(promiseFine()).resolves.toBe('promiseFine async');
});

test('async & await + rejects', async () => {
  await expect(promiseThrowError()).rejects.toMatch('promiseThrowError async');
});
