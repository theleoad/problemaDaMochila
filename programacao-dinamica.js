// variaves necessárias
var tabela = [];
var valor = [];
var itemsSelecionados = [];

// definicao da capacidade maxima da mochila
const capacidade = 12;

// criando os itens
var items = [
  {
    id: 1,
    nome: "item1",
    peso: 6,
    valor: 30
  },
  {
    id: 2,
    nome: "item2",
    peso: 3,
    valor: 14
  },
  {
    id: 3,
    nome: "item3",
    peso: 4,
    valor: 16
  },
  {
    id: 4,
    nome: "item4",
    peso: 2,
    valor: 9
  },
  {
    id: 5,
    nome: "item5",
    peso: 5,
    valor: 20
  }
];

// definicao de espaco disponivel
var espacoDisponivel = [];
for (var i = 0; i <= capacidade; i++) {
  espacoDisponivel.push(i);
}

//construir tabela
const construirTabela = (item, peso) => {
  if (item < 0 || peso < 0) return 0;
  return tabela[item][peso];
};

//inicializar tabela com valores
const iniciarTabelasEValores = () => {
  // loop nos itens e pesos
  for (var i = 0; i < items.length; i++) {
    tabela[i] = [];
    valor[i] = [];
    for (var j = 0; j < espacoDisponivel.length; j++) {
      tabela[i][j] = 0;
      valor[i][j] = 0;
    }
  }
};

const calcularTabelas = () => {
  // loop nos itens e pesos
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    for (var j = 0; j < espacoDisponivel.length; j++) {
      // se o j < item.peso, nao pegar
      if (j < item.peso) {
        tabela[i][j] = construirTabela(i - 1, j);
      } else {
        // pegar para a tabela ou retirar, pegar sempre o de maior valor
        var pegarPeloValor = item.valor + construirTabela(i - 1, j - item.peso);
        var retirarPeloValor = construirTabela(i - 1, j);
        tabela[i][j] =
          pegarPeloValor > retirarPeloValor ? pegarPeloValor : retirarPeloValor;
        valor[i][j] = pegarPeloValor > retirarPeloValor ? 1 : 0;
      }
    }
  }
};

const agruparItensSelecionados = () => {
  var peso_avail = capacidade;
  var item_index = items.length - 1;
  for (item_index; item_index >= 0; item_index--) {
    if (valor[item_index][peso_avail] === 1) {
      itemsSelecionados.push(items[item_index]);
      peso_avail -= items[item_index].peso;
    }
  }
};

//Executando

iniciarTabelasEValores();
calcularTabelas();
agruparItensSelecionados();

tabela;
tabela[items.length - 1][capacidade];
itemsSelecionados;
