const todoform = document.querySelector(".js-ToDoForm"),
  todoinput = todoform.querySelector("input"),
  todolist = document.querySelector(".js-ToDo");

const TODO_LS = "toDos";

function loadTodos() {
  const toDos = localStorage.getItem(TODO_LS);
  if (toDos !== null) {
  }
}
// document에서 선택해오는 게 아니고, 새로운 요소 만들고자 할 때 createElement()
// {element}.addChild #child를 추가
function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);

  todolist.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoinput.value;
  paintTodo(currentValue);
  todoinput.value = "";
}

function init() {
  loadTodos();
  todoform.addEventListener("submit", handleSubmit);
}
init();
