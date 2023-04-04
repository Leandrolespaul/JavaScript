let id = 1;
const idAutomatico = () => id++;

const adicional = [
  { id: idAutomatico(), item: "Queijo Empanado", preco: 8.0 },
  { id: idAutomatico(), item: "Carne-Blend 80g", preco: 6.0 },
  { id: idAutomatico(), item: "Carne-Blend 150g", preco: 8.0 },
  { id: idAutomatico(), item: "Carne-Frango-Blend 150", preco: 8.0 },
];

const hamburguers = [
  {
    id: idAutomatico(),
    hamburguer: "Chumi-Burguer",
    ingredientes: "hsbhgbshgbsghjb, kjskjskjs, jksjkskjs, jiksjikskjs",
    adicionais: [],
    quantidade: 0,
    preco: 25.9,
  },
  {
    id: idAutomatico(),
    hamburguer: "Mega-Burguer",
    ingredientes: [
      "Pão-Gergelim",
      "Carne-Blend 150g",
      "Carne-Blend 150g",
      "Queijo Mussarela",
      "Cebola Cryspy",
    ],
    quantidade: 0,
    preco: 32.9,
  },
  {
    id: idAutomatico(),
    hamburguer: "Cream-Burguer",
    ingredientes: {},
    quantidade: 0,
    preco: 26.9,
  },
  {
    id: idAutomatico(),
    hamburguer: "Bacon-Burguer",
    ingredientes: {
      pao: "Pão-Brioche",
      bacon: "Bacon",
      queijo: "Queijo-Mussarela",
      salada: "Alface-Tomate",
    },
    quantidade: 0,
    preco: 19.9,
  },
];

const pedidoCliente = [];

const formaPagamento = {
  pagamentoDebito: "DEBITO",
  pagamentoCredito: "CREDITO",
  pagamentoPIX: "PIX",
};

const adicionarPedidoCliente = (hamburguer, quantidade) => {
  const encontrarHamburguer = hamburguers.find(
    (pedido) => pedido.hamburguer === hamburguer
  );
  if (encontrarHamburguer) {
    pedidoCliente.push(encontrarHamburguer);
    encontrarHamburguer.quantidade = quantidade;
    if (encontrarHamburguer.quantidade === undefined) {
      encontrarHamburguer.quantidade = 0;
    }
  } else {
    console.log("Hamburguer não encontrado!");
  }
};

adicionarPedidoCliente("Chumi-Burguer", 2, "Carne-Blend 80g");
console.log(pedidoCliente);
