let tool = '';
let writingUtensil =  tool || 'pen';
// Use short circuit evaluation to assign  writingUtensil variable below:
console.log(`The ${writingUtensil} is mightier than the sword.`);
let userName = '';
let defaultName;
if (userName) {
  defaultName = userName;
} else {
  defaultName = 'Stranger';
}
console.log(defaultName);
