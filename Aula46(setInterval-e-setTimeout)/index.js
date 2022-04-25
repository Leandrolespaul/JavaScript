function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoInterval() {               // criei essa function dentro de setInterval
//     console.log(mostraHora());
// }

const timer = setInterval(function () {
console.log(mostraHora());
}, 1000);

setInterval(function() {
    console.log('Olá mundo!'); // depois de 10 segundos ele mostra o "Olá mundo!"
    clearInterval(timer);
}, 10000); //10000 = (dez mil milesímos) 10segundos.
