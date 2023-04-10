// ID AUTOMATICO
let id = 1;

const idAutomatico = () => id++;

// ARRAY DO PEDIDO DE CLIENTE
const pedidoDoCliente = [
  {
    id: idAutomatico(),
    produto: "Mouse",
    marca: "Razer Phanton RXT1320",
    quantidade: 2,
    preco: 10,
  },
  {
    id: idAutomatico(),
    produto: "Teclado",
    marca: "Anne Pro 2",
    quantidade: 1,
    preco: 10,
  },
  {
    id: idAutomatico(),
    produto: "Fone",
    marca: "JBL TD110",
    quantidade: 4,
    preco: 10,
  },
  {
    id: idAutomatico(),
    produto: "Mousepad",
    marca: "Razer G-PadMax",
    quantidade: 1,
    preco: 10,
  },
];
// ARRAY DE CUPONS DE DESCONTO
const cuponsDeDesconto = [
  "KG23",
  "HG78",
  "UI89",
  "FD21",
  "WS32",
  "QO90",
  "SC21",
  "LE32",
];

// METODO DE PAGAMENTO: DEBITO, CREDITO OU PIX
const metodoPagamento = { DEBITO: "DEBITO", CREDITO: "CREDITO", PIX: "PIX" };

// FUNÇÃO DO PEDIDO ONDE APLICA-SE A FORMA DE PAGAMENTO, NUMERO DE VEZES E CUPOM DE DESCONTO
const pedidoTotal = (formaPagamento, numeroVezes, cupom) => {
  let descontoAVista = 5;
  let ac = 0;
  for (let i = 0; i < pedidoDoCliente.length; i++) {
    const multiplicacao =
      pedidoDoCliente[i].quantidade * pedidoDoCliente[i].preco;
    ac += multiplicacao;
    console.log(
      "ID:",
      pedidoDoCliente[i].id,
      "| Produto: ",
      pedidoDoCliente[i].produto,
      "| Marca: ",
      pedidoDoCliente[i].marca,
      "| Quantidade: ",
      pedidoDoCliente[i].quantidade,
      "| Preço: R$",
      pedidoDoCliente[i].preco
    );
  }

  console.log("_____________________________");
  console.log("Sua compra ficou em: ", ac.toFixed(2));
  console.log("_____________________________");

  // CUPOM DE DESCONTO DE 10% E FAZ A VERIFICAÇÃO SE O CUPOM É VALIDO OU INVÁLIDO
  if (cupom) {
    const encontrarCupom = cuponsDeDesconto.find((codigo) => codigo === cupom);
    if (encontrarCupom) {
      console.log("CUPOM VÁLIDO");
      let descontoCupom = 10;
      const calculoDescontoCupom = (ac * descontoCupom) / 100;
      let valorDescontado = ac - calculoDescontoCupom;
      ac = valorDescontado;
      console.log(
        `Desconto do Cupom de ${descontoCupom}%. Seu valor total ficou: R$ ${ac.toFixed(
          2
        )}`
      );
    } else {
      console.log("DESCULPE, NÃO ENCONTRAMOS SEU CUPOM. CUPOM INVÁLIDO!");
    }
  }
  // CREDITO OU PIX COM DESCONTO DE 5%
  if (
    formaPagamento === metodoPagamento.DEBITO ||
    formaPagamento === metodoPagamento.PIX
  ) {
    const calculoPorcento = (descontoAVista * ac) / 100;
    ac - calculoPorcento;

    console.log(
      `Seu desconto de ${descontoAVista}% no DÉBITO ou PIX foi de: R$ ${calculoPorcento.toFixed(
        2
      )}`
    );

    const total = ac - calculoPorcento;
    console.log(`Valor total da sua compra é de: R$ ${total.toFixed(2)}`);
  }
  // CREDITO A VISTA COM DESCONTO DE 5%
  if (formaPagamento === metodoPagamento.CREDITO) {
    if (numeroVezes < 1 || numeroVezes > 12) throw Error("Não Aceito.");
    if (numeroVezes === 1) {
      const calculoPorcento = (descontoAVista * ac) / 100;
      ac - calculoPorcento;
      console.log(
        `Seu desconto de ${descontoAVista}% no CRÉDITO à vista foi de: R$ ${calculoPorcento.toFixed(
          2
        )}`
      );
      const total = ac - calculoPorcento;
      console.log(
        `Sua compra foi a vista pelo cartão de crédito no valor de : R$ ${total.toFixed(
          2
        )}`
      );
    }
    // CREDITO ATE 6 VEZES SEM JUROS
    if (numeroVezes >= 2 && numeroVezes <= 6) {
      const pagamentoCreditoSemJuros = ac / numeroVezes;
      console.log(
        `Seu pagamento ficou em 0${numeroVezes} vezes sem juros, no valor de: R$`,
        pagamentoCreditoSemJuros.toFixed(2)
      );
    }
    // CREDITO EM 7 ou 8 VEZES COM JUROS DE 0,5% AO MÊS
    if (numeroVezes === 7 || numeroVezes === 8) {
      let juros = 0.5;
      const taxaZeroEMeio = (ac / 100) * juros;
      const numVezes = ac / numeroVezes;
      const total = taxaZeroEMeio + numVezes;
      const valorTotal = total * numeroVezes;
      console.log(`Valor total parcelado: R$ ${valorTotal.toFixed(2)}`);
      console.log(
        `Seu pagamento ficou em 0${numeroVezes} vezes com juros de ${juros}% ao mês, no valor de: R$`,
        total.toFixed(2)
      );
    }
    // CREDITO EM 9 ou 10 VEZES COM JUROS DE 1% AO MÊS
    if (numeroVezes === 9 || numeroVezes === 10) {
      let juros = 1;
      const taxaDeUmPorcento = (ac / 100) * juros;
      const numVezes = ac / numeroVezes;
      const total = taxaDeUmPorcento + numVezes;
      const valorTotal = total * numeroVezes;
      console.log(`Valor total parcelado: R$ ${valorTotal.toFixed(2)}`);
      console.log(
        `Seu pagamento ficou em ${numeroVezes} vezes com juros de ${juros}% ao mês, no valor de: R$`,
        total.toFixed(2)
      );
    }
    // CREDITO EM 11 ou 12 VEZES COM JUROS DE 1,5% AO MÊS
    if (numeroVezes === 11 || numeroVezes === 12) {
      let juros = 1.5;
      const taxaDeUmEMeio = (ac / 100) * juros;
      const numVezes = ac / numeroVezes;
      const total = taxaDeUmEMeio + numVezes;
      let valorTotal = total * numeroVezes;

      console.log(`Valor total parcelado: R$ ${valorTotal.toFixed(2)}`);
      console.log(
        `Seu pagamento ficou em ${numeroVezes} vezes com juros de ${juros}% ao mês, no valor de: R$`,
        total.toFixed(2)
      );
    }
  }
};

// DELETAR QUANTIDADE DO PEDIDO DO CLIENTE, DELETA UM POR UM
const deletarQuantidade = (id) => {
  const achar = pedidoDoCliente.find((pedido) => pedido.id === id);
  if (achar) {
    achar.quantidade = achar.quantidade - 1;
  }
};
// CRIAR E ADICIONAR PRODUTOS NO PEDIDO DE CLIENTE
const adicionarProduto = (produto, marca, quantidade, preco) => {
  pedidoDoCliente.push({
    id: idAutomatico(),
    produto: produto,
    marca: marca,
    quantidade: quantidade,
    preco: preco,
  });
  return pedidoDoCliente;
};
// MODIFICAR A QUANTIDADE DE ITENS DO PRODUTO DO PEDIDO DO CLIENTE
const alterarQuantidade = (id, quantidade) => {
  const achar = pedidoDoCliente.find((pedido) => pedido.id === id);
  if (achar) {
    achar.quantidade = quantidade;
  }
};

// CHAMANDA AS FUNÇÕES CORRESPONDENTES ABAIXO:
adicionarProduto("Monitor 24p", "Samsung", 1, 10);
adicionarProduto("Microfone", "Shure M58", 2, 10);
alterarQuantidade(2, 5);
alterarQuantidade(5, 6);
pedidoTotal(metodoPagamento.CREDITO, 7, "Kw23");
console.log("_____________________________");
console.log("Obrigado(a) pela preferência, volte sempre!");
