function inchesOfRain(){
  return 0;
}

// 1. | "*.test.js" is required to contain test()
test('did not rain', () => {
  expect(inchesOfRain()).toBe(0);
});

// 2. if test(testName, fn, timeout?)'s fn returns a promise -> Jest will wait for resolving the promise BEFORE complete the test
test('has lemon in it', () => {
  const fetchBeverageList = () => Promise.resolve(['lemon', 'orange', 'apple']);

  // promise returned
  return fetchBeverageList().then(list => {
    expect(list).toContain('lemon');
  });
});
