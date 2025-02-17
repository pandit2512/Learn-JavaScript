/*
1. The Problem
Traditionally, JavaScript handles operations like network requests or file 
reading using callbacks or promises. However, these can make your code messy
 and hard to read.

2. The Solution: Async/Await
Async and await are syntactic sugar that make asynchronous code look more 
like synchronous (step-by-step) code, which is easier to read and write.
*/

async function getData() {
  const data = await fetch("https://api.nationalize.io?name=nathaniel");
  const jsonData = await data.json();
  console.log(jsonData);
}

getData();

//=============================

async function getUser() {
  return { id: 101, name: " Manish" };
}
const user = getUser();
console.log(user);
//NOTE: Here you will be getting Object Wrapped in Promise
//To use await your function has to start with async keyword
