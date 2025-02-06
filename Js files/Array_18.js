function demo(a, b) {
  return a + b;
}

console.log(demo(5));
//5+ undefine= NaN
//o/p=> Nan (Not a Number)

//rest operator:way to represent an
// indefinite number of arguments as an array
function demo(...a) {
  return a;
}
console.log(demo(6, 4, 14, 20, 50));
/*O/p=>[ 6, 4, 14, 20, 50 ]
Due to variable hosting all the function comes first
//then function call will be performed on the basis of latest function
// hence we are getting
//[ 5 ]
//[ 6, 4, 14, 20, 50 ] */
function demo1(a) {
  return a;
}
console.log(demo1(6, 4, 14, 20, 50));
//o/p=> 6

//==============
//print the sum
function sum(...a) {
  return a.reduce((a, b) => a + b);
}

console.log(sum(11, 22, 33, 44, 55, 66, 99));
//o/p=> 330
console.log("===========");

//===Practice:Q===========
function example(a, ...b) {
  console.log(a);
  console.log(b);
}
example(12, 34, 45, 66, 77);
/* O/p:
12
[ 34, 45, 66, 77 ]
*/
