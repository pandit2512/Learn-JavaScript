function changeColor() {
  document.getElementById("button").style.backgroundColor = "red";
}

//Practice:after clicking on div it should convert in circle and it should change it's color
function changeDivShape() {
  var box = document.getElementById("box");
  box.style.borderRadius = "50%";
  box.style.backgroundColor = "green";
}

//After clicking on each div it should change its shape and color(only clicked div should be changed)
function makeCircle() {
  var box1 = document.getElementById("box1");
  box1.style.borderRadius = "50%";
  box1.style.backgroundColor = "green";

  var box2 = document.getElementById("box2");
  box2.style.borderRadius = "50%";
  box2.style.backgroundColor = "Orange";

  var box3 = document.getElementById("box3");
  box3.style.borderRadius = "50%";
  box3.style.backgroundColor = "red";
}
