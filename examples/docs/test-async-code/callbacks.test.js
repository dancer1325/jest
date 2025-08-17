const {fetchData} = require('./utils');

test('1. ❌NOT do❌', () => {
  // test complete, BEFORE ending up the callback == check the
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe('WITHOUT done - something NOT matching, BUT test passed');
  }

  fetchData(callback);
});

test('2.1 done() -- to handle the -- test end up - passed', done => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test('2.2 done() -- to handle the -- test end up - fails', done => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe('WITH done - something NOT matching - test fails');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
