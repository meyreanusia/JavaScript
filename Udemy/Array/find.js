/*FIND()    FINDINDEX()

    find() = obtém o valor do primeiro elemento no array qe satisfaz a condicao
    findIndex() = retorna o indice da condicao da funcao
*/

const numeros = [-7, -10, -3, 0 , 25, 5, 100]
let numeroRetornado = numeros.find((numeros) => numeros > 0)
let indiceRetornado = numeros.findIndex((numeros) => numeros > 0)

console.log(numeroRetornado);
console.log(indiceRetornado);