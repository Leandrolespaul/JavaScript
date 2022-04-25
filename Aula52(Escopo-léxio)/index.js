const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}
function usaFalanome() {
    const nome = 'Otávio';
    falaNome();
}
usaFalanome();