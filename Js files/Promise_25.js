//Promise
// Pending==> Fulfilled==> Rejected
/* Pending: The initial state, neither fulfilled nor rejected.

Fulfilled: The operation completed successfully.

Rejected: The operation failed. */

//Note: promise is Asynchronous in behaviour
const p1 = new Promise(function (resolve, reject) {
  //here resolve , reject are callback function

  let proposeStatus = true;
  if (proposeStatus) resolve("Proposal Accepted");
  else reject("Proposal Rejected");
});
//then() ,catch(), finally()
//p1.then((data) => console.log(data))
//p1.catch((data) => console.log(data));

//Method Chaining
p1.then((data) => console.log(data))
  .catch((data) => console.log(data))
  .finally(() => console.log("finally"));

console.log("===============");
//==================================================

//Q.2
let promise = new Promise((resolve, reject) => {
  let isPizzaDelivered = true;

  if (isPizzaDelivered) {
    resolve("Pizza is delivered!");
  } else {
    reject("No pizza today.");
  }
});

// Consuming the promise
promise
  .then((message) => {
    console.log(message); // Pizza is delivered!
  })
  .catch((error) => {
    console.log(error); // No pizza today.
  });
