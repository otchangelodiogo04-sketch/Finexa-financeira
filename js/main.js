const toggleTheme = document.getElementById("themeToggle");

function aplicarTema() {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.className = theme;
}

if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    const novoTema = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", novoTema);
    aplicarTema();
  });
}

aplicarTema();
