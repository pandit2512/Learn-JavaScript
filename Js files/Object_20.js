//Creating Object using Object()
const Vehicle = Object();
Vehicle.id = "MH101";
Vehicle.name = "Skoda";
Vehicle.description = "Portable Car";

console.log(typeof Vehicle, Vehicle);
console.log("========");
//==================
const Vhub = {
  vId: "x02",
  vType: "Entertainment",
};

console.log(Object.keys(Vhub));
console.log(Object.values(Vhub));
console.log(Object.entries(Vhub));
console.log("========");

//===================
//for in loop

for (let key in Vhub) {
  console.log(key, Vhub[key]);
}

//=============
const student = { id: 101, name: "Amex" };
console.log(student);

const newStudent = { student, ["marks"]: 45 };
console.log(newStudent);
//=> this will create a nested object and changes will happen in
// same object
//Now usin spread opretor , we can create new Object
const newStudents = { ...student, ["marks"]: 45 };

console.log(newStudents);

//Practice Q
const details1 = { id: 101, name: "samiksha" };
const details2 = { marks: 56 };
const newDetails = { ...details1, ...details2 };
console.log(newDetails);

//now creating Object inside an Object
const user = {
  id: 101,
  name: "Maxx",
  address: { city: "Mumbai", state: "Maharashtra", pincode: 400045 },
  orders: ["o1", "o2", "o3"],
  category: [{ c1: ["p1", "p2", "p3"] }, { c2: ["p1"] }],
};

console.log(user["address"]);
console.log(user["address"]["pincode"]); //=> 400045
console.log(user["address"]["pincode"], user["address"]["city"]);
//=>400045 Mumbai
//return how many orders given by user
console.log("user Orders: " + user["orders"].length);

//return no of products present in each category
console.log(user["category"][0]);
console.log(user["category"][0]["c1"].length, user["category"][1]["c2"].length);
