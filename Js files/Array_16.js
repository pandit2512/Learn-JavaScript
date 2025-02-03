let names = ["Amit", "Admino", "Punkk", "Sam"];

const nameListDiv = document.getElementById("nameList");

names.forEach((name) => {
  const nameItem = document.createElement("p");
  nameItem.textContent = name;
  nameListDiv.appendChild(nameItem);
});

//Another Way:
names.forEach((names) => {
  document.write(`<h2>${names}</h2>`);
});
//===================================
//Pring "Hello" in mentioned colors
let colors = ["red", "green", "orange", "purple"];

colors.forEach((color) => {
  document.write(`<p style="color:${color}">Hello</p>`);
});
//=====================
//Q. sum of numbers

let numbers = [11, 45, 75];
let sum = 0;
numbers.forEach((number) => {
  sum = sum + number;
});
document.write(`<h2 style="color:orangered"> 
  sum is ${sum}
  </h2>`);
