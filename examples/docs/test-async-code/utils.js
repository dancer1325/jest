//  function to be tested / it's an async code
const promiseFine = () => {
  return Promise.resolve('promiseFine async');
};

const promiseThrowError = () => {
  return Promise.reject('promiseThrowError async');
};

module.exports = {
  promiseFine,
  promiseThrowError
};
