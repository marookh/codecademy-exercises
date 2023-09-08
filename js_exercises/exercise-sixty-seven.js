const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'tiger';
});
console.log(foundAnimal);
console.log(animals[1]);
const startsWith = animals.findIndex(animal => {
  return animal[0] === 's';
});


const dressColors = ['rid', 'blue', 'pink', 'white', 'black', 'yellow', 'purple', 'orange', 'darkblue','bright green', 'green'];
const favoriteColor = dressColors.findIndex(color => {
  return color === 'pink';
});
console.log(favoriteColor);
console.log(dressColors[favoriteColor]);



