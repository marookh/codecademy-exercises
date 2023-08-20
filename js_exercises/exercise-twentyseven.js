// I use if stetment in this case
let review = true;
if (review) {
  console.log('I use if stetment!');
}
// using if...else stetments 
let stetments = false;
if (stetments) {
  console.log('Log this sentence');
} else {
  console.log('Log another one.');
}
// Now I want use else if stetments with if...else
var colors = 'blue';
if (colors === 'red') {
  console.log('Is this your favorite color?' )
} else if (colors === 'yellow') {
  console.log('I hate this color')
} else if (colors === 'blue') {
  console.log('I love that color!')
}
colors = 43;
if (colors <= 34 && colors >= 232) {
  console.log('these are whole numbers')
}
let ternary = true;
console.log(!ternary);
const myName = 'girl';
myName ? console.log('I\'m a girl') :
console.log('I\'m not a girl!');

