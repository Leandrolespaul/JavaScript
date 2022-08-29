let contador = 0

function contadoraDePalavras(texto) {
    const textoSVirgulaSponto = texto.replace(/,/g, ' ').replace('.', '')

    const textoSeparado = textoSVirgulaSponto.split(' ')

    for (let i = 0; i < textoSeparado.length; i++) {
        const element = textoSeparado[i];
        console.log(element)

    }

}

contadoraDePalavras('Um texto aqui para ser lido, Um texto aqui para ser lido.')