const emojiMap = [
  { title: 'Frozen', emoji: '❄️'},
  { title: 'Finding Nemo', emoji: '🐠'},
  { title: 'Girls', emoji: '👧'},
]

function searchMovies(query) {
  return emojiMap.filter((movie) => {
    return movie.title.includes(query)
  })
}

module.exports = searchMovies;    // Required to consume in the text
