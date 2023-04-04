var express = require("express");
var app = express();
app.use(express.json());

const produtos = [
    {
        Coca_cola: '1 litro',
        preço: 8.00
    },
    {
        Arroz: '1kg',
        preço: 8.00
    },
    {
        Picanha_Homenagem_a_Lula: '1kg',
        preco: 68.90 + ' conto, Faz o L'
    },
    {
        Capsula_Dolce_Gusto: '1 cx',
        preco: 25.90

    },
    {
        Chinelo_Havaianas: 'par',
        preco: 35.00
    }
]

app.get("/produtos", function (req, res) {
  res.send(produtos)
});

app.post("/produtos", function (req, res) {
    produtos.push(req.body)
    res.send('Adicionado')
})

app.listen(4000, () => {
    console.log("Bem Vindo ao SuperMercado");
  });