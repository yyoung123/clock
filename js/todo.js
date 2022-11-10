const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
//데이터베이스에서 todo 내용을 추가하는 곳
let toDos = [];
//todos array에 넣은 후 로컬스로리지에 넣기
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//object를 stringify로 string으로 만들어 준다음 json.parse로 배열로 만들기
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(li.id);
  console.log(typeof li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}
todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
//console.log(savedTodos); //string
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  //console.log(parsedTodos); //array
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);

  //parsedTodos.forEach((item) => console.log("this is turn of item", item));
  // parsedTodos.forEach((element) => {});
}
/*array에 forEach 라는 것이 있다. function을 실행하게 해주는데
그 array에 있는 item을 각각 실행하게 해준다.
  parsedTodos.forEach(sayHello); 
이 array의 item 들에 대해 한개의 function만 실행할수 있게한다.*/

//paintTodo()는 newTodo 인수의 값으로 newTodoObj라는 object를 받고 있다.
