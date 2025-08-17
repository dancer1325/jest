//  function to be tested / it's an async code
const promiseFine = () => {
  return Promise.resolve('promiseFine async');
};

const promiseThrowError = () => {
  return Promise.reject('promiseThrowError async');
};

const fetchData = function (callback) {
  setTimeout(() => {
    callback(null, 'peanut butter');
  }, 3000);
};

module.exports = {
  fetchData,
  promiseFine,
  promiseThrowError,
};
