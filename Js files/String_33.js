let names = "Hello";

console.log(names.toLowerCase());
console.log(names.toUpperCase());

console.log(names.includes("ll"));

const products = [
  "Chair",
  "Green table",
  "Green Apple",
  "green Tshirt",
  "Bottle",
  "Ever green",
];

//Q.Return Products includes "Green"
products
  .filter((e) => e.toLowerCase().includes("green"))
  .forEach((e) => console.log(e));
