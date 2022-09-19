const prompt = require('prompt-sync')()



let converterFahrenheit = c => c * 1.8 + 32
let converterCelsius = f => f - 32 / 1.8


let parada = 1

while(parada != 0){

    let usuario = prompt("Digite uma das opções:\n[1] Grau Celsius para Fahrenheit\n[2] Fahrenheit para Grau Celsius\n[0] Para sair\n")

    if (usuario == 1){
        let temperatura = prompt("Digite a temperatura que será convertida paraFahrenheit: ")
        console.log(converterFahrenheit(temperatura))
    }else if(usuario == 0){
        parada = usuario

    }else if(usuario == 2){
        let temperatura = prompt(prompt("Digite a temperatura que será convertida Celsiust: "))
        console.log(converterCelsius(temperatura))
    }else{
        console.log("Opção incorreta!!");
    }
}