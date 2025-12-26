// auth.js

function registrar(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const perfil = document.getElementById("perfil").value;

  const usuario = {
    nome,
    email,
    senha,
    perfil
  };

  localStorage.setItem("finexaUser", JSON.stringify(usuario));

  window.location.href = "estudante.html";
}

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = JSON.parse(localStorage.getItem("finexaUser"));

  if (!usuario) {
    alert("Nenhum usuário cadastrado.");
    return;
  }

  if (email === usuario.email && senha === usuario.senha) {
    window.location.href = "estudante.html";
  } else {
    alert("Email ou senha incorretos.");
  }
}

function protegerPagina() {
  const usuario = localStorage.getItem("finexaUser");
  if (!usuario) {
    window.location.href = "login.html";
  }
}

function sair() {
  localStorage.removeItem("finexaUser");
  window.location.href = "login.html";
}
