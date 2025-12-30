let soundCorrect, soundWrong;

document.addEventListener("click", () => {
  soundCorrect = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3");
  soundWrong = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3");

  soundCorrect.volume = 1;
  soundWrong.volume = 1;
}, { once: true });

const params = new URLSearchParams(window.location.search);
const modulo = Number(params.get("modulo")) || 1;

const gameTitle = document.getElementById("gameTitle");
gameTitle.innerText = `Módulo ${modulo}`;

const modules = {
  1: [
    { type: "tf", question: "Poupar é guardar dinheiro.", correct: true },
    { type: "mc", question: "Para que serve o dinheiro?",
      options: ["Brincar", "Comprar coisas importantes", "Nada"], correct: 1 }
  ],
  2: [
    { type: "tf", question: "Planejar gastos é importante.", correct: true },
    { type: "mc", question: "Qual é uma boa escolha?",
      options: ["Gastar tudo", "Poupar um pouco", "Não pensar"], correct: 1 }
  ],
  3: [
    { type: "tf", question: "Pensar antes de gastar é inteligente.", correct: true },
    { type: "mc", question: "Dinheiro ajuda a:",
      options: ["Criar problemas", "Realizar objetivos", "Nada"], correct: 1 }
  ]
};

const questions = modules[modulo];

// 🔹 RECUPERAR PROGRESSO
let current = Number(localStorage.getItem(`modulo${modulo}_current`)) || 0;
let score = Number(localStorage.getItem(`modulo${modulo}_score`)) || 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");

function saveProgress() {
  localStorage.setItem(`modulo${modulo}_current`, current);
  localStorage.setItem(`modulo${modulo}_score`, score);
}

function loadQuestion() {
  const q = questions[current];
  questionEl.innerText = q.question;
  answersEl.innerHTML = "";
  feedbackEl.innerText = "";

  if (q.type === "tf") {
    createBtn("Verdadeiro", true);
    createBtn("Falso", false);
  } else {
    q.options.forEach((opt, i) => createBtn(opt, i));
  }

  progressEl.innerText = `Pergunta ${current + 1} de ${questions.length}`;
  scoreEl.innerText = `⭐ Pontos: ${score}`;
}

function createBtn(text, value) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.onclick = () => answer(value);
  answersEl.appendChild(btn);
}

function answer(value) {
  const q = questions[current];
  const correct =
    (q.type === "tf" && value === q.correct) ||
    (q.type === "mc" && value === q.correct);

  if (correct) {
  score += 10;
  feedbackEl.innerText = "✔ Correto!";
  feedbackEl.style.color = "#22c55e";

  soundCorrect.play();

  questionEl.classList.add("pulse");
  setTimeout(() => questionEl.classList.remove("pulse"), 500);

  current++;
  saveProgress();

  setTimeout(() => {
    current < questions.length ? loadQuestion() : finish();
  }, 900);

} else {
  feedbackEl.innerText = "✖ Tenta outra vez!";
  feedbackEl.style.color = "#ef4444";

  soundWrong.play();

  questionEl.classList.add("shake");
  setTimeout(() => questionEl.classList.remove("shake"), 500);
}
}

function finish() {
  if (score === questions.length * 10) {
    localStorage.setItem(`modulo${modulo}`, "concluido");

    // 🧹 LIMPAR PROGRESSO DO MÓDULO
    localStorage.removeItem(`modulo${modulo}_current`);
    localStorage.removeItem(`modulo${modulo}_score`);

    if (modulo === 3) {
      localStorage.setItem("medalha", "ouro");
      alert("🏅 Medalha de Ouro conquistada!");
    } else {
      alert("⭐ Módulo concluído!");
    }

    window.location.href = "crianca.html";
  } else {
    alert("Precisas acertar todas!");
    current = 0;
    score = 0;
    saveProgress();
    loadQuestion();
  }
}

function exitGame() {
  saveProgress();
  if (confirm("Queres sair do jogo?")) {
    window.location.href = "crianca.html";
  }
}

loadQuestion();
