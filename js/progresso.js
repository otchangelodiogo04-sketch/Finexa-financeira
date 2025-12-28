function saveProgress(module, score) {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  progress[module] = Math.max(progress[module] || 0, score);
  localStorage.setItem("progress", JSON.stringify(progress));
}

function loadTrofeus() {
  const data = JSON.parse(localStorage.getItem("progress")) || {};
  const container = document.getElementById("trofeus");

  for (let mod in data) {
    container.innerHTML += `
      <div class="trofeu">
        <h3>${mod}</h3>
        <p>Pontos: ${data[mod]}</p>
      </div>
    `;
  }
}

if (document.getElementById("trofeus")) {
  loadTrofeus();
}
