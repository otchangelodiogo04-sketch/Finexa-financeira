// ==============================
// FINEXA - DASHBOARD EMPREENDEDOR
// app.js
// ==============================

// Estado do fluxo de caixa
let entradas = 0;
let saidas = 0;

// Elementos
const saldoEl = document.getElementById("saldo");
const entradasEl = document.getElementById("totalEntradas");
const saidasEl = document.getElementById("totalSaidas");
const listaFluxo = document.getElementById("listaFluxo");
const form = document.getElementById("formFluxo");

// Atualiza valores no topo
function atualizarResumo() {
  const saldo = entradas - saidas;
  saldoEl.textContent = saldo + " Kz";
  entradasEl.textContent = entradas + " Kz";
  saidasEl.textContent = saidas + " Kz";
}

// Adiciona linha na tabela
function adicionarLinha(tipo, descricao, valor) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td class="py-2 capitalize">${tipo}</td>
    <td>${descricao}</td>
    <td class="${tipo === 'entrada' ? 'text-green-400' : 'text-red-400'}">
      ${valor} Kz
    </td>
  `;

  listaFluxo.appendChild(tr);
}

// Evento do formulário
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const tipo = document.getElementById("tipo").value;
  const valor = Number(document.getElementById("valor").value);
  const descricao = document.getElementById("descricao").value;

  if (!tipo || !valor || !descricao) return;

  if (tipo === "entrada") {
    entradas += valor;
  } else {
    saidas += valor;
  }

  adicionarLinha(tipo, descricao, valor);
  atualizarResumo();

  form.reset();
});

// ==============================
// LOGOUT (SAIR)
// ==============================
function logout() {
  // Limpa dados da sessão (quando existir login real)
  localStorage.clear();
  sessionStorage.clear();

  // Redireciona para login
  window.location.href = "login.html";
}

// Captura link "Sair"
const sairLink = document.getElementById("btnSair");
if (sairLink) {
  sairLink.addEventListener("click", function (e) {
    e.preventDefault();
    logout();
  });
}

// Inicial
atualizarResumo();
