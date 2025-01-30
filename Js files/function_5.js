//return  type functions
function add(a, b) {
  return a + b;
}
//alert("Addition is " + add(5, 8));
document.write("<br>Addition is " + add(5, 5));

function square(a) {
  return a * a;
}
//alert("Square is " + square(5));
document.write("<br> Square is " + square(6));

//------------------------------------------------
//Anonymous Function (function without name),in js function itself is a object
//------------------------------------------------

const display = function () {
  document.write("<br> Hello");
};

display();

const addition = function (p, q) {
  return p + q;
};
addition(5, 10); // this line will return only not print
document.write("<br>addition is " + addition(24, 26)); // this will print
console.log("Addition is " + addition(100, 200));

//------------------------------------------------------------
//Now to read Value from input box
//if no is even print in Green or if Odd print in Red
const evenOrOdd = function () {
  let n = document.getElementById("number").value;

  if (n % 2 == 0) {
    document.write(`<h3 style="color: green;">${n} is Even</h3>`);
  } else {
    document.write(`<h3 style="color: red;">${n} is Odd</h3>`);
  }
};

evenOrOdd();

//------Calculator--------

const calculator = function (n) {
  // alert(n);
  let a = document.getElementById("firstNumber").value;
  let b = document.getElementById("secondNumber").value;

  a = parseInt(a);
  b = parseInt(b);

  switch (n) {
    case 1:
      document.write("Addintion is " + (a + b));
      break;
    case 2:
      document.write("Substraction is " + (a - b));
      break;
    case 3:
      document.write("Multiplication is " + a * b);
      break;
    case 4:
      document.write("Division is " + a / b);
      break;
    default:
      document.write("selected option is incorrect");
  }
};

//Practice Question:
// get 3 button weekdays and month,Subjects ,when clicked months or week days should be printed

const choice = function (n) {
  if (n == 1) {
    alert("Monday,TuesDay,WednesDay,ThursDay,Friday,Saturday,Friday");
  } else if (n == 2) {
    alert("Jan,Feb,Mar,April,May,June,July,Aug,Sept,Oct,Nov,Dec");
  } else {
    alert("Hindi,English,Marathi,Science,Geography,Geometry");
  }
};
