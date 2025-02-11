const numbers = ["10", 20, null, 40, 50];

const [n1, n2] = numbers;

console.log(numbers);
console.log(n1, typeof n1);
console.log(n2, typeof n2);

//destructuring using rest operator
const [v1, v2, ...v3] = numbers;

console.log(v1, v2, v3);

console.log("===========");

//Object Destructuring
let jobPortal = {
  id: 101,
  name: "Amex",
};

//Note: name of variable should be same as instance variable
let { id, name } = jobPortal;

console.log(id, name);

console.log("==============");
//=================================

//Object Destructuring using Function
//old way: function joDetails(obj){} ==> obj.id,obj.name
function jobDetails({ id, name }) {
  console.log("Id is ", id);
  console.log("name is ", name);
}

jobDetails(jobPortal);

jobDetails({ id: 102, name: "Admino" });
jobDetails({ id: 103, name: "Punkk" });
