let current = 0;
let score = 0;

const questions = [
  { q: "Para que serve o dinheiro?", a: "Trocar por coisas" },
  { q: "Poupar é bom?", a: "Sim" },
  { q: "Comprar tudo que quer é bom?", a: "Não" }
];

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].q;
}

function answer(value) {
  if (value === questions[current].a) {
    score += 10;
    current++;

    if (current < questions.length) {
      loadQuestion();
    } else {
      saveProgress();
      alert("Parabéns! Pontuação: " + score);
    }
  } else {
    alert("Tenta novamente!");
  }
}

function saveProgress() {
  fetch("http://127.0.0.1:5000/progresso", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: localStorage.getItem("user_email"),
      module: "crianca_modulo_1",
      score: score
    })
  });
}

loadQuestion();
