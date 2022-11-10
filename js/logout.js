const logout = document.querySelector("#logout");
logout.addEventListener("click", clearUserInfo);
function clearUserInfo() {
  localStorage.clear();
  location.reload();
}
