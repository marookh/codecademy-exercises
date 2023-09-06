const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    } 
  }
};

onst anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);
console.log(higherOrderFunc(anotherFunc));

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

console.log(higherOrderFunc(addTwo));
const countToZero = (num) => {
  for (let i = num; i <= 0; i--) {
    console.log(i);
  }
}

console.log(higherOrderFunc(countToZero));
checkConsistentOutput(countToZero, 22);
const array1 = ['aziza'];
const aFunction = num => {
  return num === 'aziza';
}
const aziza = aFunction(array1)
console.log(aziza);

