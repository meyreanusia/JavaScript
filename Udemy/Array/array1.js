const frutas = []
frutas[0] = "Abacaxi"
frutas[1] = "Laranja"
frutas[2] = "Maçã"
frutas[3] = "Limão"

frutas.unshift("Kiwi,", "Uva")
frutas.push("amora")
console.log(frutas);

frutas.splice(2,3)//exclui passando indice
console.log(frutas);
let indice1 = frutas.indexOf("Melancia") // encontrar o indice do elemento
console.log(frutas[indice1]);


frutas.sort()//ordena
console.log(frutas)

frutas.reverse()//ordem descrescente
console.log(frutas)