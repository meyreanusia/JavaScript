const prompt = require("prompt-sync")()
function dias(idade){
    let numeroDeDias = idade * 365
    return numeroDeDias
}

let idade = prompt("Qual a sua idade?")
console.log(dias(idade));
