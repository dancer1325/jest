const cities = new Set(['Madrid', 'Elx', 'Munich', 'Vienna', 'San Juan']);

function isCity(cityToCheck) {
  return cities.has(cityToCheck);
}

module.exports = {isCity};
