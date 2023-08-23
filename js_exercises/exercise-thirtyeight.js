const plantNeedsWater = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater('Sunday'));
const functionName = () => {
  let varName = 'Double line body';
  console.log(varName);
};
functionName();
// Declaring the arrow funtion 
const userName = name => {
  let greeting = console.log('Glad to see you there ' + name + '.')
  return greeting;
}
userName('Mahsa');
// Declare a function expression
const rectangleArea = (rows, columns) => {
  const result = rows * columns;
  return result;
}
console.log(rectangleArea(20, 10));
