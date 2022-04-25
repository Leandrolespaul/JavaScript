/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar o valor verdadeiro

FALSY
*false
0
''  ""  ```
null / undefiend
NaN
EXEMPLO //console.log('Luiz' && '' && 'Maria');



*/

function falaOi () {
    return 'Oi';

}
const vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());

