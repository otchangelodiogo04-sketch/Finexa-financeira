function checkLogin() {
  if (!localStorage.getItem("user_email")) {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

checkLogin();
