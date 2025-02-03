//Event bubbling (child to parent)
document.querySelector(".container").addEventListener(
  "click",
  (e) => {
    //e.stopPropagation();
    alert("container");
  },
  true
);

document.querySelector(".box").addEventListener(
  "click",
  (e) => {
    //e.stopPropagation();
    alert("box");
  },
  true
);

document.querySelector(".heading").addEventListener(
  "click",
  (e) => {
    //e.stopPropagation();
    alert("heading");
  },
  true
);

/*
when you will click Container- only container alert will be shown
after clicking box--> box alert > then conatiner alert
On clickin heading > box > container
*/

/* 
After adding e.stoppropogation().. only clickable event will be shown
*/

//Event Capturing:
/*
 document.querySelector(".box").addEventListener("click", () => {},true)
 Note: in Event Bubbling boolean argument is Bydefault false 

*/
