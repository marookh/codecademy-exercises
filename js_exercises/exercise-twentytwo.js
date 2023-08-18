// first line
let wordCount = 0;
// if statement checks if wordCount has a falsy or truthy value.
if (wordCount) {
  console.log("Great! You have started your work!");
} else {
  console.log("Better get to work!");
} // Prints 'Great! You have started your work!'


// Declare a variable
let favoritePhrase = 'Hey, there!';
// Checks if the value is falsy or truthy
if (!(favoritePhrase)) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definetely empty.");
} // Prints 'This string is definetely empty.'

let myVariable = 0;
if (myVariable) {
  console.log("This not a falsy value.");
} else {
  console.log("This is a falsy value.");
} // This is a falsy value, since it evaluate to false.

let emptyString;
if (emptyString) {
  console.log('Evalautes to true.');
} else {
  console.log('Evaluates to false.');
} // Prints 'Evaluates to false.'

let none = NaN
console.log(!none);

let myValue = 'I Exist!';
if (myValue) {
  console.log(myValue);
} else {
  console.log('This value does not exist.');
}

let numOfApples = 4;
if (numOfApples) {
  console.log('Let\'s eat apples!');
} else {
  console.log('No apples left!');
}
