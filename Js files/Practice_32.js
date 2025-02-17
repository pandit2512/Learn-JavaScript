console.log(window.screen);
console.log(window.history);
//=========================
document.getElementById("toggle-button").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

//Q. when you will offline it will should show Offline and Vice-versa
const heading = document.querySelector(".heading");

window.addEventListener("online", () => {
  heading.innerHTML = "You are Online";
});

window.addEventListener("offline", () => {
  heading.innerHTML = "You are Offline";
});
