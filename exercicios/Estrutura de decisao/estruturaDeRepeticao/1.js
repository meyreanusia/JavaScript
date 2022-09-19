const prompt = require('prompt-sync')();

let numero1 =  prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite o terceiro número: ") 

if(numero1 > numero2){
    let resultado = numero1 - numero2;
    console.log(`O resultado da subtração entre ${numero1} e ${numero2} é: ${resultado}`);
}
else{
    let resultado = numero2 - numero1
    
    console.log(`O resultado da subtração entre ${numero2} e ${numero1} é: ${resultado}`);
}