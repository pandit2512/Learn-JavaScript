// function: getElementByClass()
// if we use getElementByClass then you will get every element of that class

//after clicking button JavaScript should be replaced by React and with some background Color
function changeText() {
  document.querySelectorAll("h2")[3].textContent = "React";
  document.querySelectorAll("h2")[3].style.backgroundColor = "pink";
}
