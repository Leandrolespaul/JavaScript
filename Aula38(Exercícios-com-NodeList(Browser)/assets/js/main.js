const paragrafos = document.querySelector('.paragrafos'); // query selector so retorna um elemento
const ps = paragrafos.querySelectorAll('p'); //pega todos os paragrafos

const estiloBody = getComputedStyle(document.body); //tudo de css computado pelo navegador
const backgroundColorBody = estiloBody.backgroundColor; // pegamos a cor de fundo do body
console.log(backgroundColorBody);

for (let p of ps) { // função para selecionar todos os paragrafos do navegador
    p.style.backgroundColor = backgroundColorBody; // Ou seja paragrafo é igual ao fundo (backgroundcolorbody)
    p.style.color = '#FFFFFF'; // colocar o fundo da letra em branco (Paragrafo é igual a cor BRANCA)
}



