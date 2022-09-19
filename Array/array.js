// maneiras de declarar um Array
let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[1])
//Add intem a um Array
aprovados[3] = "Paulo"
console.log(aprovados[3])
aprovados.push("Meyre")
console.log(aprovados.length) // tamanho de um array
//aprovados.sort() reordenar os elementos do array

//excluindo itens de um Array
delete aprovados[1] //O delete nao reordena o Array. 
                    // Os incides continuará no lugar de origem
aprovados = ["Bia", "Carlos", "Ana"]  
aprovados.splice(1, 1) //add elemento em um indice/ add ou removo ao mesmo tempo             
console.log(aprovados)// o primeiro paremetro é para dizer a partir de qual idice, e depois quantos excluir
aprovados.splice(1, 1, "Carlos")//exclui o elemento 1 e depois add o novo intemclg

console.log();