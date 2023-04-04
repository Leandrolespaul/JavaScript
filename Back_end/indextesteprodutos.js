let id = 1;
const idAutomatico = () => id++;

const produtos = [
  {
    id: idAutomatico(),
    descricao: "Refrigerante",
    marca: "Coca-Cola",
    unidadeMedida: "350ml",
    preco: 5.0,
  },
  {
    id: idAutomatico(),
    descricao: "Pão",
    marca: "Panco",
    unidadeMedida: "500g",
    preco: 7.8,
  },
  {
    id: idAutomatico(),
    descricao: "Cerveja",
    marca: "Cristal",
    unidadeMedida: "350ml",
    preco: 7.0,
  },
  {
    id: idAutomatico(),
    descricao: "Arroz",
    marca: "Sepé",
    unidadeMedida: "5kg",
    preco: 23.9,
  },
  {
    id: idAutomatico(),
    descricao: "Filé de Frango",
    marca: "Pif-Paf",
    unidadeMedida: "1kg",
    preco: 11.2,
  },
  {
    id: idAutomatico(),
    descricao: "Carne de Boi - Picanha",
    marca: "Friboi",
    unidadeMedida: "1kg",
    preco: 63.9,
  },
];

const produtoNovo = {
  descricao: "Vassoura",
  marca: "Rossi",
  unidadeMedida: "01 unidade",
  preco: 25.0,
};

const criar = () => {
  produtos.push(produtoNovo);

  return produtos;
};

const deletarProdutoPorId = (id) => {
  const deletando = produtos.filter((produto) => produto.id !== id);
  return deletando;
};

const alterarProduto = (id, descricao, marca, unidadeMedida, preco) => {
  if (descricao && typeof descricao !== "string") throw "Error";
  if (marca && typeof descricao !== "string") throw "Error";

  const encontrarProduto = produtos.find((produto) => produto.id === id);

  if (descricao) encontrarProduto.descricao = descricao;
  if (marca) encontrarProduto.marca = marca;
  if (unidadeMedida) encontrarProduto.unidadeMedida = unidadeMedida;
  if (preco) encontrarProduto.preco = preco;

  return produtos;
};

// console.log(criar())
// console.log(produtos)
// console.log(deletarProdutoPorId(1))
// console.log(alterarProduto(2, "Farinha-Branca", "Pereira", "1kg", 5.78));

function media(arrayNum) {
  let ac = 0;
  for (let i = 0; i < arrayNum.length; i++) {
    ac += arrayNum[i];
  }
  return ac / arrayNum.length;
}
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.reduce((ac, numero) => (numero += ac), 0) / numeros.length);

console.log(media([1, 2, 3, 4, 5, 6]));
