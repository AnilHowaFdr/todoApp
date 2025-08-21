const input = document.querySelector(".search input");
// const btn = document.querySelector(".search button");
const list = document.querySelector(".list");

function add() {
  if (input.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function listData() {
  list.innerHTML = localStorage.getItem("data");
}
listData();
