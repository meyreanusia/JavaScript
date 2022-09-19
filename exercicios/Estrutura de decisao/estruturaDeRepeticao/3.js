const { isArrayBindingPattern } = require("typescript")

const prompt = require("prompt-sync")()

let nomeMaior, nomeMenor, idadeMaior, idadeMenor;

for (let i = 0; i < 3; i++){
 

    let nome = prompt("Digite o seu nome: ")
    let idade = prompt('Digite a sua idade: ')
  
    if( i == 0){
        nomeMaior = nome
        idadeMaior = idade
        nomeMenor = nome
        idadeMenor = idade
        console.log("entrei no primeiro");
    }

    else if(idade > idadeMaior){
    idadeMaior = idade
    nomeMaior = nome
    console.log("entrei no segundo");
    }
    else if (idade < idadeMenor){
    idadeMenor = idade
    nomeMenor = nome
    console.log("entrei no terceiro");
    }
   
}

console.log(`Maior: ${idadeMaior}, ${nomeMaior}
menor: ${idadeMenor}, ${nomeMenor}`);

