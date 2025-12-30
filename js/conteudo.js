/* ======================================================
   FINEXA - CONTEÚDO EDUCACIONAL
   Adultos & Pais
   ====================================================== */

const conteudos = {

  /* ===========================
     ADULTOS
     =========================== */

  adulto_1: {
    titulo: "Fundamentos da Educação Financeira",
    subtitulo: "Antes de controlar o dinheiro, é preciso compreendê-lo",
    texto: `
    <p>
    Educação financeira é o conjunto de conhecimentos e práticas que permitem
    tomar decisões conscientes sobre o uso do dinheiro ao longo da vida.
    </p>

    <p>
    Não se trata apenas de poupar, mas de compreender
    como o dinheiro afeta escolhas, comportamentos e objetivos.
    </p>

    <h3>Por que tantas pessoas enfrentam dificuldades financeiras?</h3>
    <ul>
      <li>Ausência de planejamento</li>
      <li>Consumo impulsivo</li>
      <li>Falta de controle dos gastos</li>
      <li>Metas financeiras inexistentes</li>
    </ul>

    <p>
    Ter educação financeira é viver com equilíbrio,
    não necessariamente ganhar muito.
    </p>
    `
  },

  adulto_2: {
    titulo: "Organização de Gastos",
    subtitulo: "Organizar é o primeiro passo para mudar",
    texto: `
    <p>
    Organização financeira começa com a clareza
    sobre para onde o dinheiro está indo.
    </p>

    <h3>Tipos de gastos</h3>
    <ul>
      <li><strong>Fixos:</strong> aluguel, transporte, contas</li>
      <li><strong>Variáveis:</strong> alimentação, lazer</li>
      <li><strong>Supérfluos:</strong> compras por impulso</li>
    </ul>

    <p>
    Pequenos gastos diários somados
    podem comprometer todo o orçamento.
    </p>
    `
  },

  adulto_3: {
    titulo: "Planejamento Financeiro",
    subtitulo: "Planejar é proteger o presente e o futuro",
    texto: `
    <p>
    Planejamento financeiro é definir objetivos claros
    e organizar o dinheiro para alcançá-los.
    </p>

    <h3>Etapas do planejamento</h3>
    <ol>
      <li>Conhecer sua renda</li>
      <li>Mapear gastos</li>
      <li>Definir metas</li>
      <li>Acompanhar resultados</li>
    </ol>

    <p>
    Planejar reduz a ansiedade e aumenta o controle.
    </p>
    `
  },

  /* ===========================
     PAIS
     =========================== */

  pais_1: {
    titulo: "O Papel dos Pais na Educação Financeira",
    subtitulo: "As crianças aprendem mais pelo exemplo",
    texto: `
    <p>
    O comportamento financeiro dos pais influencia diretamente
    a forma como as crianças lidarão com dinheiro no futuro.
    </p>

    <h3>O que as crianças observam?</h3>
    <ul>
      <li>Como os pais gastam</li>
      <li>Como lidam com dívidas</li>
      <li>Como conversam sobre dinheiro</li>
    </ul>

    <p>
    Educação financeira começa em casa.
    </p>
    `
  },

  pais_2: {
    titulo: "Ensinar Crianças a Poupar",
    subtitulo: "Poupar é aprender a esperar",
    texto: `
    <p>
    Poupar não é privação,
    mas aprender a adiar recompensas.
    </p>

    <h3>Benefícios</h3>
    <ul>
      <li>Autocontrole</li>
      <li>Responsabilidade</li>
      <li>Consciência financeira</li>
    </ul>

    <p>
    Use exemplos práticos para tornar o aprendizado real.
    </p>
    `
  },

  pais_3: {
    titulo: "Mesada Consciente",
    subtitulo: "Educar, não controlar",
    texto: `
    <p>
    A mesada é uma ferramenta educativa
    quando usada com orientação.
    </p>

    <h3>Boas práticas</h3>
    <ul>
      <li>Valor fixo</li>
      <li>Periodicidade definida</li>
      <li>Liberdade com responsabilidade</li>
    </ul>

    <p>
    O objetivo é ensinar escolhas,
    não evitar erros.
    </p>
    `
  }

};

/* ======================================================
   CARREGAR CONTEÚDO
   ====================================================== */

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (conteudos[id]) {
  document.getElementById("titulo").innerHTML = conteudos[id].titulo;
  document.getElementById("subtitulo").innerHTML = conteudos[id].subtitulo;
  document.getElementById("conteudo").innerHTML = conteudos[id].texto;
}
