const prompt = require("prompt-sync")()
let soma = 0
while(soma < 100){
    numero = parseInt(prompt("Insira um número: "))
    soma += numero
    console.log(soma);

}