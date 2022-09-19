const prompt = require('prompt-sync')()
/* Verificar se o numero é primo e
 imprimir todos os numero primos ate N*/

function primeNumbers(num){
    for (let i = 0; i <= num; i++){
        if(isPrimo(i)){
            console.log(i)
        }
    }
}

function isPrimo(num){
   for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false
    }
   }
   return num > 1
}



let inteiro = prompt("Digite o numero inteiro: ")
console.log(isPrimo(inteiro));