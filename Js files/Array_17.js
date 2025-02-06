let numbers = [12, 67, 34, 55, 67];

let a = [...numbers, 100, 200];
//spread operator {...}
console.log(a);
console.log("===========");

//combine these two array in another Array
let p = [11, 12];
let q = [13, 14];

let r = [...p, ...q];

console.log(r);
console.log("===========");
//=====
let s = [
  [11, 12],
  [100, 200, 300],
];

console.log(s[1][2]);
console.log("===========");
//push & pop
let flowers = ["Rose", "Lotus", "Sunflower"];
flowers.push("Lily");
console.log(flowers);
flowers.pop();
console.log(flowers);
console.log("===========");
//===================
//shift --> remove first element of array
//unshift --> add element at start
let arr = ["A", "B", "C"];
arr.shift();
console.log(arr);

arr.unshift("D");
console.log(arr);
console.log("===========");
//map()--> map takes arrow function as argument
//map(n,i,a)--> here first argument represent elemet and
// 2nd argument(i) index , 3rd(a) => entire array

let names = ["Amex", "Admino", "Mili"];
names.map((n, idx, arr) => {
  console.log(n, idx, arr);
});
console.log("===========");
//===================
//filter=>
let num = [11, 22, 33, 44, 55, 66, 100];
//print odd numbers
let ans = num.filter((n) => n % 2 == 1);
console.log(ans);
//print no. > 11
let res = num.filter((n) => n > 11);
console.log(res);

//print no > 20 and odd no.

let ans1 = num.filter((n) => n > 20 && n % 2 == 1);
console.log(ans1);
console.log("===========");
//=========================
//sort(a,b)=> takes arrow function as argument
//asending(a-b) ,descending (b-a)

num.sort((a, b) => b - a);
console.log(num);
console.log("===========");
//==================
//reduce()
let ans2 = num.reduce((a, b) => a + b);
console.log(ans2);
