//EvenListener: after clicking you will get to see the change/output
/*
An EventListener in JavaScript is a way to make your web pages 
interactive. It "listens" for specific events, like clicks, key presses, 
or mouse movements, and then triggers a function to run when those events occur.
*/

document.getElementById("box").addEventListener("click", (e) => {
  e.target.style.borderRadius = "50%";
  //here e is a object of event
});

document.forms[0].addEventListener("submit", (e) => {
  //here form[0]--> indicates there is only 1 form in html cllection present at 0ih index
  e.preventDefault();
  console.log(e.target); //it will return form after clicking
  console.log(e.target.username.value); //return input box with username
  console.log(e.target.emailId.value);
});

document.forms[1].addEventListener("submit", (e) => {
  //here form[0]--> indicates there is only 1 form in html cllection present at 0ih index
  e.preventDefault();
  console.log(e.target); //it will return form after clicking
  console.log(e.target.studentName.value); //return input box with username
  console.log(e.target.marks.value);
});
