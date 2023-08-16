/*
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
For example, 283 K converts to 10 °C which converts to 50 °F.
*/

// The forcast today is 293 Kelvin.
const kelvin = 300;
// Converts the Kelvin to Celsius.
let celsius = kelvin - 273;
// Use this equation to calculate Farenheit.
let fohrenheit = celsius * (9/5)+ 32;
// Use the .floor() method to round down the Forenheit temprature.
// Save the result in forenheit variable.
fohrenheit = Math.floor(fohrenheit);
// Log the temprature in forenheit to the console and interpolate the string.
console.log(`The temprature is ${fohrenheit} degrees Fohrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temprature is ${newton} degrees Newton.`)


