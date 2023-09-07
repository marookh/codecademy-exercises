iconst animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumber => {
  return bigNumber / 100;
});
console.log(smallNumbers);
let numbers = [10, 20, 30, 40];
const addAndAbstract = numbers.map(number => {
  return (number + 10) - 5;
})
console.log(addAndAbstract);
let fruitsArray = ['Apple', 'Orenge', 'Banana', 'Grape', 'Mango'];
const fruitsFunction = fruitsArray.map(fruit => {
  return console.log(fruit + ' is $2! ');
});
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);

const array = [43, 2, 21, 34, 56, 78];
const updateArray = array.map(arr => {
  return arr + 1;
});
console.log('I added one to the number ' + updateArray);
console.log(array);
console.log(updateArray);

console.log('I added one to the number ' + array[0]);

let characters = ['character', 'output', 'result', 'known', 'unknown'];
characters.map(char => {
  return 
})

const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => {
  return number * 10;
});
