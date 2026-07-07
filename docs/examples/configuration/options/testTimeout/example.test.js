test('sample', async () => {
  // TODO: Why if it takes > testTimeout -> test did NOT fail?
  await new Promise(resolve => setTimeout(resolve, 3000));
  expect(true).toBe(true);
});
