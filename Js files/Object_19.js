//Create an empty object
let obj = {};
console.log(typeof obj);
//==================
let jobportal = {
  empId: 101,
  empName: "Amex",
  empAge: 25,
};

console.log(typeof jobportal);
//O/p=> Object

console.log(jobportal.empAge); //o/p=> 25
console.log(jobportal["empAge"]); //o/p=> 25
console.log(jobportal);
console.log("=========");

let school = {
  schoolId: "SCH101",
  schoolName: "Oxford",
  subjects: ["Maths", "Science", "english"],
};
console.log(school);
//print the number of subject taught by school
console.log(school.subjects.length);
console.log(school["subjects"].length);

//print subjects with its index
school.subjects.map((value, idx) => console.log(value, idx));
/* O/P=>
Maths 0
Science 1
english 2
*/
console.log("===========");
//=================

const jobseek = {
  empId: 101,
  empName: "Amex",
  empAge: 25,
  details: function () {
    console.log("Details are: ", this.empId, this.empName, this.empAge);
  //here this refers to current object
  }
};

jobseek.details();
//o/p=> Details are:  101 Amex 25