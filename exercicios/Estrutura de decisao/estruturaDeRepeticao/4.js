const prompt = require("prompt-sync")()

for(i = 0; i < 2; i++){
   let numero1 = parseInt(prompt("Digite o primeiro numero: "))
   let numero2 = parseInt(prompt("Digite o segundo numero: "))
  
   let operacao = prompt("Digite a operação(+, -, x, /): ")

    if(operacao == "+"){
        console.log(numero1 + numero2);
    }
    
    else if(operacao == "-"){
        console.log(numero1 - numero2);
    }
    else if(operacao == "x"){
        console.log(numero1 * numero2);
    }
    else if(operacao == "/"){
        console.log(numero1 / numero2);
    }

}