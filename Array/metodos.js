const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

pilotos.pop()//excluir do Array o ultimo elemento
console.log(pilotos);
pilotos.push("Verstappen")// add ao ultimo indice
console.log(pilotos);
pilotos.unshift("Hamilto")//add ao primiro indice




// splice pode add remover 
//add
pilotos.splice(2, 0, "Bottas", "Massa")//a partir do indice 2 , 0 n excluir ninguem, e add os elementos listados
console.log(pilotos);

//remover
pilotos.splice(3,1)

// Slice retorna um novo array 

const algunsPilotos1 = pilotos.slice(2) //pega apartir do indice passado, e retorna um novo array
const algunsPilotos2 = pilotos.slice(1, 4)//pega a partir do primeiro, ate o 4, sem incluir o quarto elemento. gerá novo array


