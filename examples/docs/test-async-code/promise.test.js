const {promiseFine} = require('./utils');

//  return a promise      == 2@ argument is a Promise
test('promise function ', () => {
  //  evaluate it     |   .then()
  return promiseFine().then(data => {
    expect(data).toBe('promiseFine async');
  });
});
