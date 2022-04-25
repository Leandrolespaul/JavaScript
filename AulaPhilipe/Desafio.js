// {nome: 'Philipe',  idade: 15} 
// filtrar as pessoas maiores de 18


const nossoBebe = [{
    nome: 'Philipe',  
    idade: 15

},
{
    nome: 'Leandro',
    idade: 30
},
{ 
    nome: 'Danilo(Vulgo-Cabeção)',
    idade: 12
},
{
    nome: 'Nadinho',
    idade: 67
},
{
    nome: 'Tayara (Danilo pegou na insistência)',
    idade: 18
},
{
    nome: 'Livia (era gostosa)',
    idade: 16
},
]

console.log('Pessoa maior de idade -> ', nossoBebe.filter(pessoa => pessoa.idade >= 18))
console.log('Pessoa menor de idade -> ',nossoBebe.filter(pessoa => pessoa.idade < 18))
console.log('Pessoa idosa -> ', nossoBebe.filter(pessoa => pessoa.idade > 60))