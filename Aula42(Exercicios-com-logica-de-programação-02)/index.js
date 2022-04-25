// // Escreva uma função chamada ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number).
// // Retorne true se a imagem estiver no modo
// paisagem.

const ePaisagem = (largura, altura) => largura > altura;   //modo paisagem é a largura maior q a altura
console.log(ePaisagem(1080, 1920));