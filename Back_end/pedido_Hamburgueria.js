const { geradorId } = require("./util");
const gerarIdAdicional = geradorId();
const gerarIdPedido = geradorId();

const adicionaisDisponiveis = [
  {
    id: gerarIdAdicional(),
    item: "Queijo-Empanado",
    preco: 8.0,
  },
  {
    id: gerarIdAdicional(),
    item: "Carne-Blend 80g",
    preco: 6.0,
  },
  {
    id: gerarIdAdicional(),
    item: "Carne-Blend 150g",
    preco: 8.0,
  },
  {
    id: gerarIdAdicional(),
    item: "Carne-Frango-Blend 150",
    preco: 8.0,
  },
];

const itens = [
  {
    id: gerarIdPedido(),
    descricao: "Chumi-Burguer",
    ingredientes:
      "Pão-Brioche, Carne-blend-Linguiça 150g, Bacon, Queijo-Cheedar",
    preco: 25.9,
  },
  {
    id: gerarIdPedido(),
    descricao: "Mega-Burguer",
    ingredientes:
      "Pão-Brioche, Carne-blend 150g, Carne-blend 150g, Bacon, Queijo-Mussarela",
    preco: 32.9,
  },
  {
    id: gerarIdPedido(),
    descricao: "Cream-Burguer",
    ingredientes:
      "Pão-Brioche, Carne-blend 150g, Bacon, Queijo-Cheedar, Cream-Cheese",
    preco: 26.9,
  },
  {
    id: gerarIdPedido(),
    descricao: "Bacon-Burguer",
    ingredientes: "Pão-Gergelim, Carne-blend 150g, Bacon, Queijo-Mussarela",
    preco: 19.9,
  },
];

const pedido = { itens: [], valorTotal: 0 };

const adicionarItemPedido = (idItem, qtd, adicionaisPedido) => {
  const item = itens.find((item) => item.id === idItem);
  if (!item) throw Error("Item não encontrado.");

  const adicionais = adicionaisPedido.map((adc) => {
    const item = adicionaisDisponiveis.find((add) => add.id === adc.id);
    return { item, qtd: adc.qtd };
  });

  pedido.itens.push({ item, qtd, adicionais });

  // const valorTotalItem = item.preco * qtd;
  const mapeamento = pedido.itens.map((item) => {
    const valorPedido = item.item.preco * item.qtd;
    const mapeamentoAdicionais = adicionais.map((adicional) => {
      console.log(adicional.item.preco * item.qtd);
    });

    console.log(valorPedido.toFixed(2));
  });

  // console.log(valorTotalItem.toFixed(2));
};

adicionarItemPedido(2, 3, [
  { id: 1, qtd: 2 },
  { id: 2, qtd: 1 },
]);

adicionarItemPedido(1, 1, [{ id: 2, qtd: 1 }]);
console.log(JSON.stringify(pedido, null, 2));
