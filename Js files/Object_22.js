//Practice Question
const users = [
  {
    id: "4c99402c-e680-481a-8b7d-c6b206ec0c30",
    firstName: "Nitya",
    lastName: "Sharma",
    phoneNo: "+91-9376192967",
    age: 15,
    password: "User@12345",
    confirmPassword: null,
    email: "jdfhfjfifidufidufidufdfh@gmail.com",
    address: null,
  },
  {
    id: "624b30c8-0ae5-4741-ab79-f4a37d33ffb2",
    firstName: "Mohan",
    lastName: "Sharma",
    phoneNo: "8976192967",
    age: 23,
    password: "User@12345",
    confirmPassword: null,
    email: "jdfhfjdfjdfh@gmail.com",
    address: null,
  },
  {
    id: "8f5ffe92-c1b3-4221-a212-376b6a55c0ff",
    firstName: "Amex",
    lastName: "Sharma",
    phoneNo: "23347834",
    age: 24,
    password: "User@12345",
    confirmPassword: null,
    email: "nityasharvbvbvma@gmail.com",
    address: null,
  },
  {
    id: "99cd7509-e1fc-4f2b-a015-3f378f6439e2",
    firstName: "Soham",
    lastName: "Sharma",
    phoneNo: "+91-9976192967",
    age: 20,
    password: "User@12345",
    confirmPassword: null,
    email: "jdfhfjdfgdfh@gmail.com",
    address: null,
  },
  {
    id: "c7990a92-93bd-4d90-b2b3-4926434d1c1b",
    firstName: "Rajneesh",
    lastName: "Sharma",
    phoneNo: "2335664756834",
    age: 20,
    password: "User@12345",
    confirmPassword: null,
    email: "rajneeshfgfggamer@gmail.com",
    address: null,
  },
  {
    id: "d4b082f0-51c9-4348-8477-c5cc65a6dda4",
    firstName: "Monal",
    lastName: "Sharma",
    phoneNo: "9875455444",
    age: 17,
    password: "User@12345",
    confirmPassword: null,
    email: "monal@gmail.com",
    address: {
      addressId: 2,
      addressLine1: "435/B Tall Bldg",
      addressLine2: "Karve nagar",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: 400075,
    },
  },
];

//print name of 1st user
console.log(users[0]["firstName"]); //=> Nitya

//return how many users are there
console.log(users.length); //=>6

console.log(users.forEach((n) => console.log(n["firstName"])));
//return users name age above 20
console.log("==============");
users
  .filter((n) => n["age"] > 20)
  .forEach((user) => {
    console.log(user["firstName"]);
  });
