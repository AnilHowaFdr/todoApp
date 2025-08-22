const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const listContainer = document.querySelector(".listContainer");

function add() {
  if (input.value === "") {
    alert("Write something");
  } else {
    // creating li
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = input.value;
    li.appendChild(p);
    listContainer.appendChild(li);

    // creating edit
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("green");
    li.appendChild(editBtn);

    // creating delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("red");
    li.appendChild(deleteBtn);
    input.value = "";
  }
}

// editBtn.addEventListener("click",(e)=>{
// if
// })
