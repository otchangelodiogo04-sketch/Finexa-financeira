// FINEXA MAIN JS

document.addEventListener("DOMContentLoaded", () => {
  const user = sessionStorage.getItem("finexa_user");

  if (!user && window.location.pathname.includes("estudante")) {
    window.location.href = "login.html";
  }
});
