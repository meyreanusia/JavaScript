

const prompt = require("prompt-sync")()

function cumprimentar(nome){
    return "Olá, " + nome
}

nome = prompt("digite o seu nome: ")
console.log(cumprimentar(nome)); 