let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

 let returnAnyProp = (objectName, propName) => objectName[propName];
 
 console.log(returnAnyProp(spaceship, 'homePlanet'));
 // Returns 'Earth'

let isActive = spaceship['Active Mission'];
console.log(isActive);
