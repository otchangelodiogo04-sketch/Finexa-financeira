// ================================
// CONFIG
// ================================
const AUTH_KEY = "finexa_auth";
const USER_KEY = "finexa_user";

// ================================
// VALIDAÇÃO DE SENHA (FORTE)
// ================================
function senhaForte(senha) {
  return (
    senha.length >= 8 &&
    /[A-Z]/.test(senha) &&
    /[0-9]/.test(senha) &&
    /[^A-Za-z0-9]/.test(senha)
  );
}

// ================================
// REGISTRO (SEM ALTERAR LAYOUT)
// ================================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    if (!senhaForte(password)) {
      alert(
        "Senha fraca!\n\nRequisitos:\n• 8 caracteres\n• 1 letra maiúscula\n• 1 número\n• 1 símbolo"
      );
      return;
    }

    const user = { name, email, password, provider: "local" };

    localStorage.setItem(USER_KEY, JSON.stringify(user));
    sessionStorage.setItem(AUTH_KEY, "true");

    // 🔁 entra direto no sistema
    window.location.href = "dashboard.html";
  });
}

// ================================
// LOGIN NORMAL
// ================================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    const user = JSON.parse(localStorage.getItem(USER_KEY));

    if (user && user.email === email && user.password === password) {
      sessionStorage.setItem(AUTH_KEY, "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Email ou senha inválidos");
    }
  });
}

// ================================
// PROTEÇÃO DE PÁGINAS
// ================================
function protegerPagina() {
  if (!sessionStorage.getItem(AUTH_KEY)) {
    window.location.href = "login.html";
  }
}

// ================================
// LOGOUT
// ================================
function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}
