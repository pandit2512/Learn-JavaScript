//Q.1. Create a function named displayDate() that will be executed when
// the button is clicked. It is used to display the current date and time.

function displayDate() {
  document.getElementById("dateDisplay").innerText = new Date();
}

//=================================
//Q.2Write a JavaScript function to get the values of First and Last names
// of the following form. Create a submit button to this form. When a user
// clicks the submit button, firstname and last name entered by the user must
// be captured by the Javascript function and display those values on the console.

function getNames(event) {
  event.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
}

//Q.3:Object Destructuring
//Object destructuring allows extracting properties from an object into variables in a concise way.
const user = { name: "Amit", age: 25 };
const { name, age, city = "Unknown" } = user;

console.log(name); // Amit
console.log(age); // 25
console.log(city); // Unknown (default value)

//Q.4:What is the Rest Operator (...) and How is it Used in Function
// The rest operator (...) collects multiple arguments into an array.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(10, 20, 30)); // 60

//Q.5:How is the Spread Operator (...) Used to Copy an Array?
//The spread operator (...) expands an array into individual elements.

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Creates a new array

console.log(copiedArray); // [1, 2, 3]

//Q.6:callBack function
//A callback function is a function passed as an argument to another function, executed later

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Amit", sayGoodbye);

//Q.7: Error Handling in callBack function
//Best Practice: Always handle errors before processing the data.
function fetchData(callback) {
  let error = false; // Simulating an error condition
  if (error) {
    callback("Error: Data not found", null);
  } else {
    callback(null, { id: 1, name: "Amit" });
  }
}

fetchData((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Data received:", data);
  }
});
