function mes(x){
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return meses[x - 1] 

}

const prompt = require("prompt-sync")()

let numero = prompt("Digite um numero de 1 a 12: ")
if(numero < 1 || numero > 12){
    console.log("Numero incorreto!! \n Por favor, digite um número de 1 a 12. ");
}
else{
    console.log(mes(numero));
}
