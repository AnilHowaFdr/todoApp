const listToDo = document.querySelector(".listToDo");
const inputBox = document.querySelector("#inputBox");
const inputBtn = document.querySelector("#inputBtn");

function addItem() {
  if (inputBox.value === "") {
    alert("Write somthing");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listToDo.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    listToDo.appendChild(span);
  }
  inputBox.value = "";
}

// listToDo.addEventListener("click",(e)=>{
//     if(e.target.)
// })
