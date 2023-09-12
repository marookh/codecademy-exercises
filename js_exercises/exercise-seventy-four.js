let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';
console.log(spaceship.color);
spaceship.numEngines = 6;
console.log(spaceship.numEngines);
delete spaceship['Secret Mission'];
console.log(spaceship);
spaceship.homePlanet = 'South';
console.log(spaceship.homePlanet);
