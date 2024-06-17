// const score = 400
// console.log(score);
// const balance = new Number(100)
// console.log(balance);

// //to check properties of number go to browser console define new number memory and console.log(number)

// console.log(balance.toString().length); //checking lenght by conveting it in string
// console.log(balance.toFixed(2)); //to fixed used to define number of decimal places places in number.

// const otherNumner = 123.5674

// console.log(otherNumner.toPrecision(3)); // used for rounding off values considers decimal places from left to right

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // used to add commans just like in prices (default method is of USA)

//+++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4)); // return positive number
// console.log(Math.round(4.6)); // used to round off number
// console.log(Math.ceil(4.6)); // used to round off number and take minimum value
// console.log(Math.floor(4.6)); // used to roudn off the numner and take maximum value


Math.random() // give random numbers from 0 to 1
console.log((Math.random().toPrecision(1)*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) +  min);