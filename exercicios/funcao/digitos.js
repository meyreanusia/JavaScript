/* Faça uma função que informe a quantidade de 
dígitos de um determinado número inteiro informado.*/

const prompt = require("prompt-sync")()

let numeros = prompt("Digite um numero: ")

function digitos(numeros){
    let i = 0; 
    for (let digito of numeros){
        i++
    }
    return i

}

console.log("O número digitado contem:",digitos(numeros), "Digito");
