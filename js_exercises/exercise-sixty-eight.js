const numbers = [1, 2, 3, 4];
const updateNumbers = numbers.reduce((num, num2) => {
  return num + num2;
}, 10);
console.log(updateNumbers);
