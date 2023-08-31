const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i])
}; // Use the for loop to iterate on array  
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`It's pleasure to visit ${vacationSpots[i]}.`)
};
const namesArray = ['Azo', 'Maria', 'Meoji', 'Nadila', 'Razaq'];
namesArray.push('Maria');
for (let a = 0; a < namesArray.length; a++) {
  console.log('Pass to the A group: ' + namesArray[a]);
}
let studentsPositions = ['Kamil', 'Saad', 'Aman', 'Rahman', 'Yasir'];
var a = 1;
for (let x = 0; x < studentsPositions.length; x++) {
  console.log('The ' + a + ' position ' + studentsPositions[x])
  a += 1;
}
const rooms = ['1 living room',  '2 halls',  '1 daning room', '2 bathrooms', '2 bedrooms', 'and 1 ketchen'];
function inUpperLevel() {
  console.log('Our home contains: ');
  for (let i = 0; i < rooms.length; i++) {
    console.log(rooms[i]);

  }
}
inUpperLevel();

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
