const todoform = document.querySelector(".js-ToDoForm"),
  todoinput = todoform.querySelector("input"),
  todolist = document.querySelector(".js-ToDo");

const TODO_LS = "toDos";

const toDos = []; // list of todos => array로

function saveTodos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos)); // javascript obejct -> string으로 변환
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODO_LS);
  if (loadedTodos !== null) {
    const parsedToDos = JSON.parse(loadedTodos); //Json parsing = string-> object로 변환!
    parsedToDos.forEach(function (toDo) {
      // array의 각 element에 대해 실행하는 function
      paintTodo(toDo.text);
    });
  }
}
// document에서 선택해오는 게 아니고, 새로운 요소 만들고자 할 때 createElement()
// {element}.addChild #child를 추가
function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  todolist.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveTodos();
}

function deleteTodo(id) {}

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
