function displayName(name, color) {
  //${} --> means Value of
  document.write(`<p style="color: ${color}">Hello ${name}</p>`);
}
displayName("Amex", "red");
displayName("punkk", "orange");

function add(num1, num2) {
  document.write(`Addition is =  ${num1 + num2} `);
}
add(2.5, 3.5);
//----------------------------------------
function printAlert() {
  alert("Bye");
}
// function will be called , when button is clicked
//printAlert();

function showValues() {
  const userNameInput = document.getElementById("username");
  const ageInputBox = document.getElementById("age");

  document.write(
    `<h2>My name is ${userNameInput.value} and i am ${ageInputBox.value} years old</h2>`
  );
}
