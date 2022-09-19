const prompt = require('prompt-sync')()

let array = [] 

for(i= 0; i < 3 ; i++){
    let valor1 = prompt(`Digite o valor ${i + 1}: `)
    array.push(valor1)

}