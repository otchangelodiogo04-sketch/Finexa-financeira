// ===============================
// FINEXA - AUTH (SEM BACKEND)
// ===============================

// Simulação de base local
const usersKey = "finexa_users";

// REGISTRO
function registerUser(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const perfil = document.getElementById("perfil").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!nome || !perfil || !email || !senha) return;

  const users = JSON.parse(localStorage.getItem(usersKey)) || [];

  users.push({ nome, perfil, email, senha });

  localStorage.setItem(usersKey, JSON.stringify(users));
  window.location.href = "login.html";
}

// LOGIN
function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const users = JSON.parse(localStorage.getItem(usersKey)) || [];
  const user = users.find(u => u.email === email && u.senha === senha);

  if (!user) {
    alert("Credenciais inválidas");
    return;
  }

  sessionStorage.setItem("finexa_user", JSON.stringify(user));

  if (user.perfil === "estudante") {
    window.location.href = "estudante.html";
  } else {
    window.location.href = "https://dashboard-empreendedor.exemplo";
  }
}

// LOGOUT (quando usar depois)
function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}
