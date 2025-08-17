const {promiseFine, promiseThrowError} = require('./utils');

test('`resolves` - promiseFine', () => {
  return expect(promiseFine()).resolves.toBe('promiseFine async');
});

//  resolves  +   somethingAsync fails    -> test fail
test('`resolves` - promiseThrowError', () => {
  return expect(promiseThrowError()).resolves.toBe('promiseThrowError async');
});

test('`rejects` - promiseThrowError', () => {
  return expect(promiseThrowError()).rejects.toMatch('promiseThrowError async');
});

//  rejects  +   somethingAsync pass    -> test fail
test('`rejects` - promiseFine', () => {
  return expect(promiseFine()).rejects.toMatch('promiseFine async');
});
