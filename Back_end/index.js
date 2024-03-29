//

const express = require("express");
const app = express();
app.use(express.json());

let idC = 1;
let idP = 1;

const idAutomaticoClientes = () => idC++;
const idAutomaticoProdutos = () => idP++;

let clientes = [
  {
    id: idAutomaticoClientes(),
    nome: "Ana",
    idade: 45,
    telefone: "(22) 9999-9999",
  },
  {
    id: idAutomaticoClientes(),
    nome: "Danilo",
    idade: 32,
    telefone: "(22) 9999-9999",
  },
  {
    id: idAutomaticoClientes(),
    nome: "Juliana",
    idade: 65,
    telefone: "(22) 9999-9999",
  },
  {
    id: idAutomaticoClientes(),
    nome: "Nubia",
    idade: 32,
    telefone: "(22) 9999-9999",
  },
  {
    id: idAutomaticoClientes(),
    nome: "Elizangela",
    idade: 20,
    telefone: "(22) 9999-9999",
  },
];

let produtos = [
  {
    id: idAutomaticoProdutos(),
    descricao: "Coca-cola",
    preco: 12,
  },
  {
    id: idAutomaticoProdutos(),
    descricao: "Picanha, FAZ A DESGRAÇA DO L",
    preco: 68.9,
  },
  {
    id: idAutomaticoProdutos(),
    descricao: "Fanta",
    preco: 5,
  },
  {
    id: idAutomaticoProdutos(),
    descricao: "Miojo",
    preco: 1.29,
  },
  {
    id: idAutomaticoProdutos(),
    descricao: "arroz",
    preco: 25,
  },
];

app.get("/produtos", (req, res) => {
  res.send(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const buscar = produtos.find(
    (produto) => String(produto.id) === req.params.id
  );
  res.send(buscar);
});
app.post("/produtos", (req, res) => {
  // validação
  if (!req.body.descricao) {
    res.status(400);
    res.send("Descrição é obrigatória.");
  }
  if (!req.body.preco) {
    res.status(400);
    res.send("Preço é obrigatório.");
  }

  produtos.push({
    id: idAutomaticoProdutos(),
    descricao: req.body.descricao,
    preco: req.body.preco,
  });

  res.send("Adicionado");
});

app.put("/produtos/:id", (req, res) => {
  let encontrado = produtos.find(
    (produto) => produto.id === parseInt(req.params.id)
  );

  if (req.body.descricao) {
    encontrado.descricao = req.body.descricao;
  }
  if (req.body.preco) {
    encontrado.preco = req.body.preco;
  }

  res.send(encontrado);
});

app.delete("/produtos/:id", (req, res) => {
  produtos = produtos.filter(
    (produto) => produto.id !== parseInt(req.params.id)
  );
  console.log(req.params);
  res.send("Deletado");
});

app.get("/clientes", function (req, res) {
  res.send(clientes);
});

app.get("/clientes/:id", (req, res) => {
  const procurar = clientes.find(
    (cliente) => String(cliente.id) === req.params.id
  );
  res.send(procurar);
});

app.post("/clientes", function (req, res) {
  if (!req.body.nome) {
    res.status(400);
    res.send("Nome é obrigatório.");
  }
  if (!req.body.idade) {
    res.status(400);
    res.send("Idade é obrigatório.");
  }
  if (!req.body.telefone) {
    res.status(400);
    res.send("Telefone é obrigatório.");
  }
  clientes.push({
    id: idAutomaticoClientes(),
    nome: req.body.nome,
    idade: req.body.idade,
    telefone: req.body.telefone,
  });
  res.send("ok");
});

app.put("/clientes/:id", (req, res) => {
  const encontrado = clientes.find(
    (cliente) => cliente.id === parseInt(req.params.id)
  );

  if (req.body.nome) {
    encontrado.nome = req.body.nome;
  }
  if (req.body.idade) {
    encontrado.idade = req.body.idade;
  }
  if (req.body.telefone) {
    encontrado.telefone = req.body.telefone;
  }

  res.send(encontrado);
});

app.delete("/clientes/:id", (req, res) => {
  clientes = clientes.filter(
    (cliente) => cliente.id !== parseInt(req.params.id)
  );
  console.log(req.params);
  res.send("Deletado");
});

app.listen(4000, () => {
  console.log("Servidor Iniciado");
});


