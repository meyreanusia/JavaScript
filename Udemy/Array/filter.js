/*  FILTER()
filtra os elementos de um array e gera um novo array
*/


const numeros = [1, 4, 9,16]
const impares = numeros.filter((numero) => numero % 2 === 1)
console.log(impares);


const numero = [10,20,30,40,50]
const novosNumeros = numero.filter((numero) => numero > 25)
console.log(novosNumeros);