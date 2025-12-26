function registerUser(e) {
  e.preventDefault();

  const user = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value,
    perfil: document.getElementById("perfil").value
  };

  localStorage.setItem("finexaUser", JSON.stringify(user));
  redirectPerfil(user.perfil);
}

function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const user = JSON.parse(localStorage.getItem("finexaUser"));

  if (!user || user.email !== email || user.senha !== senha) {
    alert("Dados inválidos");
    return;
  }

  redirectPerfil(user.perfil);
}

function redirectPerfil(perfil) {
  if (perfil === "crianca") location.href = "crianca.html";
  if (perfil === "adulto") location.href = "adulto.html";
  if (perfil === "pais") location.href = "pais.html";
}

function logout() {
  localStorage.removeItem("finexaUser");
  location.href = "login.html";
}
