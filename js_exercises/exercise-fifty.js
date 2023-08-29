const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('sweeping', 'mop the tables');
console.log(chores);
const provinces = ['Kabul', 'Herat', 'Nimruz', 'Balkh', 'Farah'];
// Print the initial array
console.log(provinces);
// Adds three elements to the end of array.
provinces.push('Paktia', 'Ghazni', 'Zabul');
// Print the mutated array
console.log(provinces);
// Creating an array
const numbers = [1,2,3,4,5,6,7,8,9,10];
// Log the array to the console.
console.log(numbers);
// Add some elements to the array using .push() method
numbers.push(11, 12, 13, 14, 15, 16, 17, 18,19,20);
// Log the new array
console.log(numbers);
// The .length propery
console.log(numbers.length);
const baryaniRiceRecipe = ['Rice 2kg', 'Oil 2 cup', 'Onions 5', 'Yougort 1 cup', 'mix them all lol'];
console.log(baryaniRiceRecipe.push('Eat it hot'));
console.log(baryaniRiceRecipe);
console.log(baryaniRiceRecipe.length);
const namesOfBirds = ['Columbidae', 'Owl', 'Ghoose', 'Eagle', 'Sparrow', 'Peacock', 'Nightingale'];
namesOfBirds.push('Swans', 'Parrot');
namesOfBirds[2] = 'Goose';
console.log(namesOfBirds);
console.log(namesOfBirds.length);
const nextArray = [true, 344, 'string'];
nextArray.push('aziza');
console.log(nextArray);
nextArray[2] = false;
console.log(nextArray);
nextArray.slice();
console.log(nextArray);
nextArray.push('saad', 'yasir', 33, true);
console.log(nextArray);
console.log(nextArray.slice(1, 4));
nextArray.shift();
nextArray.shift();
console.log(nextArray);
nextArray.unshift('hi', 'how are you');
console.log(nextArray);
const indexOfIt = nextArray.indexOf('how are you', 0);
console.log(indexOfIt);
