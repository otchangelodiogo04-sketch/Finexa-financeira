let totalPontos = 0;
let modulosConcluidos = 0;

for (let i = 1; i <= 3; i++) {
  const pontos = Number(localStorage.getItem(`modulo${i}_score`)) || 0;
  totalPontos += pontos;

  if (localStorage.getItem(`modulo${i}`) === "concluido") {
    modulosConcluidos++;

    const card = document.getElementById(`trofeu${i}`);
    card.style.borderColor = "#22c55e";
    card.querySelector("i").style.color = "#22c55e";
  }
}

document.getElementById("total-pontos").innerText = `${totalPontos} pontos`;

const percent = (modulosConcluidos / 3) * 100;
document.getElementById("progress-geral").style.width = percent + "%";
document.getElementById("progress-text").innerText =
  `Módulos concluídos: ${modulosConcluidos} de 3`;
