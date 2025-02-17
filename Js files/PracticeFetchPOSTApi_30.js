//Adding Object to Server using Js
//Using Postman: postman(Adding Object)=> Eclipse(read the Object through ORM)=> MySql
//Js(Adding Object to Our project using api link)=>eclipse(read the Object)=>Mysql=>

//Sending POST Request to the Server

const product = {
  productName: "testProduct",
  productDescription: "testDescription",
  productPrice: 5000,
};

//Fetch Takes Two Arguments
//1.API link, 2.Object Which has info related to the server
fetch("http://localhost:8080/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(product),
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  });

//==========================
//Q.2

const user = {
  firstName: "Emily",
  lastName: "Patni",
  phoneNumber: 9075234890,
  age: 24,
  password: "User@1235",
  confirmPassword: "User@1235",
  email: "amily12@gmail.com",
};

fetch("http://localhost:8080/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(user),
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  });

//form create=>Object Store==> after clicking on button your Object should be Added
