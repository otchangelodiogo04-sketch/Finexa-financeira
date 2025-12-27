/* =========================
   REGISTRO
   ========================= */
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const full_name = document.getElementById("full_name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const profile = document.getElementById("profile").value;

  fetch("http://127.0.0.1:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ full_name, email, password, profile })
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error);
        return;
      }

      localStorage.setItem("user_email", email);
      localStorage.setItem("user_profile", profile);

      redirectProfile(profile);
    })
    .catch(() => alert("Erro ao conectar com o servidor"));
});


/* =========================
   LOGIN
   ========================= */
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert("Email ou senha inválidos");
        return;
      }

      localStorage.setItem("user_email", email);
      localStorage.setItem("user_profile", data.profile);

      redirectProfile(data.profile);
    })
    .catch(() => alert("Erro ao conectar com o servidor"));
});


/* =========================
   REDIRECT
   ========================= */
function redirectProfile(profile) {
  if (profile === "crianca") window.location.href = "crianca.html";
  if (profile === "adulto") window.location.href = "adulto.html";
  if (profile === "pais") window.location.href = "pais.html";
}
