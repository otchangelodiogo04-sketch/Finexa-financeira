const conteudos = {

  /* ===== ADULTOS ===== */
  adulto_1: {
    titulo: "Fundamentos da Educação Financeira",
    subtitulo: "Compreender antes de controlar",
    texto: `
      <p>Educação financeira é a base para decisões conscientes.</p>
      <p>Ela ajuda a evitar dívidas e a planejar o futuro.</p>
    `
  },

  adulto_2: {
    titulo: "Organização de Gastos",
    subtitulo: "Controle total do dinheiro",
    texto: `
      <p>Organizar gastos é essencial para ter clareza financeira.</p>
      <ul>
        <li>Gastos fixos</li>
        <li>Gastos variáveis</li>
        <li>Gastos supérfluos</li>
      </ul>
    `
  },

  adulto_3: {
    titulo: "Planejamento Financeiro",
    subtitulo: "Planejar é viver com tranquilidade",
    texto: `
      <p>Planejar ajuda a alcançar objetivos.</p>
      <p>Curto, médio e longo prazo.</p>
    `
  },

  adulto_4: {
    titulo: "Reserva de Emergência",
    subtitulo: "Proteção financeira",
    texto: `
      <p>Reserva financeira evita dívidas em emergências.</p>
    `
  },

  adulto_5: {
    titulo: "Dívidas e Consumo",
    subtitulo: "Consumir com consciência",
    texto: `
      <p>Evite compras impulsivas.</p>
    `
  },

  adulto_6: {
    titulo: "Mentalidade Financeira",
    subtitulo: "O dinheiro começa na mente",
    texto: `
      <p>Mudar a mentalidade muda resultados.</p>
    `
  },

  /* ===== PAIS ===== */
  pais_1: {
    titulo: "O Papel dos Pais",
    subtitulo: "Educação começa em casa",
    texto: `
      <p>Os filhos aprendem pelo exemplo.</p>
    `
  },

  pais_2: {
    titulo: "Ensinar a Poupar",
    subtitulo: "Hábito desde cedo",
    texto: `
      <p>Poupar ensina paciência.</p>
    `
  },

  pais_3: {
    titulo: "Mesada Consciente",
    subtitulo: "Ferramenta educativa",
    texto: `
      <p>Mesada ensina escolhas.</p>
    `
  },

  pais_4: {
    titulo: "Diálogo Financeiro",
    subtitulo: "Conversar é educar",
    texto: `
      <p>Falar sobre dinheiro reduz medos.</p>
    `
  },

  pais_5: {
    titulo: "Planejamento Familiar",
    subtitulo: "Organização traz paz",
    texto: `
      <p>Planejar juntos fortalece a família.</p>
    `
  },

  pais_6: {
    titulo: "Preparar para o Futuro",
    subtitulo: "Educação é herança",
    texto: `
      <p>Ensinar hoje garante autonomia amanhã.</p>
    `
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (conteudos[id]) {
  document.getElementById("titulo").innerHTML = conteudos[id].titulo;
  document.getElementById("subtitulo").innerHTML = conteudos[id].subtitulo;
  document.getElementById("conteudo").innerHTML = conteudos[id].texto;
}
