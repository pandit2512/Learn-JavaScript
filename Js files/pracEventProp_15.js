//Array
console.log("hello");
let arr = [10, 20, 30];
console.log(arr[0], arr[2]);

console.log("lenth of array:" + arr.length);

arr[0] = 80;
console.log(arr);

arr[4] = 100;
console.log(arr);

//methods in Array

arr.forEach((n) => {
  console.log(n * n);
});

/*OUTPUT:
hello
10 30
lenth of array:3
[ 80, 20, 30 ]
[ 80, 20, 30, <1 empty item>, 100 ]
6400
400
900
10000
*/
