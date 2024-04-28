const searchMovies = require('./searchMovies');

it('should return the movies which match the query', () => {
  let result = searchMovies('F');
  console.log(result);
  // .toBe()    fails
  expect(result).toStrictEqual([
    { title: 'Frozen', emoji: '❄️' },
    { title: 'Finding Nemo', emoji: '🐠' }
  ])
});
