// I build a Magic Eight Ball
// declare a variable
let userName = '';
// using ternary operator
userName ? console.log(`Hello ${userName}!`) :
console.log('Hello');
// Declare a variable
let userQuestion = '';
console.log(userQuestion);
var randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
// Writhe the Magic Eight ball code using if...else if...else statements
console.log(randomNumber);
if (randomNumber === 0) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 1) {
  eightBall = 'It is certain';
} else if (randomNumber === 2) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 3) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 4) {
  eightBall = 'Cannot predect now';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no'
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
} else {
  console.log('Nothing special');
}
console.log(eightBall);
*/
switch (randomNumber) {
  case 0:
  eightBall = 'Do not count on it';
  break;
  case 1:
  eightBall = 'It is certain';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'My sources say no';
  break;
  case 5:
  eightBall = 'Outlook not so good';
  case 6:
  eightBall = 'Signs point to yes';
  break;
  case 7:
  eightBall = 'Cannot predict now';
  default:
  console.log('Nothin special');
} 
console.log(randomNumber); // Log the random number if you wish to.
console.log(eightBall); // Log the MagicEightBall
