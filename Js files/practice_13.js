//onclicking the "Add subject " subject button ,subjects should get added in unordered list

const inputBox = document.getElementById("subjects");
const list = document.getElementById("subjectsList");

const addSubjects = function () {
  let value = inputBox.value;

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  list.appendChild(li);
};

//when clicking button,<h1> heading should be added

const addHeading = function () {
  const heading = document.getElementById("heading");
  let value = heading.innerText;

  const head = document.createElement("h1");
  head.appendChild(document.createTextNode(value));

  document.body.appendChild(head);
};
