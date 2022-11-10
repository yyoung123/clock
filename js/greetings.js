const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello, ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
