//----------------------------------------------
//CALL BACK FUNCTIONS
//------------------

function hello(callback) {
  callback();
}

function bye() {
  document.write("Bye...");
}
hello(bye);

//------------------------------

function fetchData(callback) {
  let data = "<br> Data From Server";
  callback(data);
  callback("<br> Hii Amex");
}

function processData(p) {
  document.write(p);
}

fetchData(processData);

//-----------
function greet(name, callback) {
  document.write("<br>Hello " + name);
  callback();
}

function sayGoodbye() {
  document.write("<br>Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello Alice
// Goodbye!
//--------------------------------
function display(funct) {
  let data = 6;
  funct(data);
}

display((n) => document.write("<br>" + n * n));
//display the number in red color
display((n) => document.write(`<h2 style="color: red;">${n}</h2>`));
