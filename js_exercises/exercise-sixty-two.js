const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
    return func(val);
  }

console.log(checkConsistentOutput(addTwo, 34));

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
