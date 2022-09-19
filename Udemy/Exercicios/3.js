const prompt= require("prompt-sync")()


function salario (hora, salarioHora){
    return `Salário igual a R$${hora * salarioHora} `
}

let hora = prompt("Digite as horas trabalhadas: ")
let valorHora = prompt("Digite  o valor recebido por hora trabalhada: ")

console.log(salario(hora,valorHora));
