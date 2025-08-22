const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const listContainer = document.querySelector(".listContainer");

function add() {
  if (input.value === "") {
    alert("Write something");
  } else {
    // creating li
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    // creating edit
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    li.appendChild(editBtn);

    // creating delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);
  }
}
