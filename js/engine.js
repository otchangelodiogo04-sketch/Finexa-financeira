let quizIndex = 0;
let quizGames = [];

function startGame() {
  quizGames = games.filter(g => g.perfil === "crianca");
  quizIndex = 0;
  renderQuiz();
}

function renderQuiz() {
  const c = document.getElementById("game-container");
  const q = quizGames[quizIndex];

  c.innerHTML = `
    <div class="game-card">
      <h3>${q.pergunta}</h3>
      ${q.opcoes.map((o,i)=>`
        <button onclick="answer(${i})">${o}</button>
      `).join("")}
    </div>
  `;
}

function answer(i) {
  const q = quizGames[quizIndex];
  const c = document.getElementById("game-container");

  c.innerHTML += `
    <p class="${i===q.correta?'correct':'wrong'}">
      ${q.explicacao}
    </p>
    <button onclick="next()">Próximo</button>
  `;
}

function next() {
  quizIndex++;
  if (quizIndex < quizGames.length) renderQuiz();
  else alert("🎉 Parabéns!");
}
