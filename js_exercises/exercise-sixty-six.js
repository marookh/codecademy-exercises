
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(random => {
  return random < 250; 
})
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7;
});
console.log(longFavoriteWords);

arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const sum = arrayOfNumbers.reduce((accumulater, currentValue) => {
  return accumulater + currentValue;
});
console.log(sum);

let array = [43, true, 'string'];
const updateArray = array.map(arra => {
  return arra + ' one of the permeative data type!';
});
console.log(updateArray);


