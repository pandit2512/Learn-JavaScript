//Anonymous function
const printHello = function () {
  return "Hello";
};

// alert(printHello());

//Arrow function
const hello = () => document.write("Hiii!!!!");
hello();

//arrow Function with parameter
const printName = (name) => document.write(`<h1>${name}</h1>`);
printName("Amex");

//arrow function with return

const add = (a, b) => a + b;

document.write("Addition is " + add(2, 5));

//Practice 1: Create a Arrow Functinon which return Square
const square = (n) => n * n;
document.write("<br> square is " + square(2));

//2.Even Or Odd

const evenOrOdd = (n) => {
  if (n % 2 != 0) document.write("<br>" + n + " is Odd");
  else document.write("<br>" + n + " is Even");
};

evenOrOdd(26);

const average = (a, b, c, d) => (a + b + c + d) / 4;

document.write("<br> Average is " + average(10, 20, 50, 20));
