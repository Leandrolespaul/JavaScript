let id = 1;
const idAutomatico = () => id++;
let idAdd = 1;
const idAddAutomatico = () => idAdd++;

const adicional = [
  { item: "Queijo-Empanado", quantidade: 0, preco: 8.0 },
  { item: "Carne-Blend 80g", quantidade: 0, preco: 6.0 },
  { item: "Carne-Blend 150g", quantidade: 0, preco: 8.0 },
  { item: "Carne-Frango-Blend 150", quantidade: 0, preco: 8.0 },
];

const hamburguers = [
  {
    id: idAutomatico(),
    hamburguer: "Chumi-Burguer",
    ingredientes:
      "Pão-Brioche, Carne-blend-Linguiça 150g, Bacon, Queijo-Cheedar",
    adicionais: "",
    remocao: "",
    quantidade: 0,
    preco: 25.9,
  },
  {
    id: idAutomatico(),
    hamburguer: "Mega-Burguer",
    ingredientes:
      "Pão-Brioche, Carne-blend 150g, Carne-blend 150g, Bacon, Queijo-Mussarela",
    adicionais: "",
    remocao: "",
    quantidade: 0,
    preco: 32.9,
  },
  {
    id: idAutomatico(),
    hamburguer: "Cream-Burguer",
    ingredientes:
      "Pão-Brioche, Carne-blend 150g, Bacon, Queijo-Cheedar, Cream-Cheese",
    adicionais: "",
    remocao: "",
    quantidade: 0,
    preco: 26.9,
  },
  {
    id: idAutomatico(),
    hamburguer: "Bacon-Burguer",
    ingredientes: "Pão-Gergelim, Carne-blend 150g, Bacon, Queijo-Mussarela",
    adicionais: "",
    remocao: "",
    quantidade: 0,
    preco: 19.9,
  },
];

const pedidoCliente = [];

const metodoPagamento = {
  DEBITO: "DEBITO",
  CREDITO: "CREDITO",
  PIX: "PIX",
};

const adicionarPedidoCliente = (
  hamburguer,
  quantidade,
  addItem,
  quantidadeItem,
  formaDePagamento
) => {
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
  let precoItem = 0;
  if (addItem) {
    const buscar = adicional.find((ingre) => ingre.item === addItem);
    if (buscar) {
      buscar.quantidade = quantidadeItem;
      if (quantidadeItem) {
        buscar.preco = quantidadeItem * buscar.preco;
        precoItem = buscar.preco;
      }
      encontrarHamburguer.adicionais = buscar;
    }
  }
  if (
    formaDePagamento === metodoPagamento.DEBITO ||
    formaDePagamento === metodoPagamento.PIX
  ) {
    const calculo = encontrarHamburguer.preco * encontrarHamburguer.quantidade;
    const total = calculo + precoItem;
    console.log(total);
  }
};

adicionarPedidoCliente("Bacon-Burguer", 2, "Queijo-Empanado", 4, "PIX");
