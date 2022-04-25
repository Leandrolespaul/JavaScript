function recursiva(max) {
    if (max >= 10) return; // se um numero for maior ou igual a 10 ela para a função
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0); // 0 é o valor do parâmetro, que vc coloca 