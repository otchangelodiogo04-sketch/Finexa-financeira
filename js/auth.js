// ===============================
// REGISTER
// ===============================
function registerUser(event) {
  event.preventDefault(); // 🔴 ESSENCIAL

  const full_name = document.getElementById("full_name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value;
  const profile = document.getElementById("profile")?.value;

  if (!full_name || !email || !password || !profile) {
    alert("Preencha todos os campos");
    return;
  }

  const users = JSON.parse(localStorage.getItem("finexa_users")) || [];

  if (users.find(u => u.email === email)) {
    alert("Este email já está registrado");
    return;
  }

  const user = {
    full_name,
    email,
    password,
    profile,
    progress: {},
    points: 0,
    trophies: []
  };

  users.push(user);

  localStorage.setItem("finexa_users", JSON.stringify(users));
  localStorage.setItem("finexa_user", JSON.stringify(user));

  redirectByProfile(profile);
}


// ===============================
// LOGIN
// ===============================
function loginUser(event) {
  event.preventDefault(); // 🔴 ESSENCIAL

  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value;

  const users = JSON.parse(localStorage.getItem("finexa_users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Email ou senha inválidos");
    return;
  }

  localStorage.setItem("finexa_user", JSON.stringify(user));
  redirectByProfile(user.profile);
}


// ===============================
// REDIRECT
// ===============================
function redirectByProfile(profile) {
  if (profile === "crianca") window.location.href = "crianca.html";
  if (profile === "adulto") window.location.href = "adulto.html";
  if (profile === "pais") window.location.href = "pais.html";
}
